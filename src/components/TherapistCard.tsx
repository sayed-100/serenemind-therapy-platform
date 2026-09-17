import React from 'react';
import { Star, Video, MapPin, Calendar, Clock, Globe, ArrowUpRight, Award } from 'lucide-react';
import { Therapist } from '../types';

interface TherapistCardProps {
  therapist: Therapist;
  onViewProfile: (therapistId: string) => void;
  onBookSession: (therapist: Therapist) => void;
}

export const TherapistCard: React.FC<TherapistCardProps> = ({
  therapist,
  onViewProfile,
  onBookSession,
}) => {
  return (
    <article
      id={`therapist-card-${therapist.id}`}
      className="bg-white border border-[#E7E2D6] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
    >
      {/* Top Banner / Image Section */}
      <div className="p-5 sm:p-6 pb-4 flex flex-col sm:flex-row gap-5">
        {/* Photo with status indicator */}
        <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 mx-auto sm:mx-0">
          <img
            src={therapist.image}
            alt={`Photo of ${therapist.name}, ${therapist.title}`}
            className="w-full h-full object-cover rounded-xl border border-[#EDE8DE] group-hover:scale-102 transition-transform duration-300"
            loading="lazy"
          />
          <span
            className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#4A7C59] border-2 border-white rounded-full"
            title="Active & Accepting Clients"
          />
        </div>

        {/* Header Details */}
        <div className="flex-1 text-center sm:text-left flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="text-xs font-semibold text-[#4A6B5D] bg-[#EDF3EF] px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                <Award className="w-3 h-3" />
                Therapist Profile
              </span>
              <span className="text-xs text-[#6B726C] flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-[#D99A26] fill-[#D99A26]" />
                <strong className="text-[#1F2421] font-semibold">{therapist.rating}</strong>
                <span>({therapist.reviewCount} reviews)</span>
              </span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1F2421] group-hover:text-[#2D4D3E] transition-colors leading-snug">
              {therapist.name}
              <span className="text-xs font-sans text-[#758077] font-normal ml-2">
                ({therapist.pronouns})
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-[#525E56] font-medium mt-0.5">
              {therapist.title}
            </p>
          </div>

          {/* Location & Experience meta */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-[#606E64] mt-2.5 pt-2 border-t border-[#F2ECE1]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#829186]" />
              <span>{therapist.location}</span>
              <span className="text-[10px] text-[#78867E] bg-[#F0EBE0] px-1.5 py-0.5 rounded font-normal">Demo profile</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#829186]" />
              {therapist.experienceYears} yrs experience
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#829186]" />
              {therapist.languages.join(', ')}
            </span>
          </div>
        </div>
      </div>

      {/* Bio excerpt */}
      <div className="px-5 sm:px-6 py-2 flex-1">
        <p className="text-xs sm:text-sm text-[#455048] leading-relaxed line-clamp-2">
          {therapist.about}
        </p>

        {/* Specialization Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {therapist.specializations.map((spec) => (
            <span
              key={spec}
              className="text-[11px] font-medium bg-[#F4EFE6] text-[#3E4941] px-2.5 py-0.5 rounded-md"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Formats & Next Availability */}
      <div className="px-5 sm:px-6 py-3 bg-[#FAF8F5] border-t border-[#EFE9DD] flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-[#46534A]">
          <Video className="w-3.5 h-3.5 text-[#4A6B5D]" />
          <span>{therapist.sessionFormats.join(' & ')}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#305241] font-medium bg-[#E7F0EB] px-2 py-0.5 rounded text-[11px]">
          <Calendar className="w-3 h-3 text-[#3E6B52]" />
          <span>Next: {therapist.nextAvailableSlot}</span>
        </div>
      </div>

      {/* Footer Price & Buttons */}
      <div className="p-4 sm:p-5 pt-3 border-t border-[#EAE4D7] flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
        <div className="flex items-baseline sm:block gap-1">
          <span className="text-xs text-[#6F7A72] sm:block leading-none mr-1 sm:mr-0">Example pricing</span>
          <span className="text-xl font-semibold text-[#1F2421]">
            ${therapist.sessionPrice}
          </span>
          <span className="text-xs text-[#7B857E]"> / 50-min</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => onViewProfile(therapist.id)}
            className="flex-1 sm:flex-none px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#2E3C33] bg-white border border-[#D5CDBD] hover:bg-[#F4EFE6] rounded-xl transition-colors flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
          >
            <span>View Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#59695F]" />
          </button>
          <button
            type="button"
            onClick={() => onBookSession(therapist)}
            className="flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#3D5A4C] hover:bg-[#314A3E] active:scale-[0.98] rounded-xl transition-all shadow-xs flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#3D5A4C]"
          >
            Book Session
          </button>
        </div>
      </div>
    </article>
  );
};
