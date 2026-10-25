import React, { createContext, useContext, useState, useEffect } from 'react';
import { galleryItems } from '../data/galleryData';
import confetti from 'canvas-confetti';

const GalleryContext = createContext();

export function GalleryProvider({ children }) {
  const [activeView, setActiveView] = useState('grid'); // 'grid' | 'index'
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSilhouettesOpen, setIsSilhouettesOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(galleryItems[0]);
  const [isInspectionOpen, setIsInspectionOpen] = useState(false);
  const [zoomFactor, setZoomFactor] = useState(1.0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedShape, setSelectedShape] = useState('almond');
  const [toastMessage, setToastMessage] = useState(null);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Sync dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const showToast = (message, duration = 3500) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, duration);
  };

  const openInspection = (artwork) => {
    setSelectedArtwork(artwork);
    setZoomFactor(1.0);
    setIsInspectionOpen(true);
  };

  const closeInspection = () => {
    setIsInspectionOpen(false);
  };

  const handleBookingSubmit = (formData) => {
    setBookingConfirmation(formData);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#000000', '#C5A059', '#3D0613', '#E5E5E5']
      });
    } catch (e) {
      // safe fallback
    }
    showToast("Curatorial commission session requested successfully.");
  };

  return (
    <GalleryContext.Provider
      value={{
        activeView,
        setActiveView,
        darkMode,
        setDarkMode,
        toggleDarkMode,
        isMenuOpen,
        setIsMenuOpen,
        isBookingOpen,
        setIsBookingOpen,
        isSilhouettesOpen,
        setIsSilhouettesOpen,
        isInfoOpen,
        setIsInfoOpen,
        selectedArtwork,
        setSelectedArtwork,
        isInspectionOpen,
        setIsInspectionOpen,
        zoomFactor,
        setZoomFactor,
        activeCategory,
        setActiveCategory,
        selectedShape,
        setSelectedShape,
        toastMessage,
        bookingConfirmation,
        setBookingConfirmation,
        hoveredProject,
        setHoveredProject,
        preloaderComplete,
        setPreloaderComplete,
        openInspection,
        closeInspection,
        showToast,
        handleBookingSubmit
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
}
