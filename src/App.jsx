import React from 'react';
import { GalleryProvider, useGallery } from './context/GalleryContext';
import Preloader from './components/davide/Preloader';
import HeaderNav from './components/davide/HeaderNav';
import HeroMasthead from './components/davide/HeroMasthead';
import ProjectGrid from './components/davide/ProjectGrid';
import ProjectIndex from './components/davide/ProjectIndex';
import StickyFooter from './components/davide/StickyFooter';
import MenuOverlay from './components/davide/MenuOverlay';
import SpecimenModal from './components/davide/SpecimenModal';
import BookingModal from './components/davide/BookingModal';
import SilhouettesModal from './components/davide/SilhouettesModal';
import AtelierInfoModal from './components/davide/AtelierInfoModal';
import Toast from './components/common/Toast';

function AppContent() {
  const { activeView } = useGallery();

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FFFFFF] min-h-screen flex flex-col font-sans transition-colors duration-300 selection:bg-[#0A0A0A] selection:text-[#FFFFFF] dark:selection:bg-[#FFFFFF] dark:selection:text-[#0A0A0A]">
      {/* Intro Preloader matching Screenshot 1 */}
      <Preloader />

      {/* Top Header matching Screenshot 2 */}
      <HeaderNav />

      {/* Main Content Arena */}
      <main className="w-full flex-1 flex flex-col">
        {/* Giant Typographic Masthead TNS.DSGN TM matching Screenshot 2 */}
        <HeroMasthead />

        {/* View Mode: GRID (Screenshots 2-5) vs INDEX (Catalog list) */}
        {activeView === 'grid' ? <ProjectGrid /> : <ProjectIndex />}
      </main>

      {/* Sticky Minimal Footer matching Screenshots 3-5 */}
      <StickyFooter />

      {/* Interactive Overlays & Modals */}
      <MenuOverlay />
      <SpecimenModal />
      <BookingModal />
      <SilhouettesModal />
      <AtelierInfoModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <GalleryProvider>
      <AppContent />
    </GalleryProvider>
  );
}
