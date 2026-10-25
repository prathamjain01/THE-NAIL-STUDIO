import React, { useEffect } from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function MenuOverlay() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    setActiveView,
    setIsBookingOpen,
    setIsSilhouettesOpen,
    setIsInfoOpen
  } = useGallery();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, setIsMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FFFFFF] flex flex-col justify-between p-6 sm:p-12 lg:p-16 animate-fadeIn transition-colors duration-300">
      {/* Top Header Row in Menu */}
      <div className="flex items-center justify-between pb-8 border-b border-black/10 dark:border-white/10">
        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
          THE NAIL STUDIO — ARCHIVE MENU
        </span>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
        >
          [CLOSE]
        </button>
      </div>

      {/* Main Large Typography Nav Links */}
      <div className="flex flex-col gap-4 sm:gap-6 my-auto max-w-4xl">
        <button
          onClick={() => {
            setActiveView('grid');
            setIsMenuOpen(false);
          }}
          className="text-left font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.02em] hover:translate-x-3 transition-transform duration-300"
        >
          01. ARCHIVE GRID
        </button>

        <button
          onClick={() => {
            setActiveView('index');
            setIsMenuOpen(false);
          }}
          className="text-left font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.02em] hover:translate-x-3 transition-transform duration-300"
        >
          02. SPECIMEN INDEX
        </button>

        <button
          onClick={() => {
            setIsSilhouettesOpen(true);
            setIsMenuOpen(false);
          }}
          className="text-left font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.02em] hover:translate-x-3 transition-transform duration-300"
        >
          03. ANATOMICAL SILHOUETTES
        </button>

        <button
          onClick={() => {
            setIsInfoOpen(true);
            setIsMenuOpen(false);
          }}
          className="text-left font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.02em] hover:translate-x-3 transition-transform duration-300"
        >
          04. ATELIER MONOGRAPH
        </button>

        <button
          onClick={() => {
            setIsBookingOpen(true);
            setIsMenuOpen(false);
          }}
          className="text-left font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-[-0.02em] hover:translate-x-3 transition-transform duration-300 text-[#C5A059]"
        >
          05. RESERVE COMMISSION →
        </button>
      </div>

      {/* Bottom Atelier Coordinates & Concierge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-black/10 dark:border-white/10 text-xs font-mono uppercase tracking-[0.16em] text-[#666666] dark:text-[#999999]">
        <div>
          <p className="text-[#0A0A0A] dark:text-[#FFFFFF] font-bold">PARIS PAVILION</p>
          <p className="pt-1">48.8566° N 2.3522° E</p>
          <p>Rue de Turenne, Le Marais</p>
        </div>

        <div>
          <p className="text-[#0A0A0A] dark:text-[#FFFFFF] font-bold">TOKYO ATELIER</p>
          <p className="pt-1">35.6762° N 139.6503° E</p>
          <p>Aoyama, Minato-ku</p>
        </div>

        <div>
          <p className="text-[#0A0A0A] dark:text-[#FFFFFF] font-bold">NEW YORK STUDIO</p>
          <p className="pt-1">40.7128° N 74.0060° W</p>
          <p>Franklin St, Tribeca</p>
        </div>

        <div>
          <p className="text-[#0A0A0A] dark:text-[#FFFFFF] font-bold">DIRECT CONCIERGE</p>
          <p className="pt-1">concierge@thenailstudio.com</p>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noreferrer"
            className="text-[#0A0A0A] dark:text-[#FFFFFF] underline pt-1 block"
          >
            WhatsApp Reservation
          </a>
        </div>
      </div>
    </div>
  );
}
