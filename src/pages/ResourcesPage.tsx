import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  BookOpen,
  Sparkles,
  RefreshCw,
  AlertCircle,
  Clock,
  Compass,
  Heart,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { Article } from '../types';
import { ArticleCard } from '../components/ArticleCard';

interface ResourcesPageProps {
  articles: Article[];
  onReadArticle: (article: Article) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ articles, onReadArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Browser Fetch API demonstration for live mental health inspiration/advice
  const [liveQuote, setLiveQuote] = useState<{ id: number; advice: string } | null>(null);
  const [fetchLoading, setFetchLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Function demonstrating native browser Fetch API with error handling and fallback
  const fetchDailyReflection = async () => {
    setFetchLoading(true);
    setFetchError(null);

    try {
      // Using native fetch API as requested in REST API specification
      const response = await fetch('https://api.adviceslip.com/advice', {
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data && data.slip && data.slip.advice) {
        setLiveQuote({
          id: data.slip.id,
          advice: data.slip.advice,
        });
      } else {
        throw new Error('Unexpected payload structure');
      }
    } catch (err: any) {
      // Graceful fallback to curated clinical reflection so app never breaks
      setFetchError('Unable to connect to live advice service. Loaded curated reflection.');
      setLiveQuote({
        id: 101,
        advice: 'You do not have to have everything figured out to move forward gently today.',
      });
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyReflection();
  }, []);

  const categories = ['All', 'Stress', 'Relationships', 'Personal Growth', 'Sleep', 'Work & Life'];

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      if (selectedCategory !== 'All' && art.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = art.title.toLowerCase().includes(q);
        const matchDesc = art.shortDescription.toLowerCase().includes(q);
        const matchAuthor = art.author.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchAuthor) return false;
      }
      return true;
    });
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A6B5D]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Wellness & Psychoeducation Editorial</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1F2421]">
          Resources & Educational Guides
        </h1>
        <p className="text-sm sm:text-base text-[#59675E] max-w-2xl">
          Thoughtful psychoeducation, cognitive coping mechanisms, and emotional regulation strategies exploring modern mental wellness.
        </p>
      </div>

      {/* REST API / Browser Fetch API Live Advice Card */}
      <section className="bg-white border border-[#DCD5C6] rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[#EFE9DD]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8F1EC] text-[#3D5A4C] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-semibold text-[#1F2421]">
                Daily Reflection & Grounding
              </h2>
              <span className="text-[11px] text-[#69796F]">
                Demonstrating REST API integration via browser Fetch API
              </span>
            </div>
          </div>

          <button
            onClick={fetchDailyReflection}
            disabled={fetchLoading}
            className="px-3.5 py-1.5 rounded-lg border border-[#DDD5C5] text-xs font-medium text-[#37443C] hover:bg-[#F2ECE1] transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#5D6B62] ${fetchLoading ? 'animate-spin' : ''}`} />
            <span>Fetch New Reflection</span>
          </button>
        </div>

        <div className="pt-5">
          {fetchLoading ? (
            <div className="space-y-2 py-4 animate-pulse">
              <div className="h-4 bg-[#EDE7DA] rounded w-3/4" />
              <div className="h-4 bg-[#EDE7DA] rounded w-1/2" />
            </div>
          ) : (
            <div className="space-y-2">
              <blockquote className="font-serif text-lg sm:text-xl text-[#222E27] italic leading-relaxed">
                "{liveQuote?.advice}"
              </blockquote>
              <div className="flex items-center gap-2 text-xs text-[#717E75]">
                <span>Reflection #{liveQuote?.id}</span>
                {fetchError && (
                  <span className="text-[#C95C46] flex items-center gap-1">
                    • <AlertCircle className="w-3 h-3" /> {fetchError}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors border ${
                    isSelected
                      ? 'bg-[#3D5A4C] text-white border-[#3D5A4C] shadow-xs'
                      : 'bg-white text-[#4A574E] border-[#DDD5C5] hover:bg-[#F2ECE1]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search field */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#75847B] absolute left-3.5 top-3" />
            <input
              id="resources-search-input"
              aria-label="Search articles by title, topic, or preview"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-8 py-2.5 bg-white border border-[#DDD5C5] rounded-xl text-xs sm:text-sm text-[#1F2421] placeholder-[#8A968E] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 p-0.5 rounded text-[#717E75] hover:text-[#1F2421]"
                aria-label="Clear article search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#6A7870] pt-1">
          <span>
            Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
          </span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-[#3D5A4C] font-semibold hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onReadArticle={onReadArticle}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#DDD5C5] rounded-3xl p-10 text-center space-y-3">
          <BookOpen className="w-10 h-10 text-[#7C8B82] mx-auto" />
          <h3 className="font-serif text-xl font-semibold text-[#1F2421]">
            No articles found
          </h3>
          <p className="text-xs sm:text-sm text-[#5C6A61] max-w-sm mx-auto">
            We couldn't find any resources matching "{searchQuery}" in {selectedCategory}. Try another keyword.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#EAE5D9] hover:bg-[#DDD5C5] text-[#2B3930] text-xs font-semibold rounded-lg transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
