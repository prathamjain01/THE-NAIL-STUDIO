import React from 'react';
import { fieldNotesMetrics } from '../../data/labData';

export default function FieldNotesSection() {
  return (
    <section className="w-full bg-primary-container text-on-primary py-space-xl px-margin-mobile lg:px-margin" id="field-notes">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Field Notes Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs">
            <div className="inline-flex items-center gap-space-xs text-on-primary-container font-label-sm text-label-sm uppercase tracking-[0.25em]">
              <span className="material-symbols-outlined text-[14px]">science</span>
              <span>Lab Dispatch &amp; Polymer Research</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
              Field Notes
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container max-w-xl">
              A closer look at the details behind the canvas. Scientific precision meets aesthetic curation.
            </p>
          </div>

          <div className="flex items-center gap-space-xs text-on-primary-container font-label-sm text-label-sm uppercase">
            <span>Onyx Biology</span>
            <span>·</span>
            <span>Photopolymer Chemistry</span>
          </div>
        </div>

        {/* Editorial Magazine Metric Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {fieldNotesMetrics.map((metric) => (
            <div
              key={metric.id}
              className="p-space-lg rounded-2xl bg-tertiary-container/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-space-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-tertiary-container font-semibold">
                  {metric.label}
                </span>
                <p className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary font-normal leading-none tracking-tight">
                  {metric.value}
                </p>
                <p className="font-body-sm text-body-sm text-on-primary-container pt-space-xs leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="pt-space-md border-t border-white/10 mt-space-md flex items-center gap-space-xs text-on-tertiary-container font-label-sm text-label-sm uppercase font-semibold">
                <span className="material-symbols-outlined text-[14px]">{metric.icon}</span>
                <span>{metric.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Curatorial Quote Panel */}
        <div className="p-space-xl rounded-2xl bg-primary/50 backdrop-blur-md border border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg shadow-xl">
          <div className="space-y-space-xs max-w-2xl">
            <p className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-on-primary-container font-semibold">
              Archival Note No. 042
            </p>
            <p className="font-headline-md text-headline-md text-on-primary font-serif italic leading-relaxed">
              “When lacquer is applied with micron-level tension, the human hand becomes a living sculpture of kinetic light.”
            </p>
          </div>

          <div className="flex items-center gap-space-md shrink-0">
            <div className="text-right">
              <p className="font-label-md text-label-md uppercase text-on-primary font-semibold">Dr. Estelle Vane</p>
              <p className="font-body-sm text-body-sm text-on-primary-container">Head of Photopolymer Science</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-on-primary border border-white/20 shadow-inner">
              <span className="material-symbols-outlined text-[24px]">biotech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
