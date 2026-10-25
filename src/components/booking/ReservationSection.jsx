import React, { useState, useEffect } from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function ReservationSection() {
  const { selectedShape, handleBookingSubmit } = useGallery();

  const [formData, setFormData] = useState({
    guestName: '',
    guestEmail: '',
    location: 'paris',
    discipline: '3D Molten Liquid Chromium',
    date: '',
    shape: 'almond'
  });

  // Sync with selected shape from the taxonomy section
  useEffect(() => {
    if (selectedShape) {
      setFormData(prev => ({ ...prev, shape: selectedShape }));
    }
  }, [selectedShape]);

  // Set default minimum date to today
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.guestName || !formData.guestEmail) return;
    handleBookingSubmit(formData);
  };

  return (
    <section className="w-full bg-primary text-on-primary py-space-xl px-margin-mobile lg:px-margin relative overflow-hidden" id="reserve-session">
      {/* Ambient Rose Blush Glow */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary-container/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-fixed/15 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary-fixed font-semibold">
            By Private Atelier Appointment
          </span>
          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary tracking-tight">
            Make Room for Art.
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">
            Your next set starts with an idea. Reserve a private curated session at our Paris, Tokyo, or New York vitrine suites.
          </p>
        </div>

        {/* Apple Glass Booking Card */}
        <div className="w-full max-w-4xl mx-auto rounded-3xl bg-surface-container-lowest/15 backdrop-blur-2xl border border-white/20 p-space-lg lg:p-space-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Column 1: Client & Atelier */}
            <div className="space-y-space-md">
              <div>
                <label className="block font-label-sm text-label-sm uppercase text-primary-fixed pb-1.5 font-semibold">
                  Curatorial Guest Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="CLAUDE DELACROIX"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  className="w-full rounded-xl bg-surface-container-lowest/20 placeholder:text-primary-fixed-dim/50 text-on-primary px-space-md py-3.5 font-body-sm text-body-sm outline-none border border-white/20 focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all"
                />
              </div>

              <div>
                <label className="block font-label-sm text-label-sm uppercase text-primary-fixed pb-1.5 font-semibold">
                  Direct Curator Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="CURATOR@COLLECTOR.COM"
                  value={formData.guestEmail}
                  onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                  className="w-full rounded-xl bg-surface-container-lowest/20 placeholder:text-primary-fixed-dim/50 text-on-primary px-space-md py-3.5 font-body-sm text-body-sm outline-none border border-white/20 focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all"
                />
              </div>

              <div>
                <label className="block font-label-sm text-label-sm uppercase text-primary-fixed pb-1.5 font-semibold">
                  Pavilion Vitrine Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full rounded-xl bg-surface-container-lowest/20 text-on-primary px-space-md py-3.5 font-body-sm text-body-sm outline-none border border-white/20 focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all cursor-pointer"
                >
                  <option className="bg-inverse-surface text-on-primary" value="paris">Paris — 8e Arrondissement Atelier</option>
                  <option className="bg-inverse-surface text-on-primary" value="tokyo">Tokyo — Omotesando Sculpture Lab</option>
                  <option className="bg-inverse-surface text-on-primary" value="nyc">New York — Tribeca Gallery Suite</option>
                </select>
              </div>
            </div>

            {/* Column 2: Discipline & Date */}
            <div className="space-y-space-md">
              <div>
                <label className="block font-label-sm text-label-sm uppercase text-primary-fixed pb-1.5 font-semibold">
                  Sculptural Discipline
                </label>
                <select
                  value={formData.discipline}
                  onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                  className="w-full rounded-xl bg-surface-container-lowest/20 text-on-primary px-space-md py-3.5 font-body-sm text-body-sm outline-none border border-white/20 focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all cursor-pointer"
                >
                  <option className="bg-inverse-surface text-on-primary" value="3D Molten Liquid Chromium">3D Molten Liquid Chromium</option>
                  <option className="bg-inverse-surface text-on-primary" value="Architectural Russian Manicure">Architectural Russian Manicure</option>
                  <option className="bg-inverse-surface text-on-primary" value="Burgundy 24K Gold Inlay">Burgundy 24K Gold Inlay</option>
                  <option className="bg-inverse-surface text-on-primary" value="Minimalist Hairline Bisect">Minimalist Hairline Bisect</option>
                  <option className="bg-inverse-surface text-on-primary" value="Bespoke Runway Press-On Set">Bespoke Runway Press-On Set</option>
                  <option className="bg-inverse-surface text-on-primary" value="Vitreous Tortoiseshell Patina">Vitreous Tortoiseshell Patina</option>
                </select>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm uppercase text-primary-fixed pb-1.5 font-semibold">
                  Target Exhibition Date
                </label>
                <input
                  type="date"
                  min={today}
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full rounded-xl bg-surface-container-lowest/20 text-on-primary px-space-md py-3.5 font-body-sm text-body-sm outline-none border border-white/20 focus:border-primary-fixed focus:ring-1 focus:ring-primary-fixed transition-all cursor-pointer"
                />
              </div>

              <div>
                <label className="block font-label-sm text-label-sm uppercase text-primary-fixed pb-1.5 font-semibold">
                  Preferred Silhouette
                </label>
                <div className="grid grid-cols-3 gap-2 pt-1 font-label-sm text-label-sm uppercase">
                  {['almond', 'square', 'stiletto'].map((shapeOpt) => (
                    <label
                      key={shapeOpt}
                      className={`flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl cursor-pointer border transition-all text-center ${formData.shape === shapeOpt
                          ? 'bg-primary-fixed text-primary font-bold border-white'
                          : 'bg-surface-container-lowest/15 text-primary-fixed border-white/20 hover:bg-surface-container-lowest/30'
                        }`}
                    >
                      <input
                        type="radio"
                        name="shape"
                        value={shapeOpt}
                        checked={formData.shape === shapeOpt}
                        onChange={() => setFormData({ ...formData, shape: shapeOpt })}
                        className="hidden"
                      />
                      <span className="capitalize">{shapeOpt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Bar */}
            <div className="md:col-span-2 pt-space-xs flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-white/15">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest text-primary hover:bg-surface-container-low font-label-md text-label-md uppercase px-space-xl py-3.5 rounded-xl shadow-lg transition-all font-bold transform hover:-translate-y-0.5"
              >
                <span>Transmit Session Reservation</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <a
                href="https://wa.me"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Atelier Concierge Direct</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
