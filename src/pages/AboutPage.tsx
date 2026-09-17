import React from 'react';
import {
  Heart,
  Shield,
  Sparkles,
  Users,
  Compass,
  Award,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { PageView } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'Human-First Matching',
      description: 'Therapy is an intrinsically intimate human relationship. Algorithms should assist discovery, but human intuition and authentic resonance remain sacred.',
      icon: Users
    },
    {
      title: 'Therapist Focus',
      description: 'Curated therapist profiles highlighting evidence-based methodologies, counseling specializations, and patient-first philosophies.',
      icon: Shield
    },
    {
      title: 'Radical Transparency',
      description: 'No hidden subscription traps or unpredictable co-pays. Every session fee, cancellation policy, and credential is laid bare upfront.',
      icon: Compass
    },
    {
      title: 'Cultural Empathy',
      description: 'We prioritize representation across cultural backgrounds, languages, gender identities, and neurodiversity so everyone finds true belonging.',
      icon: Heart
    }
  ];

  const pillars = [
    {
      step: '01',
      title: 'Evidence-Based Frameworks',
      description: 'We support therapists trained in rigorously validated therapies: CBT, ACT, Psychodynamic, Somatic Experiencing, and Gottman Method.'
    },
    {
      step: '02',
      title: 'Sustainable Provider Care',
      description: 'Better outcomes require supported therapists. We respect practitioner autonomy, transparent scheduling, and balanced caseloads.'
    },
    {
      step: '03',
      title: 'Empowerment Over Dependence',
      description: 'Our objective is to equip you with emotional literacy, bodily awareness, and psychological tools that serve you for a lifetime.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-20 sm:space-y-28">
      {/* 1. HERO / BRAND STORY */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#4A6B5D] bg-[#EAE5D9] px-3.5 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1F2421] leading-tight">
            Better days begin with the <span className="italic font-normal text-[#385244]">right support.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#55635A] leading-relaxed">
            SereneMind was founded on a simple observation: finding a therapist often feels like the most exhausting part of needing one. Outdated directories, unreturned voicemails, and obscure pricing have locked millions out of the care they deserve.
          </p>
        </div>

        {/* Hero image collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 aspect-16/10 rounded-3xl overflow-hidden border border-[#DDD5C5] shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80"
              alt="Therapists and colleagues discussing collaborative mental health care"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-5 bg-white border border-[#DDD5C5] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4A6B5D]">
              Our Mission
            </span>
            <h2 className="font-serif text-2xl font-semibold text-[#1F2421]">
              Redesigning mental healthcare as a calm, dignified experience.
            </h2>
            <p className="text-xs sm:text-sm text-[#505D55] leading-relaxed">
              We envision a world where seeking support is celebrated as a fundamental act of wisdom. By combining clear technology with clinical excellence, we help you find the practitioner who speaks to your soul, your mind, and your life.
            </p>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('clinical-note');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="pt-2 text-xs font-semibold text-[#3D5A4C] hover:text-[#283C33] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Read our platform philosophy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. OUR PHILOSOPHY */}
      <section className="bg-white border border-[#DDD5C5] rounded-3xl p-8 sm:p-14 shadow-xs space-y-8">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#4A6B5D]">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F2421]">
            Therapy is not one-size-fits-all
          </h2>
          <p className="text-sm sm:text-base text-[#57665D] leading-relaxed">
            The single greatest predictor of successful psychotherapy is the quality of the therapeutic alliance—the mutual trust, rapport, and understanding between client and clinician.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 border-t border-[#EFE9DF]">
          {pillars.map((pillar) => (
            <div key={pillar.step} className="space-y-2.5">
              <span className="font-serif text-2xl font-bold text-[#8C9C92]">
                {pillar.step}
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#1F2421]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#526057] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#4A6B5D]">
            Guiding Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1F2421]">
            Our Values
          </h2>
          <p className="text-sm sm:text-base text-[#57665D]">
            Every product decision, clinical partnership, and client interaction is guided by four core convictions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="bg-white border border-[#DDD5C5] rounded-2xl p-6 sm:p-7 space-y-3 shadow-xs hover:border-[#3D5A4C] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2ED] text-[#3D5A4C] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#1F2421]">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55635A] mt-2 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. HOW WE WORK / CLINICAL ADVISORY NOTE */}
      <section id="clinical-note" className="bg-[#FAF4EB] border border-[#DDD5C5] rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#4A6B5D]">
              How We Work
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F2421]">
              A note on our platform philosophy
            </h2>
            <blockquote className="font-serif text-sm sm:text-base text-[#38463D] italic leading-relaxed">
              "We believe therapy thrives in stillness, not rushed transactions. Our platform prototype is designed with deep empathy for emotional safety, clear communication, and the courage it takes to ask for support."
            </blockquote>
            <p className="text-xs text-[#6F7D74] font-medium">
              — SereneMind Design & Advisory Concept
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <button
              onClick={() => onNavigate('find')}
              className="px-6 py-3.5 bg-[#3D5A4C] hover:bg-[#314A3E] text-white rounded-xl text-sm font-semibold transition-colors shadow-xs flex items-center gap-2"
            >
              <span>Explore Therapists</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
