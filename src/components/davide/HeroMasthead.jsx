import React from 'react';

export default function HeroMasthead() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 pt-4 sm:pt-8 pb-12 sm:pb-20 select-none overflow-hidden">
      <div className="w-full">
        {/* Massive Typographic Masthead matching Screenshot 2 DB.DSGN TM */}
        <h1 className="font-serif text-[17vw] sm:text-[17.5vw] font-normal leading-[0.82] tracking-[-0.04em] uppercase text-[#0A0A0A] dark:text-[#FFFFFF] m-0 p-0 flex items-baseline">
          <span>TNS.DSGN</span>
          <span className="font-serif text-[4vw] font-light tracking-normal ml-1 sm:ml-3 translate-y-[-2vw]">
            ™
          </span>
        </h1>
      </div>
    </section>
  );
}
