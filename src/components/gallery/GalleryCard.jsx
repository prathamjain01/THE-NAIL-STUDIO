import React from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function GalleryCard({ item }) {
  const { openInspection } = useGallery();

  return (
    <div
      onClick={() => openInspection(item)}
      className={`gallery-card ${item.colSpan || 'lg:col-span-4'} group cursor-pointer flex flex-col gap-2`}
    >
      <div
        className={`relative w-full ${item.aspectRatio || 'aspect-[4/3]'} rounded-3xl overflow-hidden bg-surface-container shadow-md group-hover:shadow-2xl transition-all duration-700 border border-white/70`}
      >
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          alt={item.title}
          src={item.image}
          loading="lazy"
        />

        {/* Ambient Dark Gradient Scrim for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent opacity-85 group-hover:opacity-70 transition-opacity"></div>

        {/* Accession Tags Top */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-primary font-label-sm text-[10px] uppercase font-bold shadow-sm">
            {item.number}
          </span>
          {item.categoryLabel && (
            <span className="px-3 py-1 rounded-full bg-secondary-container/90 backdrop-blur-md text-primary font-label-sm text-[10px] uppercase font-bold shadow-sm">
              {item.categoryLabel}
            </span>
          )}
        </div>

        {/* Specimen Description Bottom */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
          <div className="pr-3">
            <p className="font-serif text-xl sm:text-2xl font-bold tracking-tight drop-shadow-sm">
              {item.title}
            </p>
            <p className="font-body-sm text-xs text-white/80 line-clamp-1 pt-0.5">
              {item.subtitle}
            </p>
          </div>

          <div
            className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md shrink-0 border border-white/50 group-hover:scale-110"
            title="Inspect Macro Detail"
          >
            <span className="material-symbols-outlined text-[20px]">zoom_in</span>
          </div>
        </div>
      </div>
    </div>
  );
}
