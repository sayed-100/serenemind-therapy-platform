import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onClear?: () => void;
  quickTags?: string[];
  onSelectTag?: (tag: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search by name, specialty, or concern (e.g., anxiety, relationships, CBT)...",
  onClear,
  quickTags = ['Anxiety & Stress', 'Relationships', 'Work Burnout', 'Sleep', 'CBT', 'Spanish'],
  onSelectTag
}) => {
  return (
    <div className="w-full space-y-2.5">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-[#75847B]">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-11 py-3.5 bg-white border border-[#DDD5C5] rounded-xl text-sm sm:text-base text-[#1F2421] placeholder-[#8A968E] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#3D5A4C] focus:border-[#3D5A4C] transition-all"
        />
        {value && (
          <button
            onClick={() => {
              onChange('');
              if (onClear) onClear();
            }}
            className="absolute right-3.5 p-1 rounded-md text-[#78857C] hover:text-[#1F2421] hover:bg-[#F2ECE1] transition-colors"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {quickTags && quickTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B776F]">
          <span className="font-medium text-[#4D5A51]">Popular searches:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onSelectTag && onSelectTag(tag)}
              className="px-2.5 py-1 bg-[#F4EFE6] hover:bg-[#EAE4D6] text-[#37443C] rounded-md transition-colors text-xs"
            >
              +{tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
