import React, { useState, useEffect } from 'react';
import { useGallery } from '../../context/GalleryContext';
import { galleryItems, galleryCategories } from '../../data/galleryData';

export default function ProjectIndex() {
  const { openInspection, setIsBookingOpen, setSelectedArtwork } = useGallery();
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleCommissionClick = (item, e) => {
    e.stopPropagation();
    setSelectedArtwork(item);
    setIsBookingOpen(true);
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 pb-32">
      {/* Category Filter Pills / Links */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-8 pb-8 sm:pb-12 border-b border-black/10 dark:border-white/10 text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em]">
        <span className="text-[#888888] font-bold">FILTER:</span>
        {galleryCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`transition-colors py-1 ${
              activeCategory === cat.id
                ? 'text-[#0A0A0A] dark:text-[#FFFFFF] font-bold underline underline-offset-4'
                : 'text-[#888888] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Index Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-black/10 dark:border-white/10 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#888888]">
              <th className="py-4 font-normal">INDEX</th>
              <th className="py-4 font-normal">PROJECT / SPECIMEN</th>
              <th className="py-4 font-normal hidden md:table-cell">DISCIPLINE</th>
              <th className="py-4 font-normal hidden lg:table-cell">SILHOUETTE</th>
              <th className="py-4 font-normal hidden sm:table-cell">EDITION</th>
              <th className="py-4 font-normal hidden xl:table-cell">COORDINATES</th>
              <th className="py-4 font-normal text-right">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr
                key={item.id}
                onClick={() => openInspection(item)}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group cursor-pointer border-b border-black/5 dark:border-white/5 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors text-xs sm:text-sm font-mono tracking-[0.1em]"
              >
                <td className="py-5 sm:py-6 text-[#888888] font-mono text-[11px]">
                  {item.number}
                </td>
                <td className="py-5 sm:py-6 text-[#0A0A0A] dark:text-[#FFFFFF]">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="font-bold uppercase group-hover:underline underline-offset-4">
                      {item.title}
                    </span>
                    <span className="text-[#888888] text-[11px] font-normal">
                      {item.specimenName}
                    </span>
                  </div>
                </td>
                <td className="py-5 sm:py-6 text-[#666666] dark:text-[#999999] uppercase text-xs hidden md:table-cell">
                  {item.discipline}
                </td>
                <td className="py-5 sm:py-6 text-[#666666] dark:text-[#999999] uppercase text-xs hidden lg:table-cell">
                  {item.silhouette}
                </td>
                <td className="py-5 sm:py-6 text-[#888888] text-xs hidden sm:table-cell">
                  {item.edition}
                </td>
                <td className="py-5 sm:py-6 text-[#666666] dark:text-[#999999] text-xs hidden xl:table-cell">
                  {item.coordinates}
                </td>
                <td className="py-5 sm:py-6 text-right">
                  <div className="flex items-center justify-end gap-3 text-xs">
                    <button
                      type="button"
                      onClick={(e) => handleCommissionClick(item, e)}
                      className="text-[#888888] hover:text-[#0A0A0A] dark:hover:text-[#FFFFFF] uppercase underline underline-offset-2"
                    >
                      COMMISSION
                    </button>
                    <span className="text-[#888888] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floating Image Preview on Hover (Award-Winning Portfolio Signature) */}
      {hoveredItem && (
        <div
          className="fixed pointer-events-none z-50 w-72 sm:w-80 aspect-[16/11] rounded-lg overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-[#0A0A0A] transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x + 24}px`,
            top: `${mousePos.y - 80}px`
          }}
        >
          <img
            src={hoveredItem.primaryImage}
            alt={hoveredItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-[11px] font-mono uppercase tracking-wider flex justify-between">
            <span>{hoveredItem.title}</span>
            <span>{hoveredItem.coordinates}</span>
          </div>
        </div>
      )}
    </div>
  );
}
