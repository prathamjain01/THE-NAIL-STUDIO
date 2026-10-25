import React from 'react';
import { precisionRatios } from '../../data/labData';
import { useGallery } from '../../context/GalleryContext';
import { galleryItems } from '../../data/galleryData';

export default function MonographSection() {
  const { openInspection } = useGallery();
  const bisectSpecimen = galleryItems.find(item => item.id === "004") || galleryItems[3];

  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-24 px-4 sm:px-8 lg:px-12 border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-3 text-secondary font-label-sm text-[10.5px] uppercase tracking-[0.25em] border-b border-outline-variant/30 font-bold">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            01 / Curatorial Monograph
          </span>
          <span>Miniature Spatial Architecture</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Statement & Technical Specs (Cols 1-8) */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tight leading-tight">
              Art, Down to the<br />
              <span className="italic font-serif font-normal text-primary">Smallest Detail.</span>
            </h2>

            <p className="font-body-lg text-lg text-on-surface leading-relaxed max-w-2xl">
              We reject the notion that manicures belong solely within the transient realm of personal grooming. In this pavilion, each nail plate is treated as a ten-point structural canvas. From the mathematical curve of the stress apex to the micro-millimeter precision of negative space bisections, every millimeter reflects deliberate sculptural intent.
            </p>

            {/* Precision Ratios Museum Spec Plate */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {precisionRatios.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <span className="font-label-sm text-[10px] uppercase text-secondary tracking-widest font-bold">
                    {item.label}
                  </span>
                  <p className="font-serif text-3xl text-primary font-bold pt-2">
                    {item.value}
                  </p>
                  <p className="font-body-sm text-xs text-on-surface-variant pt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vitrine Specimen Figure 1.2 (Cols 9-12) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div
              onClick={() => openInspection(bisectSpecimen)}
              className="group cursor-pointer relative aspect-square w-full rounded-3xl overflow-hidden bg-surface-container shadow-lg hover:shadow-2xl transition-all duration-500 border border-white"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="High-fashion macro photography of sheer nude nails with single deep burgundy hairline bisect"
                src={bisectSpecimen.image}
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full atelier-glass text-primary font-label-sm text-[10px] uppercase font-bold shadow-sm">
                Figure 1.2 — Bisect
              </div>
              <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 rounded-full bg-white text-primary font-label-sm text-[10px] uppercase font-bold tracking-widest shadow-xl">
                  Inspect Macro (4.0X)
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-[10px] uppercase tracking-wider px-2">
              <span className="font-bold text-primary">N° 004 Linear Bisect</span>
              <span className="text-secondary font-mono">Minimalist Pavilion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
