import React, { useState } from 'react';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  Clock,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Platform Question');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    'General Platform Question',
    'Help Finding a Therapist',
    'Therapist Onboarding Inquiry',
    'Billing or Superbill Assistance',
    'Website Feedback / Internship Review'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
      }
    }

    if (!message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters to help us answer thoughtfully.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend asynchronous submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('General Platform Question');
    setMessage('');
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12">
      {/* Header */}
      <div className="max-w-2xl space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#4A6B5D] bg-[#EAE5D9] px-3 py-1 rounded-full">
          Get In Touch
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F2421]">
          We are here to help.
        </h1>
        <p className="text-sm sm:text-base text-[#59665E]">
          Have questions about finding a therapist, navigating billing superbills, or onboarding as a provider? Reach out to our concierge care team.
        </p>
      </div>

      {/* Main Grid: Contact Form + Support Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Card (col-span-7) */}
        <div className="lg:col-span-7 bg-white border border-[#DDD5C5] rounded-3xl p-6 sm:p-10 shadow-xs">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#E3EDE7] rounded-full flex items-center justify-center text-[#3D5A4C] mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F2421]">
                Thank you, {name.split(' ')[0]}!
              </h2>
              <p className="text-sm text-[#546258] max-w-md mx-auto leading-relaxed">
                Your message regarding <strong>"{subject}"</strong> has been received by our support team. We reply within one business day to <strong>{email}</strong>.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#FAF8F5] border border-[#DDD5C5] hover:bg-[#F2ECE1] text-[#29362E] text-xs sm:text-sm font-semibold rounded-xl transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#1F2421]">
                Send Us a Message
              </h2>

              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-[#4E5C53] block mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#7B8B82] absolute left-3.5 top-3.5" />
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Avery Taylor"
                    className={`w-full pl-10 pr-3.5 py-3 bg-[#FAF8F5] border rounded-xl text-sm text-[#1F2421] placeholder-[#8A968E] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C] transition-all ${
                      errors.name ? 'border-[#C95C46] bg-[#FCF6F5]' : 'border-[#DDD5C5]'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-[#C95C46] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-[#4E5C53] block mb-1.5">
                  Your Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#7B8B82] absolute left-3.5 top-3.5" />
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="avery.taylor@example.com"
                    className={`w-full pl-10 pr-3.5 py-3 bg-[#FAF8F5] border rounded-xl text-sm text-[#1F2421] placeholder-[#8A968E] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C] transition-all ${
                      errors.email ? 'border-[#C95C46] bg-[#FCF6F5]' : 'border-[#DDD5C5]'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-[#C95C46] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Dropdown */}
              <div>
                <label htmlFor="contact-subject" className="text-xs font-semibold uppercase tracking-wider text-[#4E5C53] block mb-1.5">
                  Inquiry Topic / Subject
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xl text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
                >
                  {subjects.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-[#4E5C53] block mb-1.5">
                  Your Message *
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#7B8B82] absolute left-3.5 top-3.5" />
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Describe how we can assist you with provider matching, billing questions, or anything else..."
                    className={`w-full pl-10 pr-3.5 py-3 bg-[#FAF8F5] border rounded-xl text-sm text-[#1F2421] placeholder-[#8A968E] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C] transition-all ${
                      errors.message ? 'border-[#C95C46] bg-[#FCF6F5]' : 'border-[#DDD5C5]'
                    }`}
                  />
                </div>
                {errors.message && (
                  <p className="text-xs text-[#C95C46] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#3D5A4C] hover:bg-[#314A3E] active:scale-[0.98] text-white font-semibold text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Submitting inquiry...</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Support Details & FAQs (col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Urgent Crisis Box */}
          <div className="bg-[#FAF2ED] border border-[#E6CEBF] rounded-3xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A64A38]">
              <ShieldAlert className="w-4 h-4" />
              <span>Crisis Support Lifeline</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5C3F35] leading-relaxed">
              If you or a loved one are in acute distress, please do not wait for an email response. Dial or text <strong>988</strong> in the US & Canada for immediate, free, confidential 24/7 care.
            </p>
          </div>

          {/* Concierge Details */}
          <div className="bg-white border border-[#DDD5C5] rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs">
            <h3 className="font-serif text-lg font-semibold text-[#1F2421]">
              Support Operating Hours
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#546258]">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#7A8A80]" />
                <span>Monday – Friday: 8:00 AM – 7:00 PM EST</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#7A8A80]" />
                <span>Saturday: 9:00 AM – 3:00 PM EST</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#7A8A80]" />
                <span>support@serenemind-demo.org</span>
              </div>
            </div>
          </div>

          {/* Quick FAQ summary */}
          <div className="bg-white border border-[#DDD5C5] rounded-3xl p-6 sm:p-7 space-y-4 shadow-xs">
            <h3 className="font-serif text-lg font-semibold text-[#1F2421] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#3D5A4C]" />
              Frequently Asked Questions
            </h3>

            <div className="space-y-3 text-xs sm:text-sm divide-y divide-[#F2ECE1]">
              <div className="pt-2 first:pt-0">
                <strong className="text-[#1F2421] block font-semibold">How does booking work?</strong>
                <p className="text-[#5E6C63] mt-0.5">
                  Select any therapist in the directory, choose an open date/time, and complete our simple intake step.
                </p>
              </div>
              <div className="pt-2">
                <strong className="text-[#1F2421] block font-semibold">Can I use out-of-network insurance?</strong>
                <p className="text-[#5E6C63] mt-0.5">
                  Yes! Therapists typically provide itemized Superbills with standard service codes for out-of-network reimbursement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
