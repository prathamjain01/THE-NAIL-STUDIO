import React, { useState } from 'react';
import { useGallery } from '../../context/GalleryContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToast } = useGallery();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast(`Registered ${email} to Collector Register.`);
    setEmail('');
  };

  return (
    <footer className="w-full bg-surface-container-low py-space-xl mt-space-xl border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-space-lg pb-space-lg border-b border-outline-variant/20">
          {/* Brand & Manifesto */}
          <div className="space-y-space-xs max-w-lg">
            <p className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">
              Permanent Digital Pavilions
            </p>
            <p className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary tracking-tight">
              The Nail Art Gallery
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
              High-fashion manicures and tactile lacquers preserved as contemporary digital sculptures and permanent museum accessions.
            </p>
          </div>

          {/* Coordinates & Newsletter */}
          <div className="flex flex-col sm:flex-row gap-space-lg text-on-surface">
            {/* Coordinates */}
            <div className="space-y-space-xs">
              <p className="font-label-md text-label-md uppercase text-secondary font-semibold">
                Coordinates
              </p>
              <p className="font-body-sm text-body-sm text-on-surface">Paris 48.8566° N, 2.3522° E</p>
              <p className="font-body-sm text-body-sm text-on-surface">Tokyo 35.6762° N, 139.6503° E</p>
              <p className="font-body-sm text-body-sm text-on-surface">New York 40.7128° N, 74.0060° W</p>
            </div>

            {/* Collector Register Form */}
            <div className="space-y-space-xs">
              <p className="font-label-md text-label-md uppercase text-secondary font-semibold">
                Collector Register
              </p>
              <form onSubmit={handleRegister} className="flex items-center gap-space-xs">
                <input
                  type="email"
                  required
                  placeholder="ENTER CURATOR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-surface-container-lowest text-on-surface font-label-sm text-label-sm px-space-md py-2.5 rounded-lg outline-none border border-outline-variant/40 focus:border-primary w-48 sm:w-56"
                />
                <button
                  type="submit"
                  className="bg-primary-container text-on-primary font-label-sm text-label-sm px-space-md py-2.5 rounded-lg hover:bg-primary transition-colors font-bold tracking-wider"
                >
                  REGISTER
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">
          <p>© 2025 THE NAIL ART GALLERY. MONOGRAPH ARCHIVE NO. 09-C.</p>
          <div className="flex items-center gap-space-lg">
            <a href="#field-notes" className="hover:text-primary transition-colors">
              Editorial Monograph
            </a>
            <a href="#reserve-session" className="hover:text-primary transition-colors">
              Vitrine Inquiries
            </a>
            <a href="#gallery" className="hover:text-primary transition-colors">
              Catalog Index
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
