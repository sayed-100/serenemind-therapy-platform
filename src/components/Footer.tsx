import React, { useState } from 'react';
import { Sparkles, Heart, ShieldAlert, Check, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onSelectSpecialty?: (specialty: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectSpecialty }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#1F2723] text-[#FAF8F5] pt-16 pb-12 border-t border-[#313D37]">
      {/* Crisis Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-[#2A3530] border border-[#3E4F47] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 bg-[#E2856E]/20 text-[#F5A38E] rounded-lg shrink-0 mt-0.5 sm:mt-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#F3EFE6]">
                Need immediate or crisis support?
              </p>
              <p className="text-xs text-[#B2BDB6] mt-0.5">
                If you are in acute crisis, please call or text <strong className="text-white font-semibold">988</strong> (USA & Canada) or contact local emergency services immediately. SereneMind is not an emergency response provider.
              </p>
            </div>
          </div>
          <a
            href="tel:988"
            className="shrink-0 px-4 py-2 bg-[#3A4B42] hover:bg-[#485D52] text-[#FAF8F5] text-xs font-semibold rounded-lg transition-colors border border-[#4F6459]"
          >
            Call 988 Lifeline
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#303D37]">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#4A6B5D] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight text-white">
                SereneMind
              </span>
            </div>
            <p className="text-[#B9C4BC] text-sm leading-relaxed max-w-sm">
              "Better days begin with the right support." Fictional modern therapist discovery and mental-wellness platform demonstrating refined frontend engineering, responsive design, and intuitive human-first UX.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2C3832] text-[#B9C7BE] border border-[#3E4D45]">
                <Heart className="w-3.5 h-3.5 text-[#88B29C]" />
                Frontend Internship Portfolio Project
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A2B1A7] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CAD4CD]">
              <li>
                <button
                  onClick={() => { onNavigate('find'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  Find a Therapist
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('resources'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  Mental Health Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  Our Story & Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  Contact & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Clinical Specialties */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A2B1A7] mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CAD4CD]">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectSpecialty) onSelectSpecialty('Anxiety & Stress');
                    else onNavigate('find');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Anxiety & Stress
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectSpecialty) onSelectSpecialty('Relationships');
                    else onNavigate('find');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Relationships & Couples
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectSpecialty) onSelectSpecialty('Work & Life');
                    else onNavigate('find');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Work & Career Burnout
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectSpecialty) onSelectSpecialty('Sleep');
                    else onNavigate('find');
                    window.scrollTo(0, 0);
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Insomnia & Sleep
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Demonstration */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A2B1A7] mb-4">
              Weekly Reflection
            </h4>
            <p className="text-xs text-[#B5C2B9] leading-relaxed mb-3">
              Subscribe for gentle weekly wellness prompts, evidence-based coping exercises, and thoughtful wellness notes.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#2A3831] border border-[#485E52] rounded-lg text-xs text-[#9EC9AF] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7AC295] shrink-0" />
                <span>Thank you! You're subscribed to our reflection letter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email"
                    className="w-full bg-[#28332D] border border-[#3C4A42] text-[#FAF8F5] text-xs px-3.5 py-2.5 rounded-lg placeholder-[#86958C] focus:outline-none focus:ring-1 focus:ring-[#6B9680]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 bg-[#4A6B5D] hover:bg-[#5C8372] text-white rounded text-xs font-medium flex items-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-xs text-[#E8927C]">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Project Demonstration Disclaimer */}
        <div className="pt-8 text-center sm:text-left">
          <p className="text-xs text-[#8A988E] leading-relaxed">
            SereneMind is a fictional frontend demonstration project. Therapist profiles, reviews, availability, and pricing shown on this website are sample data.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A988E] border-t border-[#2B3731] mt-4">
          <p>© {new Date().getFullYear()} SereneMind Inc. Fictional platform for frontend development showcase.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#B6C5BB] cursor-pointer">Privacy Principles</span>
            <span className="hover:text-[#B6C5BB] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#B6C5BB] cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
