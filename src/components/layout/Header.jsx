import React, { useState, useEffect } from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function Header() {
  const [activeSection, setActiveSection] = useState('gallery');
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGallery();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['gallery', 'shapes', 'field-notes', 'the-artist', 'reserve-session'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Exhibition', path: '#gallery', id: 'gallery' },
    { label: 'Taxonomy', path: '#shapes', id: 'shapes' },
    { label: 'Field Notes', path: '#field-notes', id: 'field-notes' },
    { label: 'The Atelier', path: '#the-artist', id: 'the-artist' },
    { label: 'Reserve', path: '#reserve-session', id: 'reserve-session' }
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-center pt-4 px-4 sm:px-8 lg:px-12 pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto h-16 w-full max-w-7xl mx-auto rounded-full atelier-glass transition-all duration-300 px-4 sm:px-6 flex items-center justify-between ${scrolled ? 'shadow-[0_12px_40px_-8px_rgba(61,6,19,0.12)] bg-white/90' : 'shadow-[0_4px_24px_-4px_rgba(33,29,32,0.06)]'
            }`}
        >
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <a
              href="#"
              className="font-serif tracking-[0.22em] uppercase text-primary hover:text-gold transition-colors font-semibold text-sm sm:text-base flex items-center gap-2"
            >
              <span>The Nail Art Gallery</span>
              <span className="hidden xl:inline text-[10px] tracking-widest text-secondary font-mono border-l border-outline-variant/40 pl-2">
                PARIS · TOKYO · NYC
              </span>
            </a>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-container-low/80 rounded-full p-1 border border-outline-variant/30">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={() => setActiveSection(item.id)}
                  className={`uppercase transition-all duration-200 font-label-md text-[11px] tracking-[0.16em] px-4 py-1.5 rounded-full ${isActive
                      ? 'bg-primary text-white font-bold shadow-sm'
                      : 'text-on-surface-variant hover:text-primary hover:bg-white/60'
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Callouts */}
          <div className="flex items-center gap-3">
            <a
              href="#reserve-session"
              className="hidden sm:inline-flex items-center gap-2 font-label-sm text-[10.5px] uppercase tracking-[0.16em] bg-primary text-white hover:bg-primary-container px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:scale-[1.02]"
            >
              <span>Reserve Atelier Session</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[20px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-inverse-surface/65 backdrop-blur-md flex flex-col justify-start pt-24 px-6 md:hidden animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 shadow-2xl flex flex-col gap-4 border border-outline-variant/40">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <span className="font-label-sm text-[10px] uppercase tracking-[0.25em] text-secondary font-bold">
                Exhibition Monograph Index
              </span>
              <span className="w-2 h-2 rounded-full bg-primary"></span>
            </div>

            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl text-primary py-2.5 hover:translate-x-2 transition-transform flex items-center justify-between border-b border-surface-container-low"
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[20px] text-secondary">arrow_forward</span>
              </a>
            ))}

            <div className="pt-4">
              <a
                href="#reserve-session"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center inline-block bg-primary text-white font-label-md text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-md font-bold"
              >
                Reserve Curated Session
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
