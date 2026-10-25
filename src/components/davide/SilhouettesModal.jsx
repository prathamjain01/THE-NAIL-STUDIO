import React from 'react';
import { useGallery } from '../../context/GalleryContext';
import { nailShapes } from '../../data/shapesData';

export default function SilhouettesModal() {
  const { isSilhouettesOpen, setIsSilhouettesOpen, setIsBookingOpen, setSelectedShape } = useGallery();

  if (!isSilhouettesOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] dark:bg-[#0E0E0E] text-[#0A0A0A] dark:text-[#FFFFFF] rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-10 shadow-2xl flex flex-col gap-8">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A] dark:bg-[#FFFFFF] animate-pulse"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
              TAXONOMY 03 — ANATOMICAL SILHOUETTES
            </span>
          </div>

          <button
            onClick={() => setIsSilhouettesOpen(false)}
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
          >
            [CLOSE ✕]
          </button>
        </div>

        {/* Intro Monograph */}
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-tight">
            Every Shape Tells a Story
          </h2>
          <p className="text-sm font-sans text-[#666666] dark:text-[#999999] pt-2 max-w-2xl leading-relaxed">
            The silhouette determines the distribution of stress, the reflection angle of chrome inlays, and the optical elongation of the digit. A study of 6 calibrated apex structures.
          </p>
        </div>

        {/* Grid of 6 Silhouettes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nailShapes.map((shape) => (
            <div
              key={shape.id}
              className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-mono text-[10px] text-[#888888] uppercase tracking-widest">
                    SILHOUETTE 0{shape.id === 'almond' ? 1 : shape.id === 'stiletto' ? 2 : shape.id === 'coffin' ? 3 : shape.id === 'square' ? 4 : shape.id === 'oval' ? 5 : 6}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#C5A059]">
                    {shape.curve}
                  </span>
                </div>
                <h3 className="font-serif text-2xl uppercase tracking-tight pt-2">
                  {shape.name}
                </h3>
                <p className="text-xs font-sans text-[#666666] dark:text-[#999999] pt-2 leading-relaxed">
                  {shape.description}
                </p>
              </div>

              <div className="border-t border-black/10 dark:border-white/10 pt-3 text-[11px] font-mono space-y-1">
                <div className="flex justify-between text-[#888888]">
                  <span>STRESS PROFILE:</span>
                  <span className="text-[#0A0A0A] dark:text-[#FFFFFF]">{shape.stressProfile}</span>
                </div>
                <div className="flex justify-between text-[#888888]">
                  <span>PAIRING:</span>
                  <span className="text-[#0A0A0A] dark:text-[#FFFFFF] truncate max-w-[130px]">
                    {shape.recommendedArt}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSelectedShape(shape.id);
                    setIsSilhouettesOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="w-full mt-3 py-2 bg-black/[0.05] dark:bg-white/[0.08] hover:bg-black/10 font-mono text-[10px] uppercase tracking-wider font-bold rounded"
                >
                  SELECT & COMMISSION →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
