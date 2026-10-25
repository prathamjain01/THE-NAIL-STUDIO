import React from 'react';
import { useGallery } from '../../context/GalleryContext';
import { precisionRatios } from '../../data/labData';

export default function AtelierInfoModal() {
  const { isInfoOpen, setIsInfoOpen, setIsBookingOpen } = useGallery();

  if (!isInfoOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] dark:bg-[#0E0E0E] text-[#0A0A0A] dark:text-[#FFFFFF] rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-10 shadow-2xl flex flex-col gap-8">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A] dark:bg-[#FFFFFF] animate-pulse"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
              THE ATELIER — MONOGRAPH 04
            </span>
          </div>

          <button
            onClick={() => setIsInfoOpen(false)}
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
          >
            [CLOSE ✕]
          </button>
        </div>

        {/* Headline & Manifesto */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-tight leading-tight">
            Art, Down to the<br />
            <span className="italic font-normal font-serif">Smallest Detail.</span>
          </h2>
          <p className="text-base font-sans text-[#444444] dark:text-[#CCCCCC] leading-relaxed max-w-2xl">
            We reject the notion that manicures belong solely to the ephemeral realm of cosmetic grooming. At The Nail Studio, each nail plate is treated as a 10-point architectural canvas where structural balance, light refraction, and high-purity lacquers converge into enduring tactile sculpture.
          </p>
        </div>

        {/* Technical Calibration Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {precisionRatios.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] space-y-2"
            >
              <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest font-bold">
                {item.label}
              </span>
              <p className="font-serif text-3xl uppercase font-bold text-[#0A0A0A] dark:text-[#FFFFFF]">
                {item.value}
              </p>
              <p className="text-xs font-sans text-[#666666] dark:text-[#999999] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Atelier Coordinates Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-black/10 dark:border-white/10 text-xs font-mono uppercase tracking-wider text-[#666666] dark:text-[#999999]">
          <div>
            <p className="text-[#0A0A0A] dark:text-[#FFFFFF] font-bold">PARIS ATELIER</p>
            <p className="pt-1">48.8566° N 2.3522° E</p>
            <p>Rue de Turenne, Le Marais</p>
          </div>
          <div>
            <p className="text-[#0A0A0A] dark:text-[#FFFFFF] font-bold">TOKYO ATELIER</p>
            <p className="pt-1">35.6762° N 139.6503° E</p>
            <p>Aoyama, Minato-ku</p>
          </div>
          <div>
            <p className="text-[#0A0A0A] dark:text-[#FFFFFF] font-bold">NEW YORK ATELIER</p>
            <p className="pt-1">40.7128° N 74.0060° W</p>
            <p>Franklin St, Tribeca</p>
          </div>
        </div>

        {/* Commission CTA */}
        <button
          onClick={() => {
            setIsInfoOpen(false);
            setIsBookingOpen(true);
          }}
          className="w-full py-4 bg-[#0A0A0A] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#0A0A0A] font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:opacity-85 transition-opacity"
        >
          RESERVE PRIVATE SESSION →
        </button>
      </div>
    </div>
  );
}
