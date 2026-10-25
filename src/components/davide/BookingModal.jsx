import React, { useState } from 'react';
import { useGallery } from '../../context/GalleryContext';
import { galleryItems } from '../../data/galleryData';
import { nailShapes } from '../../data/shapesData';

export default function BookingModal() {
  const {
    isBookingOpen,
    setIsBookingOpen,
    selectedArtwork,
    handleBookingSubmit,
    bookingConfirmation,
    setBookingConfirmation
  } = useGallery();

  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    location: 'London',
    date: '2025-11-15',
    shape: 'almond',
    specimenId: selectedArtwork?.id || '001',
    bespokeNotes: ''
  });

  if (!isBookingOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const chosenSpecimen = galleryItems.find((g) => g.id === formData.specimenId) || selectedArtwork;
    handleBookingSubmit({
      ...formData,
      discipline: chosenSpecimen.discipline,
      specimenName: chosenSpecimen.title
    });
  };

  const handleClose = () => {
    setIsBookingOpen(false);
    setBookingConfirmation(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] dark:bg-[#0E0E0E] text-[#0A0A0A] dark:text-[#FFFFFF] rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A] dark:bg-[#FFFFFF] animate-pulse"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
              ATELIER COMMISSION RESERVATION
            </span>
          </div>

          <button
            onClick={handleClose}
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
          >
            [CLOSE ✕]
          </button>
        </div>

        {bookingConfirmation ? (
          // Confirmation View
          <div className="flex flex-col gap-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/10 mx-auto flex items-center justify-center text-2xl font-serif">
              ✓
            </div>
            <div>
              <h3 className="font-serif text-3xl uppercase tracking-tight">
                Commission Recorded
              </h3>
              <p className="text-sm font-sans text-[#666666] dark:text-[#999999] pt-2 max-w-md mx-auto">
                Your private commission inquiry for{' '}
                <strong className="text-[#0A0A0A] dark:text-[#FFFFFF]">
                  {bookingConfirmation.specimenName}
                </strong>{' '}
                has been transmitted to the {bookingConfirmation.location} atelier. Concierge response within 4 hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-left text-xs font-mono uppercase tracking-wider space-y-2">
              <div className="flex justify-between">
                <span className="text-[#888888]">GUEST:</span>
                <span className="font-bold">{bookingConfirmation.guestName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888888]">ATELIER LOCATION:</span>
                <span className="font-bold">{bookingConfirmation.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888888]">DATE:</span>
                <span className="font-bold">{bookingConfirmation.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888888]">SILHOUETTE:</span>
                <span className="font-bold">{bookingConfirmation.shape}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleClose}
                className="w-full py-3 bg-[#0A0A0A] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#0A0A0A] font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:opacity-85"
              >
                DONE
              </button>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-black/[0.05] dark:bg-white/[0.1] text-[#0A0A0A] dark:text-[#FFFFFF] font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-black/10 text-center flex items-center justify-center gap-2"
              >
                <span>OPEN WHATSAPP</span>
              </a>
            </div>
          </div>
        ) : (
          // Booking Form View
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <p className="text-xs font-mono text-[#666666] dark:text-[#999999] uppercase tracking-wider leading-relaxed">
              Commission an original sculptural manicure accession. Handcrafted bespoke in our Paris, Tokyo, New York, or London private ateliers.
            </p>

            {/* Specimen Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#888888]">
                CHOOSE SPECIMEN / ARTWORK
              </label>
              <select
                value={formData.specimenId}
                onChange={(e) => setFormData({ ...formData, specimenId: e.target.value })}
                className="w-full p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 font-mono text-xs uppercase outline-none focus:border-black dark:focus:border-white"
              >
                {galleryItems.map((item) => (
                  <option key={item.id} value={item.id} className="bg-white dark:bg-[#111111]">
                    {item.title} — {item.specimenName} [{item.discipline}]
                  </option>
                ))}
              </select>
            </div>

            {/* Atelier Location & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#888888]">
                  ATELIER CITY
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 font-mono text-xs uppercase outline-none"
                >
                  <option value="London" className="bg-white dark:bg-[#111111]">London (Mayfair 51.50° N)</option>
                  <option value="Paris" className="bg-white dark:bg-[#111111]">Paris (Le Marais 48.85° N)</option>
                  <option value="Tokyo" className="bg-white dark:bg-[#111111]">Tokyo (Aoyama 35.67° N)</option>
                  <option value="New York" className="bg-white dark:bg-[#111111]">New York (Tribeca 40.71° N)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#888888]">
                  TARGET DATE
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 font-mono text-xs uppercase outline-none"
                />
              </div>
            </div>

            {/* Nail Silhouette Shape */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#888888]">
                ANATOMICAL SILHOUETTE
              </label>
              <select
                value={formData.shape}
                onChange={(e) => setFormData({ ...formData, shape: e.target.value })}
                className="w-full p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 font-mono text-xs uppercase outline-none"
              >
                {nailShapes.map((shape) => (
                  <option key={shape.id} value={shape.id} className="bg-white dark:bg-[#111111]">
                    {shape.name} — {shape.curve} ({shape.stressProfile})
                  </option>
                ))}
              </select>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#888888]">
                  CURATOR / GUEST NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.G. CAMILLE LAURENT"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 font-mono text-xs uppercase outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#888888]">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="CURATOR@DOMAIN.COM"
                  value={formData.guestEmail}
                  onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                  className="w-full p-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 font-mono text-xs uppercase outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 mt-2 bg-[#0A0A0A] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#0A0A0A] font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:opacity-85 transition-opacity"
            >
              TRANSMIT COMMISSION INQUIRY →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
