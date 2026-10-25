import React from 'react';
import { useGallery } from '../../context/GalleryContext';
import { galleryItems } from '../../data/galleryData';

export default function HeroSection() {
  const { openInspection } = useGallery();
  const featuredSpecimen = galleryItems.find(item => item.id === "003") || galleryItems[0];

  return (
    <section className="relative w-full min-h-[94vh] flex flex-col justify-between -mt-20 pt-28 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-surface museum-grain">
      {/* Editorial Monograph Top Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2 text-on-surface-variant font-label-sm text-[10px] uppercase tracking-[0.22em] border-b border-outline-variant/30 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          <span className="font-semibold text-primary">An Exhibition of Nail Artistry</span>
        </div>
        <div className="flex items-center gap-4 text-secondary">
          <span>Vol. 001 — Studies in Form</span>
          <span className="text-outline/40">/</span>
          <span>Permanent Collection</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-secondary font-mono">
          <span>Paris 48.85°N</span>
          <span>·</span>
          <span>Tokyo 35.67°N</span>
          <span>·</span>
          <span>NYC 40.71°N</span>
        </div>
      </div>

      {/* Hero Asymmetric Center Spread */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8 lg:py-12">
        {/* Typographic Lead (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/90 border border-outline-variant/30 self-start text-primary font-label-sm text-[10px] tracking-[0.2em] uppercase font-bold">
            <span className="material-symbols-outlined text-[13px] text-gold">auto_awesome</span>
            <span>Pavilion Monograph No. 001</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-primary leading-[0.94] tracking-tight font-normal">
            Your Hands.<br />
            <span className="italic font-serif font-normal text-primary">Your Canvas.</span>
          </h1>

          <p className="font-body-lg text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Nail artistry deconstructed as contemporary tactile sculpture. Where high-fashion lacquer formulation, architectural apex balance, and liquid metals converge on human anatomy.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 bg-primary text-white font-label-md text-xs uppercase tracking-[0.16em] px-7 py-4 rounded-xl shadow-md hover:bg-primary-container transition-all transform hover:-translate-y-0.5 font-bold"
            >
              <span>Explore The Vitrine</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>

            <button
              onClick={() => openInspection(featuredSpecimen)}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-primary font-label-md text-xs uppercase tracking-[0.16em] px-6 py-4 rounded-xl border border-outline-variant/60 shadow-sm hover:border-primary hover:bg-white transition-all transform hover:-translate-y-0.5 font-bold"
            >
              <span className="material-symbols-outlined text-[18px] text-gold">loupe</span>
              <span>Launch Macro Loupe (4.0X)</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Vitrine (Cols 8-12) */}
        <div className="lg:col-span-5 relative group">
          <div
            onClick={() => openInspection(featuredSpecimen)}
            className="cursor-pointer relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container shadow-2xl transition-all duration-700 group-hover:shadow-[0_25px_60px_-15px_rgba(61,6,19,0.3)] border border-white/80"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              alt="High-fashion close-up macro manicure in deep claret burgundy lacquer with 24-karat gold leaf"
              src={featuredSpecimen.image}
            />

            {/* Specular Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent pointer-events-none"></div>

            {/* Floating Vitrine Plaque */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl atelier-glass shadow-lg flex items-center justify-between border border-white/70">
              <div className="flex flex-col">
                <span className="font-label-sm text-[9.5px] uppercase tracking-[0.2em] text-secondary font-bold">
                  Specimen Accession
                </span>
                <span className="font-serif text-lg font-bold text-primary">
                  N° 003 — Burgundy 24K Inlay
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container text-primary font-label-sm text-[10px] font-bold">
                <span className="material-symbols-outlined text-[14px]">visibility</span>
                <span>Curated Work</span>
              </div>
            </div>
          </div>

          {/* Floating Metric Badge */}
          <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-primary shadow-inner">
              <span className="material-symbols-outlined text-[20px] text-primary">brush</span>
            </div>
            <div className="pr-2">
              <p className="font-label-sm text-[9.5px] uppercase tracking-wider text-secondary font-bold">Material Formulation</p>
              <p className="font-body-sm text-xs font-bold text-on-surface">Pure Claret + 24K Gilded Leaf</p>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Ticker / Coordinates Footer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 pt-4 text-on-surface-variant font-label-sm text-[10px] uppercase tracking-[0.2em] border-t border-outline-variant/30">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-primary">Curatorial Direction: Studio No. 9</span>
          <span className="text-outline/40">•</span>
          <span>Aesthete-Grade Photopolymer Monomers</span>
        </div>
        <a
          href="#shapes"
          className="flex items-center gap-1.5 text-primary hover:text-gold transition-colors font-bold group"
        >
          <span>Index of 6 Anatomical Silhouettes</span>
          <span className="material-symbols-outlined text-[15px] group-hover:translate-y-0.5 transition-transform">south</span>
        </a>
      </div>
    </section>
  );
}
