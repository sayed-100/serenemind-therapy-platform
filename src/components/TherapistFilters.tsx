import React from 'react';
import { Filter, RotateCcw, X, DollarSign, SlidersHorizontal, Check } from 'lucide-react';
import { FilterState } from '../types';

interface TherapistFiltersProps {
  filters: FilterState;
  onChange: (updatedFilters: Partial<FilterState>) => void;
  onReset: () => void;
  totalMatches: number;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
}

export const TherapistFilters: React.FC<TherapistFiltersProps> = ({
  filters,
  onChange,
  onReset,
  totalMatches,
  isMobileDrawer = false,
  onCloseMobileDrawer
}) => {
  const specializations = [
    'All Specialties',
    'Anxiety & Stress',
    'Relationships',
    'Personal Growth',
    'Work & Life',
    'Sleep',
    'Family Support'
  ];

  const languages = [
    'All Languages',
    'English',
    'Spanish',
    'Mandarin',
    'French',
    'Arabic',
    'Hindi'
  ];

  const sessionFormats = [
    { label: 'All Formats', value: '' },
    { label: 'Video Online', value: 'Video Online' },
    { label: 'In-Person', value: 'In-Person' }
  ];

  const availabilities = [
    { label: 'Any Availability', value: '' },
    { label: 'This Week', value: 'This Week' },
    { label: 'Evening & Weekends', value: 'Evening & Weekends' },
    { label: 'Next Week', value: 'Next Week' }
  ];

  const sortOptions = [
    { label: 'Recommended', value: 'recommended' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Years of Experience', value: 'experience' }
  ];

  // Count how many non-default filters are active
  const activeCount = [
    filters.searchQuery !== '',
    filters.specialization !== '',
    filters.language !== '',
    filters.sessionFormat !== '',
    filters.availability !== '',
    filters.maxPrice < 200,
    filters.sortBy !== 'recommended'
  ].filter(Boolean).length;

  return (
    <div className={`bg-white border border-[#E7E2D6] rounded-2xl p-5 sm:p-6 ${isMobileDrawer ? 'h-full flex flex-col justify-between' : 'shadow-xs'}`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EFE9DD]">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#3D5A4C]" />
            <h3 className="font-serif text-lg font-semibold text-[#1F2421]">
              Filters & Preferences
            </h3>
            {activeCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-[#3D5A4C] text-white rounded-full">
                {activeCount}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {activeCount > 0 && (
              <button
                type="button"
                onClick={onReset}
                className="text-xs font-medium text-[#738278] hover:text-[#21352A] flex items-center gap-1 transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
            {isMobileDrawer && onCloseMobileDrawer && (
              <button
                type="button"
                onClick={onCloseMobileDrawer}
                className="p-1 rounded-lg text-[#55645B] hover:bg-[#F2ECE1]"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Sort Option (also exposed in filters) */}
        <div className="space-y-2">
          <label
            htmlFor={`${isMobileDrawer ? 'mobile-' : ''}filter-sort-by`}
            className="text-xs font-semibold uppercase tracking-wider text-[#526056] block"
          >
            Sort Results By
          </label>
          <select
            id={`${isMobileDrawer ? 'mobile-' : ''}filter-sort-by`}
            value={filters.sortBy}
            onChange={(e) => onChange({ sortBy: e.target.value as any })}
            className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded-xl px-3.5 py-2.5 text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Specialization Filter */}
        <div className="space-y-2">
          <label
            htmlFor={`${isMobileDrawer ? 'mobile-' : ''}filter-specialization`}
            className="text-xs font-semibold uppercase tracking-wider text-[#526056] block"
          >
            Specialization
          </label>
          <select
            id={`${isMobileDrawer ? 'mobile-' : ''}filter-specialization`}
            value={filters.specialization}
            onChange={(e) => onChange({ specialization: e.target.value })}
            className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded-xl px-3.5 py-2.5 text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
          >
            {specializations.map((spec) => (
              <option key={spec} value={spec === 'All Specialties' ? '' : spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* Language Filter */}
        <div className="space-y-2">
          <label
            htmlFor={`${isMobileDrawer ? 'mobile-' : ''}filter-language`}
            className="text-xs font-semibold uppercase tracking-wider text-[#526056] block"
          >
            Therapist Language
          </label>
          <select
            id={`${isMobileDrawer ? 'mobile-' : ''}filter-language`}
            value={filters.language}
            onChange={(e) => onChange({ language: e.target.value })}
            className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded-xl px-3.5 py-2.5 text-sm text-[#1F2421] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang === 'All Languages' ? '' : lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Session Format */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#526056] block">
            Session Format
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {sessionFormats.map((fmt) => {
              const selected = filters.sessionFormat === fmt.value;
              return (
                <button
                  key={fmt.label}
                  type="button"
                  onClick={() => onChange({ sessionFormat: fmt.value })}
                  className={`py-2 px-2 rounded-lg text-xs font-medium text-center transition-colors border ${
                    selected
                      ? 'bg-[#3D5A4C] text-white border-[#3D5A4C]'
                      : 'bg-[#FAF8F5] text-[#445048] border-[#DDD5C5] hover:bg-[#F2ECE1]'
                  }`}
                >
                  {fmt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Availability */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#526056] block">
            Schedule Availability
          </label>
          <div className="space-y-1.5">
            {availabilities.map((av) => {
              const selected = filters.availability === av.value;
              return (
                <button
                  key={av.label}
                  type="button"
                  onClick={() => onChange({ availability: av.value })}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left border ${
                    selected
                      ? 'bg-[#EBF2EE] text-[#224434] border-[#B6D1C2]'
                      : 'bg-[#FAF8F5] text-[#46534B] border-transparent hover:bg-[#F4ECE2]'
                  }`}
                >
                  <span>{av.label}</span>
                  {selected && <Check className="w-3.5 h-3.5 text-[#3D5A4C]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Max Session Price Slider */}
        <div className="space-y-2.5 pt-2 border-t border-[#EFE9DD]">
          <div className="flex items-center justify-between text-xs">
            <label
              htmlFor={`${isMobileDrawer ? 'mobile-' : ''}filter-max-price`}
              className="font-semibold uppercase tracking-wider text-[#526056] cursor-pointer"
            >
              Max Price / Session
            </label>
            <span className="font-semibold text-[#1F2421] bg-[#F2EDE2] px-2 py-0.5 rounded">
              Up to ${filters.maxPrice}
            </span>
          </div>
          <input
            id={`${isMobileDrawer ? 'mobile-' : ''}filter-max-price`}
            aria-label="Maximum price per session"
            type="range"
            min="90"
            max="200"
            step="10"
            value={filters.maxPrice}
            onChange={(e) => onChange({ maxPrice: Number(e.target.value) })}
            className="w-full accent-[#3D5A4C] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#7A877E]">
            <span>$90</span>
            <span>$150</span>
            <span>$200+</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Bottom Actions */}
      {isMobileDrawer && (
        <div className="pt-6 border-t border-[#EFE9DD] mt-6 flex gap-3">
          <button
            type="button"
            onClick={onReset}
            className="flex-1 py-3 border border-[#DDD5C5] rounded-xl text-sm font-medium text-[#38463D] hover:bg-[#F2ECE1]"
          >
            Clear All
          </button>
          <button
            type="button"
            onClick={onCloseMobileDrawer}
            className="flex-1 py-3 bg-[#3D5A4C] text-white rounded-xl text-sm font-medium hover:bg-[#324B3E]"
          >
            Show {totalMatches} Result{totalMatches !== 1 ? 's' : ''}
          </button>
        </div>
      )}
    </div>
  );
};
