import React from 'react';
import { useGallery } from '../../context/GalleryContext';
import { galleryItems } from '../../data/galleryData';

export default function ResponsivePreviewSection() {
  const { openInspection } = useGallery();
  const mobilePreviewSpecimen = galleryItems.find(item => item.id === "003") || galleryItems[0];

  return (
    <section className="w-full bg-surface-container-high py-space-xl px-margin-mobile lg:px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Section Intro */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-[0.25em] border-b border-outline-variant/30 pb-space-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            03 / Multi-Device Spec
          </span>
          <span>Adaptive Touch Architecture</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Explanatory Text */}
          <div className="lg:col-span-6 space-y-space-sm">
            <h3 className="font-headline-md text-headline-md text-primary font-bold leading-tight">
              Engineered for Tactile Precision Across Form Factors
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              On handheld viewports, our floating Apple glass navigation bar collapses into an ultra-compact single pill bar, while gallery cards transition into seamless full-bleed snap carousels with edge-to-edge optical loupe inspection gestures.
            </p>

            <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
              <div className="p-space-sm rounded-xl bg-surface-container-lowest/80 backdrop-blur-md border border-white/50 shadow-sm">
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">Mobile Nav</span>
                <p className="font-body-sm text-body-sm font-semibold text-primary pt-0.5">Frosted Capsule Bar</p>
              </div>

              <div className="p-space-sm rounded-xl bg-surface-container-lowest/80 backdrop-blur-md border border-white/50 shadow-sm">
                <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">Gestures</span>
                <p className="font-body-sm text-body-sm font-semibold text-primary pt-0.5">Pinch-to-Inspect 4.0X</p>
              </div>
            </div>
          </div>

          {/* Visual Mobile Simulator Mock */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-72 rounded-[36px] p-2.5 bg-inverse-surface shadow-2xl border-4 border-outline-variant/30 transform hover:scale-[1.02] transition-transform duration-300">
              {/* Simulated Glass Screen */}
              <div className="w-full rounded-[28px] overflow-hidden bg-surface flex flex-col shadow-inner">
                {/* Mobile Bar */}
                <div className="px-4 py-2.5 bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between border-b border-outline-variant/20">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">NAG / 001</span>
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                </div>

                {/* Mobile Hero Preview */}
                <div className="p-4 space-y-2.5 bg-surface">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">Exhibition</span>
                  <p className="font-headline-sm text-headline-sm text-primary leading-tight font-bold">
                    Your Hands.<br />
                    <span className="italic font-normal">Your Canvas.</span>
                  </p>

                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container shadow-md relative group">
                    <img
                      className="w-full h-full object-cover"
                      alt="Miniature mobile format close-up of glossy deep claret red manicure with gold accents"
                      src={mobilePreviewSpecimen.image}
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[24px]">loupe</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">N° 003 BURGUNDY</span>
                    <button
                      onClick={() => openInspection(mobilePreviewSpecimen)}
                      className="font-label-sm text-label-sm text-primary font-bold uppercase hover:underline flex items-center gap-1 bg-secondary-container/60 px-2.5 py-1 rounded-full"
                    >
                      <span>INSPECT</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
