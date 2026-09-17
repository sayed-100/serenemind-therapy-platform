import { Therapist } from '../types';

export const therapistsData: Therapist[] = [
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova',
    title: 'Counseling Professional',
    pronouns: 'she/her',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    rating: 4.95,
    reviewCount: 48,
    specializations: ['Anxiety & Stress', 'Work & Life', 'Personal Growth'],
    languages: ['English', 'Russian'],
    experienceYears: 12,
    sessionPrice: 160,
    sessionFormats: ['Video Online', 'In-Person'],
    location: 'San Francisco, CA & Online',
    availability: 'This Week',
    nextAvailableSlot: 'Tomorrow at 10:00 AM',
    about: 'I offer a calm, collaborative space where high-functioning individuals can slow down, unravel anxiety, and overcome professional burnout. Together we cultivate emotional resilience and practical cognitive tools for sustainable well-being.',
    approach: 'My work integrates Cognitive Behavioral Therapy (CBT) with Acceptance and Commitment Therapy (ACT) and somatic awareness. We focus not only on symptom reduction but on aligning your daily life with what truly matters to you.',
    modalities: ['Cognitive Behavioral Therapy (CBT)', 'Acceptance & Commitment (ACT)', 'Mindfulness-Based Stress Reduction (MBSR)'],
    education: ['Doctoral Study in Psychology, Stanford University', 'B.A. in Psychology, UC Berkeley'],
    licenseNumber: 'Demo Profile',
    featured: true,
    reviews: [
      {
        id: 'r1',
        author: 'Marcus K.',
        initials: 'MK',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Dr. Rostova created a space where I felt truly listened to without judgment. Her insights into my work anxiety gave me breathing room I had not felt in years.'
      },
      {
        id: 'r2',
        author: 'Chloe T.',
        initials: 'CT',
        rating: 5,
        date: '1 month ago',
        comment: 'Practical, compassionate, and deeply attuned. The combination of mindfulness and cognitive tools has shifted how I respond to panic and stress.'
      }
    ]
  },
  {
    id: 'marcus-chen-lmft',
    name: 'Marcus Chen',
    title: 'Therapist',
    pronouns: 'he/him',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewCount: 36,
    specializations: ['Relationships', 'Family Support', 'Personal Growth'],
    languages: ['English', 'Mandarin'],
    experienceYears: 9,
    sessionPrice: 140,
    sessionFormats: ['Video Online', 'In-Person'],
    location: 'Seattle, WA & Online',
    availability: 'Evening & Weekends',
    nextAvailableSlot: 'Thursday at 6:00 PM',
    about: 'Relationships are the bedrock of our emotional well-being. Whether you are navigating communication gridlock with a partner or processing intergenerational family dynamics, I help clients build secure attachments and honest vulnerability.',
    approach: 'Trained extensively in Emotionally Focused Therapy (EFT) and the Gottman Method. My sessions are active, structured, and warm, providing safe scaffolding to explore vulnerable feelings without escalating conflict.',
    modalities: ['Emotionally Focused Therapy (EFT)', 'Gottman Method (Level 2)', 'Attachment-Focused Family Therapy'],
    education: ['M.S. in Marital and Family Therapy, University of Washington', 'B.S. in Human Development, UCLA'],
    licenseNumber: 'Demo Profile',
    featured: true,
    reviews: [
      {
        id: 'r3',
        author: 'Jordan & Sam',
        initials: 'JS',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Marcus helped us break an 18-month cycle of defensive arguments. We now talk to each other with genuine kindness and mutual respect.'
      },
      {
        id: 'r4',
        author: 'David L.',
        initials: 'DL',
        rating: 5,
        date: '2 months ago',
        comment: 'Navigating cultural and family expectations felt paralyzing before meeting Marcus. He understands bicultural complexities intimately.'
      }
    ]
  },
  {
    id: 'amara-okafor-lcsw',
    name: 'Amara Okafor',
    title: 'Therapist',
    pronouns: 'she/her',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    rating: 4.98,
    reviewCount: 52,
    specializations: ['Anxiety & Stress', 'Sleep', 'Personal Growth'],
    languages: ['English'],
    experienceYears: 14,
    sessionPrice: 150,
    sessionFormats: ['Video Online'],
    location: 'Chicago, IL & Online',
    availability: 'This Week',
    nextAvailableSlot: 'Wednesday at 11:30 AM',
    about: 'I believe that mental wellness begins with self-compassion and nervous system regulation. I specialize in helping individuals struggling with chronic worry, insomnia, and the physical manifestations of psychological overwhelm.',
    approach: 'I blend gentle psychodynamic inquiry with polyvagal nervous system techniques and Cognitive Behavioral Therapy for Insomnia (CBT-I). We honor your lived experiences while gently unlearning reactive patterns.',
    modalities: ['CBT for Insomnia (CBT-I)', 'Somatic Grounding', 'Psychodynamic Therapy', 'Polyvagal-Informed Care'],
    education: ['Master of Social Work, University of Chicago', 'B.A. in Sociology, Northwestern University'],
    licenseNumber: 'Demo Profile',
    featured: true,
    reviews: [
      {
        id: 'r5',
        author: 'Nadia P.',
        initials: 'NP',
        rating: 5,
        date: '1 week ago',
        comment: 'After 3 years of chronic sleeplessness and racing thoughts, Amara taught me how to put my nervous system to rest. A true healer.'
      }
    ]
  },
  {
    id: 'dr-julian-vance',
    name: 'Dr. Julian Vance',
    title: 'Counseling Professional',
    pronouns: 'he/they',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    rating: 4.89,
    reviewCount: 29,
    specializations: ['Work & Life', 'Personal Growth', 'Anxiety & Stress'],
    languages: ['English', 'French'],
    experienceYears: 11,
    sessionPrice: 180,
    sessionFormats: ['Video Online', 'In-Person'],
    location: 'New York, NY & Online',
    availability: 'Next Week',
    nextAvailableSlot: 'Next Monday at 3:00 PM',
    about: 'I support creative professionals, founders, and neurodivergent adults experiencing cognitive fatigue, ADHD hurdles, and perfectionism paralysis. We discover how your brain naturally works best and design bespoke strategies.',
    approach: 'Neuroscience-grounded, collaborative, and affirmative. I emphasize strength-based executive functioning coaching coupled with insight-oriented therapy to dismantle shame around productivity.',
    modalities: ['Neurodiversity-Affirming Therapy', 'Executive Functioning Skills', 'Schema Therapy', 'Compassion-Focused Therapy'],
    education: ['Graduate Study in Neuropsychology, Columbia University', 'B.S. in Neuroscience, McGill University'],
    licenseNumber: 'Demo Profile',
    featured: false,
    reviews: [
      {
        id: 'r6',
        author: 'Soren B.',
        initials: 'SB',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Julian gave me the permission and frameworks to stop fighting my ADHD and start working with my natural rhythms. Transformative work.'
      }
    ]
  },
  {
    id: 'sofia-martinez-lpc',
    name: 'Sofia Martinez',
    title: 'Therapist',
    pronouns: 'she/her',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewCount: 41,
    specializations: ['Relationships', 'Anxiety & Stress', 'Family Support'],
    languages: ['English', 'Spanish'],
    experienceYears: 8,
    sessionPrice: 125,
    sessionFormats: ['Video Online', 'In-Person'],
    location: 'Austin, TX & Online',
    availability: 'This Week',
    nextAvailableSlot: 'Tomorrow at 3:30 PM',
    about: 'Seeking therapy takes bravery. I create an empathetic, culturally affirming space for young adults, couples, and first-generation professionals navigating life transitions, boundary setting, and self-doubt.',
    approach: 'Strengths-based relational therapy. I integrate Narrative Therapy to help you rewrite disempowering personal narratives, paired with Dialectical Behavior Therapy (DBT) skills for emotional regulation.',
    modalities: ['Narrative Therapy', 'Dialectical Behavior Therapy (DBT)', 'Relational Cultural Therapy'],
    education: ['M.A. in Counseling, UT Austin', 'B.A. in Psychology, Texas A&M'],
    licenseNumber: 'Demo Profile',
    featured: true,
    reviews: [
      {
        id: 'r7',
        author: 'Valeria R.',
        initials: 'VR',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Sofia is bilingual and understands the unique cultural pressure of family loyalty versus personal boundaries. She is an absolute gem.'
      }
    ]
  },
  {
    id: 'dr-tariq-al-mansoor',
    name: 'Dr. Tariq Al-Mansoor',
    title: 'Counseling Professional',
    pronouns: 'he/him',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    rating: 4.94,
    reviewCount: 38,
    specializations: ['Personal Growth', 'Anxiety & Stress', 'Sleep'],
    languages: ['English', 'Arabic'],
    experienceYears: 16,
    sessionPrice: 175,
    sessionFormats: ['Video Online'],
    location: 'Boston, MA & Online',
    availability: 'Evening & Weekends',
    nextAvailableSlot: 'Friday at 5:00 PM',
    about: 'With sixteen years of clinical practice, I guide people through profound life transitions, existential crossroads, and chronic grief. I believe hardship holds the seed of deeper self-understanding and quiet courage.',
    approach: 'Existential-Humanistic therapy combined with contemporary cognitive science. We explore questions of purpose, authenticity, and acceptance in an unhurried, thoughtful atmosphere.',
    modalities: ['Existential Psychotherapy', 'Mindfulness Integration', 'Grief & Bereavement Counseling'],
    education: ['Doctoral Study in Psychology, Boston University', 'M.Ed. in Human Development, Harvard GSE'],
    licenseNumber: 'Demo Profile',
    featured: false,
    reviews: [
      {
        id: 'r8',
        author: 'Layla H.',
        initials: 'LH',
        rating: 5,
        date: '1 month ago',
        comment: 'Dr. Al-Mansoor is grounded, wise, and profoundly gentle. He held space for my grief when I felt completely unmoored.'
      }
    ]
  },
  {
    id: 'maya-patel-lmft',
    name: 'Maya Patel',
    title: 'Therapist',
    pronouns: 'she/her',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    rating: 4.91,
    reviewCount: 33,
    specializations: ['Relationships', 'Family Support', 'Work & Life'],
    languages: ['English', 'Hindi', 'Gujarati'],
    experienceYears: 7,
    sessionPrice: 130,
    sessionFormats: ['Video Online', 'In-Person'],
    location: 'Denver, CO & Online',
    availability: 'This Week',
    nextAvailableSlot: 'Today at 4:00 PM',
    about: 'I support individuals and couples who feel overwhelmed by high demands, codependency, and difficulty speaking their needs. We work collaboratively to nurture self-advocacy and deeper intimacy.',
    approach: 'Collaborative, warm, and solution-focused with systemic family perspective. I help you trace how family history shapes your current reflexes, fostering conscious choice over unconscious reaction.',
    modalities: ['Systemic Family Therapy', 'Solution-Focused Brief Therapy (SFBT)', 'Internal Family Systems (IFS Informed)'],
    education: ['M.S. in Counseling Psychology, University of Denver', 'B.A. in Communication, CU Boulder'],
    licenseNumber: 'Demo Profile',
    featured: false,
    reviews: [
      {
        id: 'r9',
        author: 'Ankit G.',
        initials: 'AG',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Maya helped my partner and me communicate without the resentment that had been building for months. Highly recommend!'
      }
    ]
  },
  {
    id: 'gabriel-reyes-lcsw',
    name: 'Gabriel Reyes',
    title: 'Therapist',
    pronouns: 'he/him',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    rating: 4.88,
    reviewCount: 27,
    specializations: ['Work & Life', 'Anxiety & Stress', 'Personal Growth'],
    languages: ['English', 'Spanish'],
    experienceYears: 6,
    sessionPrice: 110,
    sessionFormats: ['Video Online'],
    location: 'San Diego, CA & Online',
    availability: 'This Week',
    nextAvailableSlot: 'Tomorrow at 1:00 PM',
    about: 'Navigating tech workplace pressures, creative plateaus, and burnout. I offer practical strategies rooted in mindfulness and behavioral change to help you reclaim your time, energy, and joy.',
    approach: 'Action-oriented and compassionate. I believe in establishing small, repeatable daily habits that protect your mental bandwidth and ground your nervous system.',
    modalities: ['Behavioral Activation', 'Mindfulness-Based Stress Reduction', 'Acceptance and Commitment (ACT)'],
    education: ['Master of Social Work, San Diego State University', 'B.A. in Psychology, UC San Diego'],
    licenseNumber: 'Demo Profile',
    featured: false,
    reviews: [
      {
        id: 'r10',
        author: 'Lucas M.',
        initials: 'LM',
        rating: 5,
        date: '2 months ago',
        comment: 'Gabriel is relatable, down to earth, and provides actionable takeaways after every single session. My stress levels dropped dramatically.'
      }
    ]
  }
];
