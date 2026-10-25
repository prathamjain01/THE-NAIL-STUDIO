import React from 'react';
import { useGallery } from '../../context/GalleryContext';
import { galleryItems } from '../../data/galleryData';

export default function ProjectGrid() {
  const { openInspection, setIsBookingOpen, setSelectedArtwork } = useGallery();

  const handleCommissionClick = (item, e) => {
    e.stopPropagation();
    setSelectedArtwork(item);
    setIsBookingOpen(true);
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col gap-24 sm:gap-36 pb-32">
      {galleryItems.map((item, index) => {
        // Render different grid layouts matching the reference screenshots
        return (
          <article
            key={item.id}
            onClick={() => openInspection(item)}
            className="group cursor-pointer w-full flex flex-col gap-4 sm:gap-6"
          >
            {/* Visual Media Composition */}
            {item.layout === 'triple' ? (
              // 3-Column layout (Matching Screenshot 5: NEW PRIEST)
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F2F2F2] dark:bg-[#151515]">
                  <img
                    src={item.primaryImage}
                    alt={`${item.title} primary`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F2F2F2] dark:bg-[#151515]">
                  <img
                    src={item.secondaryImage}
                    alt={`${item.title} secondary`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F2F2F2] dark:bg-[#151515]">
                  <img
                    src={item.thirdImage || item.primaryImage}
                    alt={`${item.title} tertiary`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            ) : item.layout === 'dual-wide' ? (
              // Asymmetric wide + portrait layout (Matching Screenshot 2: CHIMERA)
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full items-stretch">
                <div className="lg:col-span-7 aspect-[16/11] w-full overflow-hidden bg-[#F2F2F2] dark:bg-[#151515]">
                  <img
                    src={item.primaryImage}
                    alt={`${item.title} billboard`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="lg:col-span-5 aspect-[4/5] lg:aspect-auto w-full overflow-hidden bg-[#F2F2F2] dark:bg-[#151515]">
                  <img
                    src={item.secondaryImage}
                    alt={`${item.title} portrait`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            ) : (
              // Dual balanced columns (Matching Screenshots 3 & 4: MC.LN, DEJAVU86, HIGH TIDE, F/BRAUN)
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
                <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#F2F2F2] dark:bg-[#151515]">
                  <img
                    src={item.primaryImage}
                    alt={`${item.title} left`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#F2F2F2] dark:bg-[#151515]">
                  <img
                    src={item.secondaryImage}
                    alt={`${item.title} right`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            )}

            {/* Project Metadata Caption Row (Matching Screenshots 2-5: Title left, Coordinates center, Action right) */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#0A0A0A] dark:text-[#FFFFFF]">
              {/* Left: Project Title */}
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#0A0A0A] dark:text-[#FFFFFF] group-hover:underline underline-offset-4">
                  {item.title}
                </span>
                <span className="text-[#888888] font-normal hidden sm:inline">
                  — {item.specimenName}
                </span>
              </div>

              {/* Center: Geographic Coordinates */}
              <div className="text-[#666666] dark:text-[#999999]">
                <span>{item.coordinates}</span>
                <span className="ml-2 text-[#999999] dark:text-[#666666] hidden md:inline">
                  [{item.city}]
                </span>
              </div>

              {/* Right: Commission / Inspect Action */}
              <div className="flex items-center gap-4 text-right">
                <button
                  type="button"
                  onClick={(e) => handleCommissionClick(item, e)}
                  className="text-[#888888] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] transition-colors font-medium underline underline-offset-2"
                >
                  COMMISSION
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
