export interface Review {
  id: string;
  author: string;
  initials: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Therapist {
  id: string;
  name: string;
  title: string;
  pronouns: string;
  image: string;
  rating: number;
  reviewCount: number;
  specializations: string[];
  languages: string[];
  experienceYears: number;
  sessionPrice: number;
  sessionFormats: ('In-Person' | 'Video Online')[];
  location: string;
  availability: 'This Week' | 'Evening & Weekends' | 'Next Week';
  nextAvailableSlot: string;
  about: string;
  approach: string;
  modalities: string[];
  education: string[];
  licenseNumber: string;
  reviews: Review[];
  featured?: boolean;
}

export interface Article {
  id: string;
  category: 'Stress' | 'Relationships' | 'Personal Growth' | 'Sleep' | 'Work & Life';
  title: string;
  shortDescription: string;
  fullContent: string[];
  readingTime: string;
  author: string;
  date: string;
  image: string;
  keyTakeaways: string[];
}

export interface FilterState {
  searchQuery: string;
  specialization: string;
  language: string;
  sessionFormat: string;
  availability: string;
  maxPrice: number;
  sortBy: 'recommended' | 'price-asc' | 'price-desc' | 'experience';
}

export interface BookingState {
  therapistId: string;
  sessionType: string;
  sessionPrice: number;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  concernsNote: string;
}

export type PageView = 'home' | 'find' | 'profile' | 'resources' | 'about' | 'contact';
