export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  matchedSpecialty: string;
  timeWithTherapist: string;
  avatar: string;
}

export const platformStats = [
  { value: '500+', label: 'Therapist Profiles', detail: 'Curated professional profiles across diverse specialties' },
  { value: '20+', label: 'Specialties', detail: 'Covering anxiety, life transitions, and relationships' },
  { value: '15+', label: 'Languages', detail: 'Culturally responsive care in your preferred language' },
  { value: 'Flexible', label: 'Sessions', detail: 'Video, in-person, and evening/weekend options' }
];

export const specializationsList = [
  {
    name: 'Anxiety & Stress',
    slug: 'Anxiety & Stress',
    description: 'Soothe persistent worry, cognitive overwhelm, and physical tension with evidence-based regulation.',
    icon: 'Brain'
  },
  {
    name: 'Relationships',
    slug: 'Relationships',
    description: 'Cultivate healthy communication, rebuild trust, and understand recurring attachment patterns.',
    icon: 'HeartHandshake'
  },
  {
    name: 'Personal Growth',
    slug: 'Personal Growth',
    description: 'Clarify core personal values, dismantle imposter feelings, and navigate major life transitions.',
    icon: 'Compass'
  },
  {
    name: 'Work & Life',
    slug: 'Work & Life',
    description: 'Address workplace burnout, perfectionism, career transitions, and sustainable work boundaries.',
    icon: 'Briefcase'
  },
  {
    name: 'Sleep',
    slug: 'Sleep',
    description: 'Reset sleep routines, quiet evening rumination, and restore natural restorative sleep architecture.',
    icon: 'Moon'
  },
  {
    name: 'Family Support',
    slug: 'Family Support',
    description: 'Navigate complex generational dynamics, boundary setting, and peaceful co-parenting.',
    icon: 'Users'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    quote: 'Finding someone who understood the nuances of cultural identity and career burnout felt impossible until SereneMind. Dr. Elena gave me the exact tools I needed to breathe again.',
    client: 'Claire S., Product Designer',
    matchedSpecialty: 'Anxiety & Work Burnout',
    timeWithTherapist: 'Working together for 7 months',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    quote: 'My partner and I were on the brink of ending a seven-year relationship. Marcus helped us understand our hidden attachment fears rather than just attacking each other. We are stronger than ever.',
    client: 'David & Kevin, Software Engineers',
    matchedSpecialty: 'Couples & Communication',
    timeWithTherapist: 'Working together for 10 months',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    quote: 'The seamless filter for evening video sessions meant I didn’t have to sacrifice my work hours. In just 4 sessions with Amara, my chronic insomnia began to dissipate.',
    client: 'Rachel M., Architect',
    matchedSpecialty: 'Insomnia & Nervous System Regulation',
    timeWithTherapist: 'Working together for 4 months',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  }
];

export const howItWorksSteps = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Filter by what matters most to you—whether that is specific expertise, cultural background, evening availability, or price range.'
  },
  {
    number: '02',
    title: 'Explore your options',
    description: 'Read authentic therapist philosophies, explore session formats, check background focus areas, and find someone whose tone and methodology resonate.'
  },
  {
    number: '03',
    title: 'Start your journey',
    description: 'Book your initial consultation in a few clear steps with transparent rates, zero hidden fees, and flexible rescheduling.'
  }
];
