import React, { useMemo } from 'react';
import { useGallery } from '../../context/GalleryContext';
import { galleryItems, galleryCategories } from '../../data/galleryData';
import GalleryCard from './GalleryCard';

export default function GallerySection() {
  const { activeCategory, setActiveCategory } = useGallery();

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-8 lg:px-12 bg-surface museum-grain" id="gallery">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/30 pb-6">
          <div className="space-y-2">
            <span className="font-label-sm text-[10.5px] uppercase tracking-[0.25em] text-secondary font-bold">
              Curated Vitrine Series
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight">
              The Art of the Detail
            </h2>
            <p className="font-body-md text-base text-on-surface-variant max-w-xl">
              Small canvases. Limitless tactile sculpture. Select any specimen to enter calibrated optical macro inspection.
            </p>
          </div>

          <div className="flex items-center gap-3 font-label-sm text-[11px] uppercase text-secondary">
            <span className="font-bold text-primary px-3 py-1 rounded-full bg-secondary-container">
              {filteredItems.length} Specimens Available
            </span>
            <span>·</span>
            <span className="font-mono">Archival Edition 2025</span>
          </div>
        </div>

        {/* Floating Glass Filter Pill Bar */}
        <div className="sticky top-24 z-30 w-full flex items-center justify-start md:justify-center overflow-x-auto py-2 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1.5 rounded-full atelier-glass shadow-md">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full uppercase font-label-md text-[11px] tracking-wider transition-all duration-200 whitespace-nowrap font-bold ${isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-on-surface-variant hover:text-primary hover:bg-white/60'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Exhibition Vitrine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pt-2">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
