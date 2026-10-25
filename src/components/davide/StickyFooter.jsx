import React from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function StickyFooter() {
  const { darkMode, toggleDarkMode, setIsBookingOpen } = useGallery();

  return (
    <footer className="w-full bg-[#FFFFFF] dark:bg-[#0A0A0A] border-t border-black/5 dark:border-white/5 py-8 sm:py-10 px-4 sm:px-8 lg:px-12 transition-colors duration-300">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs sm:text-[13px] font-mono uppercase tracking-[0.18em] text-[#0A0A0A] dark:text-[#FFFFFF]">
        {/* Left: Studio Coordinates matching reference screenshots */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#0A0A0A] dark:bg-[#FFFFFF] animate-pulse"></span>
          <span>51.5072° N 0.1276° W</span>
          <span className="text-[#888888] hidden sm:inline">[LONDON ATELIER]</span>
        </div>

        {/* Center: Reserve Appointment Direct Trigger */}
        <div className="order-3 md:order-2">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="hover:underline underline-offset-4 font-bold text-[#0A0A0A] dark:text-[#FFFFFF] transition-opacity"
          >
            RESERVE AN APPOINTMENT →
          </button>
        </div>

        {/* Right: Email Link & Dark/Light Mode Toggle (Icon on Bottom-Right in Screenshot 3 & 4) */}
        <div className="order-2 md:order-3 flex items-center gap-6 sm:gap-8">
          <a
            href="mailto:concierge@thenailstudio.com"
            className="hover:underline underline-offset-4 text-[#0A0A0A] dark:text-[#FFFFFF]"
          >
            EMAIL
          </a>

          {/* Dark / Light Toggle Switch */}
          <button
            onClick={toggleDarkMode}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {darkMode ? (
              // Sun icon for dark mode
              <span className="w-3.5 h-3.5 rounded-full bg-white shadow-sm"></span>
            ) : (
              // Half moon / contrast circle for light mode
              <span className="w-3.5 h-3.5 rounded-full border-2 border-black bg-black"></span>
            )}
          </button>
        </div>
      </div>
    </footer>
  );
}
