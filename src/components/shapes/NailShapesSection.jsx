import React from 'react';
import { useGallery } from '../../context/GalleryContext';
import { nailShapes } from '../../data/shapesData';
import ShapeCard from './ShapeCard';

export default function NailShapesSection() {
  const { selectedShape, setSelectedShape } = useGallery();
  const currentShape = nailShapes.find(s => s.id === selectedShape) || nailShapes[0];

  return (
    <section className="w-full bg-surface-container py-space-xl px-margin-mobile lg:px-margin" id="shapes">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">
              Architectural Taxonomy
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Every Shape Tells a Story
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              A curated study of the 6 core structural silhouettes. The silhouette defines how force, reflection, and anatomical finger length interlock.
            </p>
          </div>

          {/* Silhouette Mode Indicator */}
          <div className="p-space-sm rounded-xl bg-surface-container-lowest/85 backdrop-blur-md flex items-center gap-space-sm shadow-sm border border-white/60">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
              Anatomical Apex Calibrated
            </span>
          </div>
        </div>

        {/* 6 Architectural Shape Specimen Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {nailShapes.map((shape) => (
            <ShapeCard
              key={shape.id}
              shape={shape}
              isSelected={selectedShape === shape.id}
              onSelect={setSelectedShape}
            />
          ))}
        </div>

        {/* Selected Silhouette Recommendation Capsule */}
        <div className="p-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl border border-white/60 shadow-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">
              <span className="material-symbols-outlined text-[20px]">architecture</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                Curator Pairing for {currentShape.name}
              </p>
              <p className="font-body-md text-body-md font-semibold text-primary">
                Recommended Art: {currentShape.recommendedArt}
              </p>
            </div>
          </div>

          <a
            href="#reserve-session"
            className="inline-flex items-center gap-2 bg-primary text-on-primary font-label-sm text-label-sm uppercase px- space-md py-2.5 px-5 rounded-full hover:bg-primary-container transition-colors shadow-sm"
          >
            <span>Commission with this Silhouette</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
