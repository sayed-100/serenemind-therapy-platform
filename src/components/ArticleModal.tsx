import React, { useEffect } from 'react';
import { X, Clock, User, Calendar, BookOpen, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
  onFindTherapist?: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
  onFindTherapist
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF8F5] w-full max-w-3xl rounded-2xl border border-[#DDD5C5] shadow-2xl overflow-hidden flex flex-col my-6 max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="bg-white border-b border-[#EAE4D7] px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EBF2EE] text-[#3D5A4C]">
            {article.category}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-[#65736A] hover:text-[#1F2421] hover:bg-[#F2ECE1] rounded-lg transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
          {/* Article Header info */}
          <div className="space-y-3">
            <h1 id="article-modal-title" className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1F2421] leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#66746B] pt-1">
              <span className="flex items-center gap-1.5 font-medium text-[#2E3C33]">
                <User className="w-4 h-4 text-[#8A988E]" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#8A988E]" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#8A988E]" />
                {article.readingTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-16/9 rounded-2xl overflow-hidden border border-[#E5DFD1]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-[#EDF3EF] border border-[#CCDCD1] rounded-2xl p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#294637]">
                <BookOpen className="w-4 h-4 text-[#3D5A4C]" />
                <span>Practical & Self-Care Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#38483F]">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4A6B5D] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#2E3932] leading-relaxed">
            {article.fullContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Medical disclaimer note */}
          <div className="p-4 bg-[#F2EDE2] border border-[#DDD5C5] rounded-xl text-xs text-[#5D6B61] flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#839387] shrink-0 mt-0.5" />
            <p>
              <strong>Educational Disclaimer:</strong> This resource is prepared for psychoeducational demonstration and does not constitute formal medical diagnosis or psychiatric treatment. For tailored personal care, connect with a qualified mental health professional.
            </p>
          </div>

          {/* Author footer & Find Therapist CTA */}
          <div className="pt-6 border-t border-[#EAE4D7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#717E75]">Written by</p>
              <p className="text-sm font-semibold text-[#1F2421]">{article.author}</p>
            </div>
            {onFindTherapist && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onFindTherapist();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#3D5A4C] hover:bg-[#324B3E] text-white rounded-xl text-xs sm:text-sm font-medium transition-colors"
              >
                Find a Therapist Specializing in this
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
