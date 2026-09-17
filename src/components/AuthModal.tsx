import React, { useState, useEffect } from 'react';
import { X, Lock, Mail, Eye, EyeOff, User, Sparkles, Check } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'client' | 'therapist'>('client');
  const [email, setEmail] = useState('demo.client@serenemind.org');
  const [password, setPassword] = useState('serene2025');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleRoleChange = (newRole: 'client' | 'therapist') => {
    setRole(newRole);
    if (newRole === 'client') {
      setEmail('demo.client@serenemind.org');
      setPassword('serene2025');
    } else {
      setEmail('dr.elena.rostova@serenemind.org');
      setPassword('clinicalpass2025');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF8F5] w-full max-w-md rounded-2xl border border-[#DDD5C5] shadow-2xl overflow-hidden my-6"
      >
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[#EAE4D7] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#3D5A4C] flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 id="auth-modal-title" className="font-serif text-lg font-semibold text-[#1F2421]">
                SereneMind Portal
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#6B7971] hover:text-[#1F2421] hover:bg-[#F2ECE1] rounded-lg transition-colors"
            aria-label="Close portal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="p-6">
          <div className="grid grid-cols-2 p-1 bg-[#ECE5D8] rounded-xl mb-5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => handleRoleChange('client')}
              className={`py-2 rounded-lg transition-all ${
                role === 'client'
                  ? 'bg-white text-[#1F2421] shadow-xs'
                  : 'text-[#5A685F] hover:text-[#1F2421]'
              }`}
            >
              Client Portal
            </button>
            <button
              type="button"
              onClick={() => handleRoleChange('therapist')}
              className={`py-2 rounded-lg transition-all ${
                role === 'therapist'
                  ? 'bg-white text-[#1F2421] shadow-xs'
                  : 'text-[#5A685F] hover:text-[#1F2421]'
              }`}
            >
              Therapist Portal
            </button>
          </div>

          {isSuccess ? (
            <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
              <div className="w-12 h-12 bg-[#E1EFE7] rounded-full flex items-center justify-center text-[#3D5A4C] mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#1F2421]">
                Welcome back to SereneMind!
              </h3>
              <p className="text-xs text-[#637269]">
                Redirecting to your {role === 'client' ? 'sessions schedule' : 'practice dashboard'}...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="auth-email" className="text-xs font-semibold uppercase tracking-wider text-[#505F55] block mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#7B8B82] absolute left-3.5 top-3" />
                  <input
                    id="auth-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#DDD5C5] rounded-xl text-xs sm:text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="auth-password" className="text-xs font-semibold uppercase tracking-wider text-[#505F55] block mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#7B8B82] absolute left-3.5 top-3" />
                  <input
                    id="auth-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#DDD5C5] rounded-xl text-xs sm:text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-[#7B8B82] hover:text-[#1F2421]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#6B7971]">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded accent-[#3D5A4C]" />
                  <span>Remember me</span>
                </label>
                <span className="hover:text-[#21382C] cursor-pointer">Forgot password?</span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 bg-[#3D5A4C] hover:bg-[#314A3E] text-white rounded-xl text-sm font-medium transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span>Signing in...</span>
                ) : (
                  <span>Sign In as {role === 'client' ? 'Client' : 'Therapist'}</span>
                )}
              </button>

              <div className="pt-2 text-center text-xs text-[#7B8980]">
                <span>Pre-filled with portfolio demonstration credentials.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
