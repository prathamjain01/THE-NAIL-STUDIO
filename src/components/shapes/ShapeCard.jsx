import React from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function ShapeCard({ shape, isSelected, onSelect }) {
  const { showToast } = useGallery();

  const handleSelect = () => {
    onSelect(shape.id);
    showToast(`Anatomical Silhouette Selected: ${shape.name}`);
  };

  return (
    <div
      onClick={handleSelect}
      className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${isSelected
          ? 'bg-white ring-2 ring-primary shadow-xl scale-[1.02] border-primary/40'
          : 'bg-white/85 backdrop-blur-md shadow-sm hover:shadow-lg border-white hover:-translate-y-1'
        }`}
    >
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-[10px] uppercase tracking-widest text-secondary font-bold font-mono">
            {shape.number}
          </span>
          <span
            className={`px-3 py-1 rounded-full font-label-sm text-[10px] uppercase font-bold tracking-wider ${isSelected
                ? 'bg-primary text-white shadow-sm'
                : 'bg-secondary-container text-primary'
              }`}
          >
            {shape.subtitle}
          </span>
        </div>

        {/* Anatomical Silhouette Graphic */}
        <div className="w-full h-32 flex items-center justify-center bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20 transition-colors">
          <div className={`transition-transform duration-500 ${isSelected ? 'scale-110 drop-shadow-md' : 'group-hover:scale-105'}`}>
            {shape.svg}
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="font-serif text-2xl text-primary font-bold flex items-center justify-between">
            <span>{shape.name}</span>
            {isSelected && (
              <span className="material-symbols-outlined text-[20px] text-primary">verified</span>
            )}
          </h3>
          <p className="font-body-sm text-xs text-on-surface-variant pt-2 leading-relaxed">
            {shape.description}
          </p>
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="pt-4 mt-4 border-t border-outline-variant/30 flex items-center justify-between text-secondary font-label-sm text-[10px] uppercase font-bold tracking-wider">
        <span className="text-primary">{shape.apex}</span>
        <span>{shape.force}</span>
      </div>
    </div>
  );
}
