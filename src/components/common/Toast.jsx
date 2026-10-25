import React from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function Toast() {
  const { toastMessage } = useGallery();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 right-6 z-50 pointer-events-none animate-bounce">
      <div className="pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0A0A0A] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#0A0A0A] shadow-2xl border border-white/20 dark:border-black/20 font-mono text-xs uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping"></span>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
