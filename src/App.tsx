import React, { useState } from 'react';
import { PageView, FilterState, Therapist, Article, BookingState } from './types';
import { therapistsData } from './data/therapists';
import { resourcesData } from './data/resources';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FindTherapistPage } from './pages/FindTherapistPage';
import { TherapistProfilePage } from './pages/TherapistProfilePage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookingFlowModal } from './components/BookingFlowModal';
import { ArticleModal } from './components/ArticleModal';
import { AuthModal } from './components/AuthModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedTherapistId, setSelectedTherapistId] = useState<string | null>(null);

  // Modals state
  const [bookingTherapist, setBookingTherapist] = useState<Therapist | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Filter state for Find a Therapist
  const defaultFilters: FilterState = {
    searchQuery: '',
    specialization: '',
    language: '',
    sessionFormat: '',
    availability: '',
    maxPrice: 200,
    sortBy: 'recommended'
  };
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  // Navigation helper
  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
  };

  const handleSelectSpecialtyFromHome = (specialty: string) => {
    setFilters({
      ...defaultFilters,
      specialization: specialty
    });
    handleNavigate('find');
  };

  const handleViewProfile = (therapistId: string) => {
    setSelectedTherapistId(therapistId);
    handleNavigate('profile');
  };

  const handleBookSession = (therapist: Therapist) => {
    setBookingTherapist(therapist);
  };

  const handleReadArticle = (article: Article) => {
    setActiveArticle(article);
  };

  // Find currently selected therapist for profile view
  const currentTherapist = therapistsData.find((t) => t.id === selectedTherapistId) || therapistsData[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2421]">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Main Page View Controller */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            therapists={therapistsData}
            articles={resourcesData}
            onNavigate={handleNavigate}
            onSelectSpecialty={handleSelectSpecialtyFromHome}
            onViewProfile={handleViewProfile}
            onBookSession={handleBookSession}
            onReadArticle={handleReadArticle}
          />
        )}

        {currentPage === 'find' && (
          <FindTherapistPage
            therapists={therapistsData}
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            onViewProfile={handleViewProfile}
            onBookSession={handleBookSession}
          />
        )}

        {currentPage === 'profile' && (
          <TherapistProfilePage
            therapist={currentTherapist}
            onBack={() => handleNavigate('find')}
            onBookSession={handleBookSession}
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage
            articles={resourcesData}
            onReadArticle={handleReadArticle}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectSpecialty={handleSelectSpecialtyFromHome}
      />

      {/* Booking Flow Modal (Steps 1 to 6) */}
      <BookingFlowModal
        therapist={bookingTherapist}
        isOpen={Boolean(bookingTherapist)}
        onClose={() => setBookingTherapist(null)}
        onCompleteBooking={(details: BookingState) => {
          // Booking confirmed in local state
          console.log('Demonstration booking created:', details);
        }}
      />

      {/* Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        isOpen={Boolean(activeArticle)}
        onClose={() => setActiveArticle(null)}
        onFindTherapist={() => handleNavigate('find')}
      />

      {/* Authentication / Portal Demo Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
