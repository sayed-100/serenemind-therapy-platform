import React, { useState, useMemo, useEffect } from 'react';
import { SlidersHorizontal, RotateCcw, Search, Sparkles, Filter, X } from 'lucide-react';
import { Therapist, FilterState } from '../types';
import { TherapistCard } from '../components/TherapistCard';
import { TherapistFilters } from '../components/TherapistFilters';
import { SearchBar } from '../components/SearchBar';

interface FindTherapistPageProps {
  therapists: Therapist[];
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onResetFilters: () => void;
  onViewProfile: (therapistId: string) => void;
  onBookSession: (therapist: Therapist) => void;
}

export const FindTherapistPage: React.FC<FindTherapistPageProps> = ({
  therapists,
  filters,
  onFilterChange,
  onResetFilters,
  onViewProfile,
  onBookSession
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }
    };
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileDrawerOpen]);

  // Active filtering logic using ES6+ array methods
  const filteredTherapists = useMemo(() => {
    return therapists
      .filter((t) => {
        // 1. Search Query Filter (name, specialization, title, about, modalities)
        if (filters.searchQuery.trim()) {
          const q = filters.searchQuery.toLowerCase().trim();
          const matchName = t.name.toLowerCase().includes(q);
          const matchSpecialty = t.specializations.some((s) => s.toLowerCase().includes(q));
          const matchTitle = t.title.toLowerCase().includes(q);
          const matchAbout = t.about.toLowerCase().includes(q);
          const matchApproach = t.approach.toLowerCase().includes(q);
          const matchModalities = t.modalities.some((m) => m.toLowerCase().includes(q));
          if (!matchName && !matchSpecialty && !matchTitle && !matchAbout && !matchApproach && !matchModalities) {
            return false;
          }
        }

        // 2. Specialization Filter
        if (filters.specialization) {
          const match = t.specializations.includes(filters.specialization);
          if (!match) return false;
        }

        // 3. Language Filter
        if (filters.language) {
          const match = t.languages.includes(filters.language);
          if (!match) return false;
        }

        // 4. Session Format Filter
        if (filters.sessionFormat) {
          const match = t.sessionFormats.includes(filters.sessionFormat as any);
          if (!match) return false;
        }

        // 5. Availability Filter
        if (filters.availability) {
          const match = t.availability === filters.availability;
          if (!match) return false;
        }

        // 6. Max Price Filter
        if (filters.maxPrice) {
          if (t.sessionPrice > filters.maxPrice) return false;
        }

        return true;
      })
      .sort((a, b) => {
        // Sorting logic
        switch (filters.sortBy) {
          case 'price-asc':
            return a.sessionPrice - b.sessionPrice;
          case 'price-desc':
            return b.sessionPrice - a.sessionPrice;
          case 'experience':
            return b.experienceYears - a.experienceYears;
          case 'recommended':
          default:
            // Prioritize rating, reviews, and featured flag
            return (b.rating * 10 + (b.featured ? 5 : 0)) - (a.rating * 10 + (a.featured ? 5 : 0));
        }
      });
  }, [therapists, filters]);

  // Count active filter chips for display
  const activeChips = [
    filters.specialization ? { label: `Specialty: ${filters.specialization}`, key: 'specialization', value: '' } : null,
    filters.language ? { label: `Language: ${filters.language}`, key: 'language', value: '' } : null,
    filters.sessionFormat ? { label: `Format: ${filters.sessionFormat}`, key: 'sessionFormat', value: '' } : null,
    filters.availability ? { label: `Availability: ${filters.availability}`, key: 'availability', value: '' } : null,
    filters.maxPrice < 200 ? { label: `Max $${filters.maxPrice}`, key: 'maxPrice', value: 200 } : null,
    filters.searchQuery ? { label: `Query: "${filters.searchQuery}"`, key: 'searchQuery', value: '' } : null,
  ].filter(Boolean) as { label: string; key: keyof FilterState; value: any }[];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A6B5D]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Therapist Discovery Directory</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F2421]">
          Find a Therapist
        </h1>
        <p className="text-sm sm:text-base text-[#57655C] max-w-2xl">
          Browse therapist profiles, filter by your specific emotional focus, languages, and session format, and explore transparent example rates.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="bg-white border border-[#DDD5C5] rounded-2xl p-4 sm:p-5 shadow-xs">
        <SearchBar
          value={filters.searchQuery}
          onChange={(val) => onFilterChange({ searchQuery: val })}
          onSelectTag={(tag) => onFilterChange({ searchQuery: tag })}
        />
      </div>

      {/* Active Filter Chips & Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        {/* Results Counter & Active Chips */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-[#1F2421]">
            {filteredTherapists.length} therapist{filteredTherapists.length !== 1 ? 's' : ''} available
          </span>

          {activeChips.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#EBF2EE] text-[#294939] border border-[#C5DCD0]"
            >
              <span>{chip.label}</span>
              <button
                type="button"
                onClick={() => onFilterChange({ [chip.key]: chip.value })}
                className="hover:text-[#183124] p-0.5 rounded-full"
                title={`Remove ${chip.label}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {activeChips.length > 0 && (
            <button
              onClick={onResetFilters}
              className="text-xs font-medium text-[#707E75] hover:text-[#1F2421] underline underline-offset-2 ml-1"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="w-full sm:w-auto px-4 py-2.5 bg-white border border-[#DDD5C5] rounded-xl text-xs sm:text-sm font-medium text-[#29362E] flex items-center justify-center gap-2 shadow-xs hover:bg-[#F2ECE1]"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#3D5A4C]" />
            <span>Filter & Sort {activeChips.length > 0 && `(${activeChips.length})`}</span>
          </button>
        </div>
      </div>

      {/* Main Layout: Desktop Sidebar Filters + Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Desktop Sidebar (col-span-4) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-28">
          <TherapistFilters
            filters={filters}
            onChange={onFilterChange}
            onReset={onResetFilters}
            totalMatches={filteredTherapists.length}
          />
        </aside>

        {/* Results Grid (col-span-8) */}
        <main className="lg:col-span-8">
          {filteredTherapists.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredTherapists.map((therapist) => (
                <TherapistCard
                  key={therapist.id}
                  therapist={therapist}
                  onViewProfile={onViewProfile}
                  onBookSession={onBookSession}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white border border-[#DDD5C5] rounded-3xl p-10 sm:p-14 text-center space-y-4 shadow-xs">
              <div className="w-16 h-16 bg-[#F2EDE2] rounded-full flex items-center justify-center text-[#69796F] mx-auto">
                <Filter className="w-8 h-8 text-[#54685C]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-semibold text-[#1F2421]">
                  No therapists match your current filters.
                </h3>
                <p className="text-sm text-[#5D6B62] max-w-md mx-auto">
                  Try broadening your price range, clearing specialty tags, or searching with general terms.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onResetFilters}
                  className="px-6 py-3 bg-[#3D5A4C] hover:bg-[#324B3E] text-white rounded-xl text-sm font-semibold transition-colors shadow-xs inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Clear Filters</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Drawer Modal */}
      {mobileDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setMobileDrawerOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FAF8F5] w-full max-w-md h-full overflow-y-auto p-6 shadow-2xl animate-in slide-in-from-right duration-200"
          >
            <TherapistFilters
              filters={filters}
              onChange={onFilterChange}
              onReset={onResetFilters}
              totalMatches={filteredTherapists.length}
              isMobileDrawer={true}
              onCloseMobileDrawer={() => setMobileDrawerOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
