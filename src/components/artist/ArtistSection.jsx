import React from 'react';
import { artistDisciplines } from '../../data/labData';

export default function ArtistSection() {
  return (
    <section className="w-full bg-surface py-space-xl px-margin-mobile lg:px-margin" id="the-artist">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Tag */}
        <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm uppercase tracking-[0.25em] border-b border-outline-variant/30 pb-space-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            02 / Creative Direction
          </span>
          <span>Atelier Monograph</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Visual Anchor: Artist Portrait/Studio Composition (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container shadow-2xl border border-outline-variant/40">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="High-fashion black and white editorial portrait of Sora Chen-Lemaire"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZhXLClkC7PqsN5zqNSCmAyhZStsDjgzTk_Jw5JYGXJ6VcEGxYw6RkxrATt6H-eKXQvKdwgzYPbc0nQdW-B3Jhhe1hJngvvQ8AG8p3zIr_BKV2pJL1mCIIfVBxhfOPxzjZpiETbKOwUaAw_U-se7mr1nmk9A_Zno7cJg21lgdi3aFM6N3fLWacCljqbcFIDC1urhmAEysAL8DomxIGEYqnzMZgJD87GNeKEcBjbYNup-ONcS21jq8"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>

              {/* Plaque info */}
              <div className="absolute bottom-space-md left-space-md right-space-md p-space-md rounded-xl bg-surface-container-lowest/90 backdrop-blur-xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <p className="font-label-sm text-label-sm uppercase text-secondary font-semibold">
                    Founder &amp; Principal Sculptor
                  </p>
                  <p className="font-body-md text-body-md font-bold text-primary">
                    Sora Chen-Lemaire
                  </p>
                </div>
                <span className="font-label-sm text-label-sm uppercase px-3 py-1 rounded-full bg-secondary-container text-primary font-bold">
                  Paris / Tokyo
                </span>
              </div>
            </div>
          </div>

          {/* Monograph & Artistic Philosophy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-secondary-container/70 self-start text-primary font-label-sm text-label-sm tracking-[0.2em] uppercase border border-outline-variant/30">
              <span className="material-symbols-outlined text-[14px]">brush</span>
              <span>Behind The Canvas</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight leading-snug">
              “Every fingertip is an intimate gallery plinth.”
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Trained in fine metal jewelry fabrication in Kyoto and French couture manicure technique at Place Vendôme, Sora Chen-Lemaire established The Nail Art Gallery as a permanent home for high-craft digital and tactile manicures.
            </p>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Her philosophy treats the anatomical nail plate not as a flat surface to paint, but as an architectural volume with curves, reflective planes, and kinetic expression. Her commissions are exhibited in international art monographs, fashion week runway presentations, and bespoke private collector sets.
            </p>

            {/* Specialty Badges Grid */}
            <div className="pt-space-sm space-y-space-xs">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                Master Disciplines
              </p>
              <div className="flex flex-wrap gap-space-xs">
                {artistDisciplines.map((discipline, idx) => (
                  <span
                    key={idx}
                    className="px-space-md py-1.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase font-semibold border border-outline-variant/30 hover:bg-primary hover:text-on-primary transition-all cursor-default"
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
