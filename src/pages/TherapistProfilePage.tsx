import React from 'react';
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  Globe,
  Award,
  Calendar,
  Video,
  ShieldCheck,
  CheckCircle,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { Therapist } from '../types';

interface TherapistProfilePageProps {
  therapist: Therapist;
  onBack: () => void;
  onBookSession: (therapist: Therapist) => void;
}

export const TherapistProfilePage: React.FC<TherapistProfilePageProps> = ({
  therapist,
  onBack,
  onBookSession
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#445248] hover:text-[#1F2421] bg-[#EAE5D9] hover:bg-[#DDD5C5] px-4 py-2 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Directory</span>
        </button>
      </div>

      {/* Main Profile Header Card */}
      <div className="bg-white border border-[#DDD5C5] rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Large portrait */}
          <div className="relative shrink-0 w-36 h-36 sm:w-48 sm:h-48 mx-auto lg:mx-0">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-full h-full object-cover rounded-2xl border border-[#EDE7DC] shadow-sm"
            />
            <span
              className="absolute bottom-2 right-2 w-4 h-4 bg-[#3E7C52] border-2 border-white rounded-full"
              title="Accepting new clients"
            />
          </div>

          {/* Clinician Overview */}
          <div className="flex-1 text-center lg:text-left space-y-3">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs font-semibold text-[#3D5A4C] bg-[#EAF2ED] px-3 py-1 rounded-full flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Therapist Profile
              </span>
              <span className="text-xs font-medium text-[#6B7971] bg-[#F2EDE2] px-2.5 py-1 rounded-full">
                Demo Profile
              </span>
              <span className="text-xs text-[#5D6B62] flex items-center gap-1">
                <Star className="w-4 h-4 text-[#D99A26] fill-[#D99A26]" />
                <strong className="text-[#1F2421] font-bold">{therapist.rating}</strong>
                <span>({therapist.reviewCount} sample reviews)</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F2421]">
              {therapist.name}
              <span className="text-sm font-sans text-[#738077] font-normal ml-3">
                ({therapist.pronouns})
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4E5C53] font-medium">
              {therapist.title}
            </p>

            {/* Quick Metadata Row */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-[#5B6A60]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#7A8A80]" />
                <span>{therapist.location}</span>
                <span className="text-[10px] text-[#7A887F] bg-[#F2EDE2] px-1.5 py-0.5 rounded font-normal">Demo profile</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#7A8A80]" />
                {therapist.experienceYears} Years Counseling Experience
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#7A8A80]" />
                Languages: {therapist.languages.join(', ')}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#7A8A80]" />
                Demonstration Profile
              </span>
            </div>

            {/* Specialization Tags */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              {therapist.specializations.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 bg-[#F4EFE6] text-[#334238] rounded-lg text-xs font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Booking CTA Box */}
          <div className="w-full lg:w-72 bg-[#FAF8F5] border border-[#DDD5C5] rounded-2xl p-5 space-y-4 shrink-0 text-center lg:text-left">
            <div>
              <span className="text-xs text-[#6B7970] block">Example pricing</span>
              <div className="flex items-baseline justify-center lg:justify-start gap-1">
                <span className="font-serif text-3xl font-bold text-[#1F2421]">
                  ${therapist.sessionPrice}
                </span>
                <span className="text-xs text-[#6B7970]">/ 50-min session</span>
              </div>
            </div>

            <div className="p-3 bg-[#EAF2ED] border border-[#C6DDD0] rounded-xl text-xs text-[#2A4839] flex items-center justify-center lg:justify-start gap-2">
              <Calendar className="w-4 h-4 text-[#3D5A4C] shrink-0" />
              <span>Next opening: <strong>{therapist.nextAvailableSlot}</strong></span>
            </div>

            <button
              onClick={() => onBookSession(therapist)}
              className="w-full py-3 bg-[#3D5A4C] hover:bg-[#314A3E] active:scale-[0.98] text-white font-semibold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <p className="text-[11px] text-[#78877D] text-center">
              Free 20-min consultation available • No commitment
            </p>
          </div>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (col-span-8): About, Approach, Modalities, Education, Reviews */}
        <div className="lg:col-span-8 space-y-8">
          {/* About section */}
          <section className="bg-white border border-[#DDD5C5] rounded-3xl p-6 sm:p-8 space-y-3">
            <h2 className="font-serif text-2xl font-semibold text-[#1F2421]">
              About {therapist.name.split(' ')[0]}
            </h2>
            <p className="text-sm sm:text-base text-[#3C4A41] leading-relaxed">
              {therapist.about}
            </p>
          </section>

          {/* Clinical Approach & Methodology */}
          <section className="bg-white border border-[#DDD5C5] rounded-3xl p-6 sm:p-8 space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#1F2421]">
              Clinical Philosophy & Methodology
            </h2>
            <p className="text-sm sm:text-base text-[#3C4A41] leading-relaxed">
              {therapist.approach}
            </p>

            <div className="pt-2 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#57665C]">
                Core Modalities & Training
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {therapist.modalities.map((mod) => (
                  <div
                    key={mod}
                    className="p-3 bg-[#FAF8F5] border border-[#E7E1D4] rounded-xl text-xs font-medium text-[#2E3C32] flex items-center gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-[#3D5A4C] shrink-0" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education & Licensure */}
          <section className="bg-white border border-[#DDD5C5] rounded-3xl p-6 sm:p-8 space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-[#1F2421] flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#3D5A4C]" />
              Education & Background
            </h2>
            <ul className="space-y-2 text-sm text-[#46544B]">
              {therapist.education.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#3D5A4C] font-bold">•</span>
                  <span>{edu}</span>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <span className="text-[#3D5A4C] font-bold">•</span>
                <span>Focus Areas: {therapist.specializations.join(', ')}</span>
              </li>
            </ul>
          </section>

          {/* Client Reviews Section */}
          <section className="bg-white border border-[#DDD5C5] rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#EFE9DE]">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-[#1F2421]">
                  Sample Reviews
                </h2>
                <p className="text-xs text-[#6A7870] mt-0.5">
                  Example client feedback demonstrating session experiences.
                </p>
              </div>

              <div className="flex items-center gap-1 text-sm font-bold text-[#1F2421] bg-[#F4EFE6] px-3 py-1 rounded-xl">
                <Star className="w-4 h-4 text-[#D99A26] fill-[#D99A26]" />
                <span>{therapist.rating}</span>
                <span className="text-xs font-normal text-[#6B7971]">
                  ({therapist.reviewCount})
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {therapist.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-5 bg-[#FAF8F5] border border-[#E7E1D4] rounded-2xl space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#E5DFD1] text-[#344238] font-semibold text-xs flex items-center justify-center">
                        {rev.initials}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#1F2421] block">
                          {rev.author}
                        </span>
                        <span className="text-[10px] text-[#7A8980]">{rev.date}</span>
                      </div>
                    </div>

                    <div className="flex gap-0.5 text-[#D99A26]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D99A26]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#445248] italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (col-span-4): Session Options, Insurance, Policies */}
        <aside className="lg:col-span-4 space-y-6 sticky top-28">
          {/* Session Formats Available */}
          <div className="bg-white border border-[#DDD5C5] rounded-3xl p-6 space-y-4 shadow-xs">
            <h3 className="font-serif text-lg font-semibold text-[#1F2421]">
              Session Options
            </h3>

            <div className="space-y-3">
              <div className="p-3.5 bg-[#FAF8F5] border border-[#E8E2D6] rounded-xl flex items-start gap-3">
                <Video className="w-5 h-5 text-[#3D5A4C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#1F2421]">
                    Video Telehealth
                  </h4>
                  <p className="text-xs text-[#5D6B62] mt-0.5">
                    Encrypted HIPAA-compliant telehealth platform.
                  </p>
                  <span className="text-xs font-bold text-[#1F2421] mt-1.5 block">
                    Example: ${therapist.sessionPrice} / 50 min
                  </span>
                </div>
              </div>

              {therapist.sessionFormats.includes('In-Person') && (
                <div className="p-3.5 bg-[#FAF8F5] border border-[#E8E2D6] rounded-xl flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#3D5A4C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#1F2421]">
                      In-Person Session
                    </h4>
                    <p className="text-xs text-[#5D6B62] mt-0.5">
                      Private clinic setting in {therapist.location.split('&')[0]}.
                    </p>
                    <span className="text-xs font-bold text-[#1F2421] mt-1.5 block">
                      Example: ${therapist.sessionPrice + 10} / 50 min
                    </span>
                  </div>
                </div>
              )}

              <div className="p-3.5 bg-[#EAF2ED] border border-[#C6DDD0] rounded-xl flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#3D5A4C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#1F2421]">
                    Free 20-Min Intro Call
                  </h4>
                  <p className="text-xs text-[#5D6B62] mt-0.5">
                    Meet informally to discuss your goals and assess fit.
                  </p>
                  <span className="text-xs font-bold text-[#3D5A4C] mt-1.5 block">
                    $0 / 20 min
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onBookSession(therapist)}
              className="w-full py-3 bg-[#3D5A4C] hover:bg-[#314A3E] text-white rounded-xl text-sm font-semibold transition-colors"
            >
              Start Booking Flow
            </button>
          </div>

          {/* Insurance & Superbill Support */}
          <div className="bg-white border border-[#DDD5C5] rounded-3xl p-6 space-y-3 shadow-xs">
            <h3 className="font-serif text-lg font-semibold text-[#1F2421]">
              Payment & Superbills
            </h3>
            <p className="text-xs text-[#526056] leading-relaxed">
              Accepts HSA/FSA cards, major debit/credit cards. Provides monthly clinical <strong>Superbills</strong> for out-of-network insurance reimbursement.
            </p>
            <div className="pt-2 border-t border-[#F0EAE0] text-xs text-[#6B7971]">
              <span>Need help filing an insurance claim? Our support team assists free of charge.</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
