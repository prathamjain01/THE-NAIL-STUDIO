import React, { useState } from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function MacroInspectionModal() {
  const { isInspectionOpen, closeInspection, selectedArtwork, zoomFactor, setZoomFactor, setSelectedShape } = useGallery();
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  if (!isInspectionOpen || !selectedArtwork) return null;

  const handleMouseMove = (e) => {
    if (zoomFactor <= 1.0) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handleCommissionClick = () => {
    closeInspection();
    // Pre-match silhouette if indicated in notes/apex
    if (selectedArtwork.apex.toLowerCase().includes('almond')) setSelectedShape('almond');
    if (selectedArtwork.apex.toLowerCase().includes('square')) setSelectedShape('square');
    if (selectedArtwork.apex.toLowerCase().includes('stiletto')) setSelectedShape('stiletto');
    if (selectedArtwork.apex.toLowerCase().includes('round')) setSelectedShape('round');
    if (selectedArtwork.apex.toLowerCase().includes('coffin')) setSelectedShape('coffin');
    if (selectedArtwork.apex.toLowerCase().includes('oval')) setSelectedShape('oval');

    // Smooth scroll to reserve session
    const el = document.getElementById('reserve-session');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-inverse-surface/65 backdrop-blur-xl animate-fadeIn"
      onClick={closeInspection}
    >
      {/* Modal Card (Floating Glass Case Level 2) */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-surface-container-lowest/95 backdrop-blur-2xl shadow-2xl p-space-lg lg:p-space-xl flex flex-col gap-space-lg border border-white/60 text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar: Title & Close */}
        <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
          <div className="flex items-center gap-space-xs">
            <span className="px-space-sm py-1 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm uppercase font-bold">
              Curatorial Loupe
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
              {selectedArtwork.accession || 'Cat. 2025-V1'}
            </span>
          </div>

          <button
            onClick={closeInspection}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors border border-outline-variant/30"
            aria-label="Close Inspection Lightbox"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Main Visual & Inspection Stage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center">
          {/* Zoom Frame (Cols 1-7) */}
          <div
            className="md:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container shadow-inner border border-outline-variant/30 cursor-crosshair group"
            onMouseMove={handleMouseMove}
          >
            <img
              id="modal-image"
              className="w-full h-full object-cover transition-transform duration-200 ease-out"
              style={{
                transform: `scale(${zoomFactor})`,
                transformOrigin: zoomFactor > 1 ? `${mousePos.x}% ${mousePos.y}%` : 'center center'
              }}
              alt={selectedArtwork.title}
              src={selectedArtwork.loupeImage || selectedArtwork.image}
            />

            {/* Optical Zoom Floating Chips */}
            <div className="absolute bottom-space-sm left-space-sm flex items-center gap-1.5 p-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-md border border-white/40">
              <button
                className={`zoom-btn px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold transition-all ${zoomFactor === 1.0
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'text-on-surface hover:bg-surface-container'
                  }`}
                onClick={() => setZoomFactor(1.0)}
              >
                1.0X
              </button>
              <button
                className={`zoom-btn px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold transition-all ${zoomFactor === 1.8
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'text-on-surface hover:bg-surface-container'
                  }`}
                onClick={() => setZoomFactor(1.8)}
              >
                2.0X
              </button>
              <button
                className={`zoom-btn px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold transition-all ${zoomFactor === 2.8
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'text-on-surface hover:bg-surface-container'
                  }`}
                onClick={() => setZoomFactor(2.8)}
              >
                4.0X
              </button>
            </div>

            {/* Badge */}
            <div className="absolute top-space-sm right-space-sm px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-on-primary font-label-sm text-label-sm font-bold shadow-md">
              {zoomFactor > 1 ? `${zoomFactor === 1.8 ? '2.0X' : '4.0X'} Macro Zoom` : '4.0X Detail Loupe'}
            </div>
          </div>

          {/* Specimen Metadata & Curatorial Notes (Cols 8-12) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-xs">
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                {selectedArtwork.tag || selectedArtwork.categoryLabel}
              </p>
              <h4 className="font-headline-md text-headline-md text-primary font-bold">
                {selectedArtwork.title}
              </h4>
              <p className="font-body-sm text-body-sm font-semibold text-on-surface">
                {selectedArtwork.subtitle}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
                {selectedArtwork.notes}
              </p>
            </div>

            {/* Technical Vitrine Spec */}
            <div className="space-y-space-xs p-space-sm rounded-xl bg-surface-container-low text-on-surface font-label-sm text-label-sm border border-outline-variant/20">
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span className="text-secondary uppercase">Apex Profile:</span>
                <span className="font-semibold text-primary">{selectedArtwork.apex}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span className="text-secondary uppercase">Preservation:</span>
                <span className="font-semibold">Glass Claret Enamel</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-secondary uppercase">Status:</span>
                <span className="text-primary font-bold">Available for Atelier Session</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-space-xs">
              <button
                onClick={handleCommissionClick}
                className="w-full inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md uppercase py-3.5 rounded-xl hover:bg-primary-container transition-all font-bold shadow-md transform hover:-translate-y-0.5"
              >
                <span>Commission Set</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
