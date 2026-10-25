import React from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function BookingConfirmationModal() {
  const { bookingConfirmation, setBookingConfirmation } = useGallery();

  if (!bookingConfirmation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/70 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-surface-container-lowest border border-white/60 shadow-2xl p-6 sm:p-8 flex flex-col gap-6 text-on-surface">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              Accession Confirmation
            </span>
          </div>
          <button
            onClick={() => setBookingConfirmation(null)}
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Success Icon & Notice */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-full bg-secondary-container/60 text-primary mx-auto flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-[32px]">verified</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary font-bold">
            Session Request Recorded
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
            Your private appointment has been placed into curatorial scheduling. Our atelier concierge will contact you within 4 hours.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2.5 font-label-sm text-label-sm">
          <div className="flex justify-between py-1 border-b border-outline-variant/15">
            <span className="text-secondary uppercase">Guest:</span>
            <span className="font-bold text-on-surface">{bookingConfirmation.guestName}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-outline-variant/15">
            <span className="text-secondary uppercase">Email:</span>
            <span className="font-bold text-on-surface">{bookingConfirmation.guestEmail}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-outline-variant/15">
            <span className="text-secondary uppercase">Vitrine Pavilion:</span>
            <span className="font-bold text-primary capitalize">{bookingConfirmation.location}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-outline-variant/15">
            <span className="text-secondary uppercase">Discipline:</span>
            <span className="font-bold text-primary">{bookingConfirmation.discipline}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-outline-variant/15">
            <span className="text-secondary uppercase">Target Date:</span>
            <span className="font-bold text-on-surface">{bookingConfirmation.date}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-secondary uppercase">Silhouette:</span>
            <span className="font-bold text-primary capitalize">{bookingConfirmation.shape}</span>
          </div>
        </div>

        {/* Modal Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => setBookingConfirmation(null)}
            className="w-full bg-primary text-on-primary font-label-md text-label-md uppercase py-3 rounded-xl hover:bg-primary-container transition-colors shadow-md font-semibold"
          >
            Done
          </button>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noreferrer"
            className="w-full text-center inline-flex items-center justify-center gap-2 bg-surface-container-high text-primary font-label-md text-label-md uppercase py-3 rounded-xl hover:bg-secondary-container transition-colors font-semibold"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Concierge WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
