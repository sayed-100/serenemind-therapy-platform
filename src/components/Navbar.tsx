import React, { useState } from 'react';
import { Menu, X, Sparkles, User, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, extra?: any) => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenAuth
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; page: PageView; isAnchor?: boolean; anchorId?: string }[] = [
    { label: 'Find a Therapist', page: 'find' },
    { label: 'How It Works', page: 'home', isAnchor: true, anchorId: 'how-it-works' },
    { label: 'Resources', page: 'resources' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleAnchorOrPage = (link: typeof navLinks[0]) => {
    if (link.isAnchor && currentPage === 'home' && link.anchorId) {
      const el = document.getElementById(link.anchorId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
        return;
      }
    }
    handleNavClick(link.page);
    if (link.isAnchor && link.anchorId) {
      setTimeout(() => {
        const el = document.getElementById(link.anchorId!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-[#3D5A4C] rounded-lg p-1"
            aria-label="SereneMind Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#3D5A4C] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-[#E3EDE6]" />
            </div>
            <div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-[#1F2421] block leading-none">
                SereneMind
              </span>
              <span className="text-[11px] text-[#697268] tracking-wider uppercase font-medium mt-1 block">
                Mental Wellness
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page && !link.isAnchor;
              return (
                <button
                  key={link.label}
                  onClick={() => handleAnchorOrPage(link)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#3D5A4C] ${
                    isActive
                      ? 'text-[#2D4539] bg-[#EAE5D9]'
                      : 'text-[#4A554D] hover:text-[#1F2421] hover:bg-[#F2ECE1]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAuth}
              className="px-4 py-2 text-sm font-medium text-[#2E3B33] hover:text-[#1F2421] hover:bg-[#F0EAE0] rounded-lg transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
            >
              <User className="w-4 h-4 text-[#59695F]" />
              Sign In
            </button>
            <button
              onClick={() => handleNavClick('find')}
              className="px-5 py-2.5 bg-[#3D5A4C] text-[#FAF8F5] text-sm font-medium rounded-lg hover:bg-[#324B3E] active:scale-[0.98] transition-all shadow-sm flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D5A4C]"
            >
              <span>Find Support</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#2E3B33] hover:bg-[#EFE8DD] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E2D5] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1 pb-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page && !link.isAnchor;
              return (
                <button
                  key={link.label}
                  onClick={() => handleAnchorOrPage(link)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EAE5D9] text-[#2D4539]'
                      : 'text-[#404D44] hover:bg-[#F0EBE0]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#E8E2D5] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-3 px-4 text-center rounded-lg border border-[#D5CDBD] text-[#2E3B33] font-medium text-sm hover:bg-[#EFE9DD] transition-colors flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-[#59695F]" />
              Sign In to Demo Account
            </button>
            <button
              onClick={() => handleNavClick('find')}
              className="w-full py-3 px-4 bg-[#3D5A4C] text-[#FAF8F5] text-center font-medium text-sm rounded-lg hover:bg-[#324B3E] transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Find Support</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
