import React from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function SpecimenModal() {
  const {
    isInspectionOpen,
    closeInspection,
    selectedArtwork,
    zoomFactor,
    setZoomFactor,
    setIsBookingOpen
  } = useGallery();

  if (!isInspectionOpen || !selectedArtwork) return null;

  const handleOpenBooking = () => {
    closeInspection();
    setIsBookingOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#FFFFFF] dark:bg-[#0E0E0E] text-[#0A0A0A] dark:text-[#FFFFFF] rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col p-6 sm:p-10 gap-8">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A] dark:bg-[#FFFFFF] animate-pulse"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
              ACCESSION {selectedArtwork.accession || selectedArtwork.number} — {selectedArtwork.title}
            </span>
          </div>

          <button
            onClick={closeInspection}
            className="font-mono text-xs font-bold uppercase tracking-[0.2em] hover:opacity-60 transition-opacity"
          >
            [CLOSE ✕]
          </button>
        </div>

        {/* Media & Loupe Zoom Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Photo Showcase */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F2F2F2] dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5">
              <img
                src={selectedArtwork.primaryImage}
                alt={selectedArtwork.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{ transform: `scale(${zoomFactor})` }}
              />

              {/* Loupe Factor Controls */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-mono">
                <button
                  onClick={() => setZoomFactor((z) => Math.max(1.0, z - 0.5))}
                  className="px-2 py-0.5 hover:bg-white/20 rounded"
                >
                  -
                </button>
                <span>{zoomFactor.toFixed(1)}X LOUPE</span>
                <button
                  onClick={() => setZoomFactor((z) => Math.min(4.0, z + 0.5))}
                  className="px-2 py-0.5 hover:bg-white/20 rounded"
                >
                  +
                </button>
              </div>
            </div>

            {/* Thumbnail Pair Strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[16/10] rounded-lg overflow-hidden bg-[#F2F2F2] dark:bg-[#1A1A1A]">
                <img
                  src={selectedArtwork.secondaryImage || selectedArtwork.primaryImage}
                  alt="Detail crop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] text-[11px] font-mono uppercase tracking-wider flex flex-col justify-between">
                <div>
                  <span className="text-[#888888]">COORDINATES</span>
                  <p className="font-bold pt-1">{selectedArtwork.coordinates}</p>
                </div>
                <div>
                  <span className="text-[#888888]">LOCATION</span>
                  <p className="font-bold pt-1">{selectedArtwork.city} Atelier</p>
                </div>
              </div>
            </div>
          </div>

          {/* Curatorial Monograph & Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888888]">
                  {selectedArtwork.discipline}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-tight pt-1">
                  {selectedArtwork.title}
                </h2>
                <p className="font-mono text-xs text-[#888888] pt-1">
                  {selectedArtwork.specimenName} — {selectedArtwork.subtitle}
                </p>
              </div>

              <p className="text-sm font-sans text-[#444444] dark:text-[#CCCCCC] leading-relaxed pt-2">
                {selectedArtwork.notes}
              </p>

              {/* Technical Spec Box */}
              <div className="border-t border-b border-black/10 dark:border-white/10 py-4 space-y-2 text-xs font-mono uppercase tracking-wider">
                <div className="flex justify-between">
                  <span className="text-[#888888]">ANATOMICAL APEX:</span>
                  <span className="font-bold">{selectedArtwork.silhouette || selectedArtwork.apex}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888888]">CURING CHEMISTRY:</span>
                  <span className="font-bold">365+405nm LED Quartz Matrix</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888888]">EDITION / ARCHIVE:</span>
                  <span className="font-bold">{selectedArtwork.edition}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleOpenBooking}
              className="w-full py-4 bg-[#0A0A0A] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#0A0A0A] font-mono text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:opacity-85 transition-opacity shadow-lg"
            >
              COMMISSION THIS SPECIMEN →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
