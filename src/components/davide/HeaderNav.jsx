import React from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function HeaderNav() {
  const { activeView, setActiveView, setIsMenuOpen } = useGallery();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-5 sm:py-6 flex items-start justify-between gap-4">
        {/* Brand Name (Top-Left) */}
        <div className="shrink-0">
          <a
            href="#"
            className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#0A0A0A] dark:text-[#FFFFFF] hover:opacity-70 transition-opacity"
          >
            THE NAIL STUDIO
          </a>
        </div>

        {/* Studio / Creative Role Block (Center-Left in Screenshot 2) */}
        <div className="hidden md:flex flex-col text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-[#666666] dark:text-[#999999] leading-tight max-w-xs">
          <span>CO-FOUNDER–CREATIVE DIRECTOR</span>
          <span>HAUTE COUTURE NAIL ART & SCULPTURE</span>
          <span className="text-[#999999] dark:text-[#666666]">PARIS · TOKYO · NEW YORK</span>
        </div>

        {/* View Switcher & Menu (Top-Right in Screenshot 2) */}
        <div className="flex items-center gap-6 sm:gap-10 text-xs sm:text-[13px] font-mono uppercase tracking-[0.2em]">
          {/* GRID button */}
          <button
            onClick={() => setActiveView('grid')}
            className={`transition-colors relative py-1 ${
              activeView === 'grid'
                ? 'text-[#0A0A0A] dark:text-[#FFFFFF] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0A0A0A] dark:after:bg-[#FFFFFF]'
                : 'text-[#888888] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF]'
            }`}
          >
            GRID
          </button>

          {/* INDEX button */}
          <button
            onClick={() => setActiveView('index')}
            className={`transition-colors relative py-1 ${
              activeView === 'index'
                ? 'text-[#0A0A0A] dark:text-[#FFFFFF] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#0A0A0A] dark:after:bg-[#FFFFFF]'
                : 'text-[#888888] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF]'
            }`}
          >
            INDEX
          </button>

          {/* MENU button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-[#0A0A0A] dark:text-[#FFFFFF] hover:text-[#888888] transition-colors py-1 font-bold"
          >
            MENU
          </button>
        </div>
      </div>
    </header>
  );
}
