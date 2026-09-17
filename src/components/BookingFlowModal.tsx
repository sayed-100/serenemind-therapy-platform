import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  Video,
  MapPin,
  CheckCircle,
  User,
  Mail,
  Phone,
  FileText,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Therapist, BookingState } from '../types';

interface BookingFlowModalProps {
  therapist: Therapist | null;
  isOpen: boolean;
  onClose: () => void;
  onCompleteBooking?: (details: BookingState) => void;
}

export const BookingFlowModal: React.FC<BookingFlowModalProps> = ({
  therapist,
  isOpen,
  onClose,
  onCompleteBooking
}) => {
  if (!isOpen || !therapist) return null;

  // Step state: 1 to 6
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);

  // Form selections
  const [sessionType, setSessionType] = useState('50-Min Individual Video');
  const [sessionPrice, setSessionPrice] = useState(therapist.sessionPrice);
  const [selectedDate, setSelectedDate] = useState('Thursday, October 23, 2025');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [concernsNote, setConcernsNote] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [bookingRef] = useState(`SM-${Math.floor(100000 + Math.random() * 900000)}`);

  // Session options
  const sessionOptions = [
    {
      type: '50-Min Individual Video',
      price: therapist.sessionPrice,
      duration: '50 minutes',
      icon: Video,
      description: 'Secure, encrypted telehealth video session from anywhere in your state.'
    },
    {
      type: '50-Min In-Person Consultation',
      price: therapist.sessionPrice + 10,
      duration: '50 minutes',
      icon: MapPin,
      description: `Quiet private practice clinic in ${therapist.location.split('&')[0]}.`
    },
    {
      type: '20-Min Free Consultation Call',
      price: 0,
      duration: '20 minutes',
      icon: Clock,
      description: 'Brief compatibility phone call to discuss goals and ask questions.'
    }
  ];

  // Available upcoming dates
  const availableDates = [
    { dayOfWeek: 'Thu', dayNum: '23', month: 'Oct', full: 'Thursday, October 23, 2025' },
    { dayOfWeek: 'Fri', dayNum: '24', month: 'Oct', full: 'Friday, October 24, 2025' },
    { dayOfWeek: 'Mon', dayNum: '27', month: 'Oct', full: 'Monday, October 27, 2025' },
    { dayOfWeek: 'Tue', dayNum: '28', month: 'Oct', full: 'Tuesday, October 28, 2025' },
    { dayOfWeek: 'Wed', dayNum: '29', month: 'Oct', full: 'Wednesday, October 29, 2025' },
    { dayOfWeek: 'Thu', dayNum: '30', month: 'Oct', full: 'Thursday, October 30, 2025' }
  ];

  // Available time slots
  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM'
  ];

  // Step 4 Validation
  const handleValidateStep4 = () => {
    const errs: { [key: string]: string } = {};
    if (!clientName.trim()) {
      errs.name = 'Please provide your full legal or preferred name.';
    }
    if (!clientEmail.trim()) {
      errs.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(clientEmail)) {
        errs.email = 'Please provide a valid email format (e.g. name@example.com).';
      }
    }
    if (!clientPhone.trim()) {
      errs.phone = 'Please provide a phone number for SMS session reminders.';
    } else if (clientPhone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 4) {
      if (!handleValidateStep4()) return;
    }
    if (currentStep === 5) {
      if (onCompleteBooking) {
        onCompleteBooking({
          therapistId: therapist.id,
          sessionType,
          sessionPrice,
          date: selectedDate,
          timeSlot: selectedTime,
          clientName,
          clientEmail,
          clientPhone,
          concernsNote
        });
      }
      setCurrentStep(6);
      return;
    }
    setCurrentStep((prev) => (prev + 1) as any);
  };

  const handlePrevStep = () => {
    if (currentStep > 1 && currentStep < 6) {
      setCurrentStep((prev) => (prev - 1) as any);
    }
  };

  const handleResetAndClose = () => {
    setCurrentStep(1);
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleResetAndClose();
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
  }, [isOpen]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={handleResetAndClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF8F5] w-full max-w-2xl rounded-2xl border border-[#DED7C8] shadow-2xl overflow-hidden flex flex-col my-6"
      >
        {/* Modal Top Bar */}
        <div className="bg-white border-b border-[#EAE4D7] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-10 h-10 rounded-full object-cover border border-[#D5CDBD]"
            />
            <div>
              <h2 id="booking-modal-title" className="font-serif text-lg font-semibold text-[#1F2421]">
                Book with {therapist.name}
              </h2>
              <p className="text-xs text-[#627066]">
                {therapist.title} • {therapist.location.split('&')[0]}
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 text-[#647269] hover:text-[#1F2421] hover:bg-[#F2ECE1] rounded-lg transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress indicator (Steps 1 to 5) */}
        {currentStep < 6 && (
          <div className="bg-[#F4EFE6] px-6 py-2.5 border-b border-[#EAE4D7]">
            <div className="flex items-center justify-between text-xs font-medium text-[#647268] mb-1.5">
              <span>Step {currentStep} of 5</span>
              <span>
                {currentStep === 1 && 'Select Format'}
                {currentStep === 2 && 'Select Date'}
                {currentStep === 3 && 'Select Time'}
                {currentStep === 4 && 'Your Details'}
                {currentStep === 5 && 'Confirm & Review'}
              </span>
            </div>
            <div className="w-full bg-[#DFD8CA] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#3D5A4C] h-full transition-all duration-300 rounded-full"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step Body */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto max-h-[70vh]">
          {/* STEP 1: Select Session Type */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2421]">
                  Step 1: Select Session Format
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6A61] mt-1">
                  Choose the session setting that suits your comfort and schedule best.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {sessionOptions.map((opt) => {
                  const isSelected = sessionType === opt.type;
                  const Icon = opt.icon;
                  return (
                    <div
                      key={opt.type}
                      onClick={() => {
                        setSessionType(opt.type);
                        setSessionPrice(opt.price);
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#EDF4F0] border-[#3D5A4C] ring-2 ring-[#3D5A4C]/20 shadow-xs'
                          : 'bg-white border-[#DDD5C5] hover:bg-[#F9F6F0]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-2 rounded-lg mt-0.5 ${
                              isSelected ? 'bg-[#3D5A4C] text-white' : 'bg-[#EAE4D6] text-[#4A574F]'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-[#1F2421]">
                              {opt.type}
                            </h4>
                            <p className="text-xs text-[#5D6B62] mt-0.5">
                              {opt.description}
                            </p>
                            <span className="inline-block mt-2 text-[11px] font-medium text-[#46544B] bg-[#E5DFD3] px-2 py-0.5 rounded">
                              {opt.duration}
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-base font-bold text-[#1F2421]">
                            {opt.price === 0 ? 'Free' : `$${opt.price}`}
                          </span>
                          {opt.price > 0 && (
                            <span className="text-[11px] text-[#717E75] block">/ session</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Select Date */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2421]">
                  Step 2: Choose a Date
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6A61] mt-1">
                  Clinician openings for the upcoming two-week clinical cycle.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {availableDates.map((item) => {
                  const isSelected = selectedDate === item.full;
                  return (
                    <button
                      key={item.full}
                      type="button"
                      onClick={() => setSelectedDate(item.full)}
                      className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? 'bg-[#3D5A4C] text-white border-[#3D5A4C] shadow-sm'
                          : 'bg-white border-[#DDD5C5] text-[#2C3830] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <span className={`text-xs uppercase font-medium ${isSelected ? 'text-[#E1ECE5]' : 'text-[#6C7970]'}`}>
                        {item.dayOfWeek}
                      </span>
                      <span className="text-2xl font-bold font-serif leading-none">
                        {item.dayNum}
                      </span>
                      <span className={`text-xs ${isSelected ? 'text-[#E1ECE5]' : 'text-[#6C7970]'}`}>
                        {item.month} 2025
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 bg-[#EAF0EC] border border-[#CCDCD1] rounded-xl text-xs text-[#2A4839] flex items-center gap-2 mt-4">
                <Calendar className="w-4 h-4 text-[#3D5A4C] shrink-0" />
                <span>Selected: <strong>{selectedDate}</strong></span>
              </div>
            </div>
          )}

          {/* STEP 3: Select Time Slot */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2421]">
                  Step 3: Select Available Time
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6A61] mt-1">
                  Times shown in your local timezone for {selectedDate}.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {availableTimes.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-[#3D5A4C] text-white border-[#3D5A4C] shadow-xs'
                          : 'bg-white border-[#DDD5C5] text-[#2C3830] hover:bg-[#F2ECE1]'
                      }`}
                    >
                      <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#6C7970]'}`} />
                      <span>{time}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-[#717E75] pt-2">
                Need an alternative hour? Please proceed with booking and request scheduling adjustments in Step 4.
              </p>
            </div>
          )}

          {/* STEP 4: Client Info Form & Validation */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2421]">
                  Step 4: Your Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6A61] mt-1">
                  Your details are protected under standard clinical confidentiality principles.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                <div>
                  <label htmlFor="booking-client-name" className="text-xs font-semibold uppercase tracking-wider text-[#4E5C53] block mb-1">
                    Full Legal or Preferred Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#75847B] absolute left-3.5 top-3.5" />
                    <input
                      id="booking-client-name"
                      type="text"
                      value={clientName}
                      onChange={(e) => {
                        setClientName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Jordan Miller"
                      className={`w-full pl-10 pr-3 py-2.5 bg-white border rounded-xl text-sm text-[#1F2421] placeholder-[#8E9B92] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C] ${
                        errors.name ? 'border-[#C95C46] bg-[#FCF5F3]' : 'border-[#DDD5C5]'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-[#C95C46] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="booking-client-email" className="text-xs font-semibold uppercase tracking-wider text-[#4E5C53] block mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#75847B] absolute left-3.5 top-3.5" />
                    <input
                      id="booking-client-email"
                      type="email"
                      value={clientEmail}
                      onChange={(e) => {
                        setClientEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="jordan.miller@example.com"
                      className={`w-full pl-10 pr-3 py-2.5 bg-white border rounded-xl text-sm text-[#1F2421] placeholder-[#8E9B92] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C] ${
                        errors.email ? 'border-[#C95C46] bg-[#FCF5F3]' : 'border-[#DDD5C5]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-[#C95C46] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="booking-client-phone" className="text-xs font-semibold uppercase tracking-wider text-[#4E5C53] block mb-1">
                    Mobile Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#75847B] absolute left-3.5 top-3.5" />
                    <input
                      id="booking-client-phone"
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => {
                        setClientPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="(555) 234-5678"
                      className={`w-full pl-10 pr-3 py-2.5 bg-white border rounded-xl text-sm text-[#1F2421] placeholder-[#8E9B92] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C] ${
                        errors.phone ? 'border-[#C95C46] bg-[#FCF5F3]' : 'border-[#DDD5C5]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-[#C95C46] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="booking-concerns" className="text-xs font-semibold uppercase tracking-wider text-[#4E5C53] block mb-1">
                    What primary focus or questions would you like to bring? (Optional)
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-[#75847B] absolute left-3.5 top-3" />
                    <textarea
                      id="booking-concerns"
                      rows={2}
                      value={concernsNote}
                      onChange={(e) => setConcernsNote(e.target.value)}
                      placeholder="e.g. Navigating work anxiety and boundary setting..."
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#DDD5C5] rounded-xl text-sm text-[#1F2421] placeholder-[#8E9B92] focus:outline-none focus:ring-2 focus:ring-[#3D5A4C]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Booking Summary & Final Review */}
          {currentStep === 5 && (
            <div className="space-y-5">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2421]">
                  Step 5: Review & Confirm Appointment
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6A61] mt-1">
                  Please review your consultation details before finalizing your booking.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-white border border-[#DDD5C5] rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-[#EAE4D7]">
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#1F2421]">
                      {therapist.name}
                    </h4>
                    <p className="text-xs text-[#5D6B62]">{therapist.title}</p>
                    <p className="text-xs text-[#7B8880]">{therapist.licenseNumber}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EDE7DC]">
                    <span className="text-[#6D7B72] block">Session Type:</span>
                    <strong className="text-[#1F2421] font-semibold text-xs block mt-0.5">
                      {sessionType}
                    </strong>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EDE7DC]">
                    <span className="text-[#6D7B72] block">Schedule:</span>
                    <strong className="text-[#1F2421] font-semibold text-xs block mt-0.5">
                      {selectedDate} at {selectedTime}
                    </strong>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EDE7DC]">
                    <span className="text-[#6D7B72] block">Client Name:</span>
                    <strong className="text-[#1F2421] font-semibold text-xs block mt-0.5">
                      {clientName}
                    </strong>
                  </div>
                  <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EDE7DC]">
                    <span className="text-[#6D7B72] block">Confirmation Email:</span>
                    <strong className="text-[#1F2421] font-semibold text-xs block mt-0.5 truncate">
                      {clientEmail}
                    </strong>
                  </div>
                </div>

                {concernsNote && (
                  <div className="text-xs bg-[#FAF8F5] p-3 rounded-xl border border-[#EDE7DC]">
                    <span className="text-[#6D7B72] block">Focus notes:</span>
                    <p className="text-[#2C3830] italic mt-0.5">"{concernsNote}"</p>
                  </div>
                )}

                {/* Price total */}
                <div className="pt-3 border-t border-[#EAE4D7] flex items-center justify-between text-sm">
                  <span className="text-[#59665E] font-medium">Example Session Fee:</span>
                  <span className="text-lg font-bold text-[#1F2421]">
                    {sessionPrice === 0 ? 'Free Consultation ($0)' : `$${sessionPrice}`}
                  </span>
                </div>
              </div>

              {/* Demo Notice */}
              <div className="p-3.5 bg-[#FAF3E8] border border-[#ECD9BD] rounded-xl text-xs text-[#735732] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#9C713B] shrink-0 mt-0.5" />
                <p>
                  <strong>Portfolio Demonstration:</strong> Clicking confirm submits this simulated booking into local state. No credit card is charged, and no actual clinical session is scheduled.
                </p>
              </div>
            </div>
          )}

          {/* STEP 6: Confirmation Screen */}
          {currentStep === 6 && (
            <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-[#E3EDE7] rounded-full flex items-center justify-center text-[#3D5A4C] mx-auto shadow-inner">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#4A6B5D] bg-[#EBF2EE] px-3 py-1 rounded-full">
                  Booking Confirmed
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#1F2421] mt-2">
                  You're all set with {therapist.name}!
                </h3>
                <p className="text-xs sm:text-sm text-[#526056] max-w-md mx-auto mt-1">
                  A calendar invite and encrypted intake packet link have been prepared for <strong>{clientEmail}</strong>.
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="bg-white border border-[#DDD5C5] rounded-2xl p-5 max-w-md mx-auto text-left space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-[#EAE4D7]">
                  <span className="text-[#6C7971]">Reference Number</span>
                  <span className="font-mono font-bold text-[#1F2421] bg-[#F2EDE2] px-2 py-0.5 rounded">
                    {bookingRef}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6C7971]">Therapist</span>
                  <span className="font-medium text-[#1F2421]">{therapist.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6C7971]">Format</span>
                  <span className="font-medium text-[#1F2421]">{sessionType}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#6C7971]">Date & Time</span>
                  <span className="font-medium text-[#1F2421]">
                    {selectedDate} at {selectedTime}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 bg-[#3D5A4C] hover:bg-[#314A3E] text-white rounded-xl text-sm font-medium transition-colors"
                >
                  Done & Return to Directory
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Navigation Buttons (Steps 1 to 5) */}
        {currentStep < 6 && (
          <div className="bg-white border-t border-[#EAE4D7] px-6 py-4 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2 border border-[#D5CDBD] text-[#3D4C42] hover:bg-[#F2ECE1] rounded-xl text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="px-6 py-2.5 bg-[#3D5A4C] hover:bg-[#314A3E] text-white rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 shadow-xs transition-all active:scale-[0.98]"
            >
              <span>{currentStep === 5 ? 'Confirm Booking' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
