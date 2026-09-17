import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  Users,
  Compass,
  HeartHandshake,
  Brain,
  Briefcase,
  Moon,
  ChevronRight,
  Clock,
  Star,
  Search,
  Check
} from 'lucide-react';
import { Therapist, Article, PageView } from '../types';
import { platformStats, howItWorksSteps, testimonialsData, specializationsList } from '../data/testimonials';
import { TherapistCard } from '../components/TherapistCard';
import { ArticleCard } from '../components/ArticleCard';

interface HomePageProps {
  therapists: Therapist[];
  articles: Article[];
  onNavigate: (page: PageView) => void;
  onSelectSpecialty: (specialty: string) => void;
  onViewProfile: (therapistId: string) => void;
  onBookSession: (therapist: Therapist) => void;
  onReadArticle: (article: Article) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  therapists,
  articles,
  onNavigate,
  onSelectSpecialty,
  onViewProfile,
  onBookSession,
  onReadArticle
}) => {
  const featuredTherapists = therapists.filter((t) => t.featured).slice(0, 3);
  const previewArticles = articles.slice(0, 3);

  // Map icons for specialties
  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#3D5A4C]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#3D5A4C]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#3D5A4C]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#3D5A4C]" />;
      case 'Moon':
        return <Moon className="w-5 h-5 text-[#3D5A4C]" />;
      case 'Users':
      default:
        return <Users className="w-5 h-5 text-[#3D5A4C]" />;
    }
  };

  const heroSpecialtyPills = [
    { label: 'Anxiety & Stress', value: 'Anxiety & Stress' },
    { label: 'Relationships', value: 'Relationships' },
    { label: 'Work & Burnout', value: 'Work & Life' },
    { label: 'Sleep & Insomnia', value: 'Sleep' },
    { label: 'Personal Growth', value: 'Personal Growth' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-14 overflow-hidden border-b border-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5D9] border border-[#DDD5C5] text-xs font-semibold text-[#304136]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3D5A4C]" />
                <span>THERAPIST DISCOVERY PLATFORM</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#1F2421] tracking-tight leading-[1.12]">
                Find a therapist who{' '}
                <span className="italic font-normal text-[#385244]">feels right for you.</span>
              </h1>

              {/* Clear Subheading */}
              <p className="text-base sm:text-lg text-[#55635A] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                SereneMind helps you discover therapist profiles across specialties and counseling approaches. Explore example per-session pricing ($90–$200), filter by your specific concern, and discover care that feels right for you.
              </p>

              {/* Primary Call to Action Row */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('find')}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#3D5A4C] hover:bg-[#314A3E] active:scale-[0.98] text-[#FAF8F5] font-semibold text-sm sm:text-base rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D5A4C]"
                >
                  <Search className="w-4 h-4" />
                  <span>Find Your Therapist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('how-it-works');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white border border-[#D5CDBD] hover:bg-[#F2ECE1] text-[#2C3830] font-medium text-sm sm:text-base rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
                >
                  How It Works
                </button>
              </div>

              {/* Quick Category Jump Pills */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#637269] mb-2.5">
                  Popular areas of support:
                </div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  {heroSpecialtyPills.map((pill) => (
                    <button
                      key={pill.label}
                      type="button"
                      onClick={() => onSelectSpecialty(pill.value)}
                      className="px-3 py-1.5 bg-white border border-[#DDD5C5] hover:border-[#3D5A4C] hover:bg-[#F4EFE6] text-[#2D3C32] rounded-lg text-xs font-medium transition-all shadow-2xs"
                    >
                      +{pill.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reassurance Trust Points */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#5D6D63]">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#3D5A4C] shrink-0" />
                  Curated Demo Profiles
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#3D5A4C] shrink-0" />
                  No Subscription Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#3D5A4C] shrink-0" />
                  Video & In-Person Options
                </span>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-md lg:max-w-none space-y-4">
                {/* Hero Main Image with subtle styling */}
                <div className="aspect-4/3 sm:aspect-4/3 rounded-2xl overflow-hidden shadow-md border border-[#DDD6C7] bg-[#EBE4D6]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                    alt="A counselor in a calm, welcoming consultation space"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Grounded Credential Panel (Clean and unified, no floating overlapping clutter) */}
                <div className="bg-white border border-[#DDD5C5] rounded-xl p-4 shadow-xs grid grid-cols-2 gap-3 text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#EAF2ED] text-[#3D5A4C] flex items-center justify-center shrink-0">
                      <Star className="w-4 h-4 fill-[#3D5A4C]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1F2421]">4.9 / 5.0 Rating</div>
                      <div className="text-[11px] text-[#69776E]">Sample client feedback</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 border-l border-[#F0EBE1] pl-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF2E6] text-[#A66C23] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1F2421]">Same-Week Care</div>
                      <div className="text-[11px] text-[#69776E]">Evening & weekend slots</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E5DFD1] rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#4A6B5D]">
              Platform Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F2421] mt-1">
              Thoughtful infrastructure built around your life
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#EFE9DE]">
            {platformStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center space-y-1 ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''}`}
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A4436]">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#1F2421]">
                  {stat.label}
                </div>
                <div className="text-xs text-[#6B7971] max-w-xs mx-auto">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#4A6B5D] bg-[#EAE5D9] px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F2421]">
            Finding the right care should feel straightforward
          </h2>
          <p className="text-sm sm:text-base text-[#5C6B62]">
            We designed SereneMind to eliminate telephone tag, long waitlists, and mystery pricing from mental healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[#E7E1D4] rounded-2xl p-6 sm:p-8 space-y-3 hover:border-[#3D5A4C]/40 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8C9C92] block mb-2">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#1F2421]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#55635A] mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2EDE2] flex items-center text-xs text-[#3D5A4C] font-semibold">
                <span>Direct self-serve scheduling</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED THERAPISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#4A6B5D]">
              Therapist Profiles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F2421] mt-1">
              Featured Therapists
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B62] mt-1">
              Experienced counseling professionals ready to support your goals.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('find')}
            className="self-start sm:self-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#2D4538] hover:text-[#1F2421] bg-[#EAE5D9] hover:bg-[#DDD5C5] rounded-xl transition-colors flex items-center gap-1.5"
          >
            <span>View All Therapists</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTherapists.map((therapist) => (
            <TherapistCard
              key={therapist.id}
              therapist={therapist}
              onViewProfile={onViewProfile}
              onBookSession={onBookSession}
            />
          ))}
        </div>
      </section>

      {/* 5. SPECIALIZATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#4A6B5D]">
            Areas of Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F2421]">
            Explore by Specialization
          </h2>
          <p className="text-xs sm:text-sm text-[#5C6B62]">
            Targeted care for the specific challenges and chapters of your life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {specializationsList.map((spec) => (
            <div
              key={spec.name}
              onClick={() => onSelectSpecialty(spec.name)}
              className="bg-white border border-[#E7E2D6] rounded-2xl p-6 hover:border-[#3D5A4C] hover:shadow-sm cursor-pointer transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getSpecialtyIcon(spec.icon)}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1F2421] group-hover:text-[#2E4839] transition-colors">
                  {spec.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#58655D] mt-2 leading-relaxed">
                  {spec.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#3D5A4C] font-semibold">
                <span>View Therapists</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="bg-[#F2EDE4] py-14 sm:py-18 border-y border-[#E2DBD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#4A6B5D]">
              Sample Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F2421]">
              Example client feedback
            </h2>
            <p className="text-xs sm:text-sm text-[#5D6B62]">
              Demonstration feedback illustrating client experiences and therapeutic outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#DDD6C8] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex gap-1 text-[#D99A26] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D99A26]" />
                    ))}
                  </div>
                  <blockquote className="font-serif text-sm sm:text-base text-[#2A352F] leading-relaxed italic">
                    "{item.quote}"
                  </blockquote>
                </div>

                <div className="pt-5 mt-5 border-t border-[#F0EAE0] flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.client}
                    className="w-10 h-10 rounded-full object-cover border border-[#DDD5C5]"
                  />
                  <div>
                    <div className="text-xs font-semibold text-[#1F2421]">{item.client}</div>
                    <div className="text-[11px] text-[#69776E]">{item.matchedSpecialty}</div>
                    <div className="text-[10px] text-[#86958C]">{item.timeWithTherapist}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RESOURCES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#4A6B5D]">
              Psychoeducational Articles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F2421] mt-1">
              Resources for Your Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6B62] mt-1">
              Evidence-grounded guides on emotional well-being and mindful living.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('resources')}
            className="self-start sm:self-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#2D4538] hover:text-[#1F2421] bg-[#EAE5D9] hover:bg-[#DDD5C5] rounded-xl transition-colors flex items-center gap-1.5"
          >
            <span>All Wellness Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onReadArticle={onReadArticle}
            />
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#24372D] text-white rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden shadow-md border border-[#344D3F]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#344F40] text-xs font-semibold text-[#D4E4DC]">
              <Sparkles className="w-3.5 h-3.5" />
              Take the first step
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#FAF8F5]">
              Your next step can start today.
            </h2>
            <p className="text-sm sm:text-base text-[#C2D1C8] leading-relaxed">
              Explore therapist profiles, review counseling approaches, and try our intuitive booking flow.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('find')}
                className="px-8 py-3.5 bg-[#FAF8F5] hover:bg-white text-[#1F2421] font-semibold text-sm sm:text-base rounded-xl transition-all shadow-md active:scale-[0.98] inline-flex items-center gap-2"
              >
                <span>Find a Therapist</span>
                <ArrowRight className="w-4 h-4 text-[#3D5A4C]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
