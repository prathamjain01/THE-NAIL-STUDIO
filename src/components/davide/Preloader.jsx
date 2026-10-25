import React, { useState, useEffect, useRef } from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function Preloader() {
  const { preloaderComplete, setPreloaderComplete } = useGallery();
  const [percent, setPercent] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (preloaderComplete) return;

    // Luxurious smooth animation using requestAnimationFrame
    const duration = 2100; // 2.1 seconds for ultra-smooth easing

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth custom cubic easing (accelerates then settles smoothly)
      // cubic-bezier approximation for luxury feel
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentPercent = Math.min(100, Math.floor(ease * 100));
      setPercent(currentPercent);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setPercent(100);
        // Brief pause at 100% then slide smoothly from bottom to top
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setPreloaderComplete(true);
          }, 950); // Matches the translateY transition duration
        }, 220);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [preloaderComplete, setPreloaderComplete]);

  // Click to immediately trigger the smooth bottom-to-top exit
  const handleSkip = () => {
    if (isExiting) return;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setPercent(100);
    setIsExiting(true);
    setTimeout(() => {
      setPreloaderComplete(true);
    }, 950);
  };

  if (preloaderComplete) return null;

  return (
    <div
      onClick={handleSkip}
      style={{
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0%)',
        transition: 'transform 950ms cubic-bezier(0.85, 0, 0.15, 1)'
      }}
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-6 sm:p-12 lg:p-16 bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FFFFFF] cursor-pointer select-none will-change-transform ${
        isExiting ? 'pointer-events-none' : ''
      }`}
    >
      {/* Top Header Label */}
      <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#888888]">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A] dark:bg-[#FFFFFF] animate-pulse"></span>
          THE NAIL STUDIO
        </span>
        <span>ATELIER ARCHIVE · 2025</span>
      </div>

      {/* Center Percentage Display (Matching Screenshot 1) */}
      <div className="flex flex-col items-center justify-center my-auto">
        <span className="font-mono text-base sm:text-lg tracking-[0.25em] text-[#0A0A0A] dark:text-[#FFFFFF] tabular-nums font-semibold">
          {String(percent).padStart(2, '0')}%
        </span>
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#888888] pt-2 uppercase">
          CALIBRATING SPECIMENS
        </span>
      </div>

      {/* Giant Typography Emerging from Bottom (Matching Screenshot 1 DB.DSGN) */}
      <div className="w-full overflow-hidden leading-none pt-4">
        <h1
          className="font-serif text-[18vw] sm:text-[19vw] leading-[0.78] tracking-[-0.04em] font-normal uppercase text-[#0A0A0A] dark:text-[#FFFFFF] will-change-transform"
          style={{
            transform: `translateY(${Math.max(0, 100 - percent)}%)`,
            transition: 'transform 60ms linear'
          }}
        >
          TNS.DSGN
        </h1>
      </div>
    </div>
  );
}
