import React from 'react';

export const nailShapes = [
  {
    id: "almond",
    number: "Shape 01",
    name: "Almond (Amande)",
    subtitle: "Elongating",
    tag: "Elongating",
    description: "Gently tapered along lateral walls toward a softened point. Maximizes perceived slender finger length while retaining tensile strength across stress points.",
    apex: "Apex: Centered 45%",
    force: "Force: Medium",
    recommendedArt: "3D Chrome Drops & High-Luster Glazes",
    svg: (
      <svg className="text-primary" fill="none" height="90" viewBox="0 0 60 90" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 85 C12 50, 16 35, 30 5 C44 35, 48 50, 48 85 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="30" cy="38" fill="currentColor" r="2.5" />
        <line stroke="currentColor" strokeDasharray="2 2" strokeOpacity="0.4" x1="30" x2="30" y1="5" y2="85" />
      </svg>
    )
  },
  {
    id: "square",
    number: "Shape 02",
    name: "Square (Carré)",
    subtitle: "Orthogonal",
    tag: "Orthogonal",
    description: "Sharp 90-degree corners parallel to lateral walls with a flat horizontal free edge. The definitive architecture for French tip geometries.",
    apex: "Apex: Planar 50%",
    force: "Force: High",
    recommendedArt: "Linear Bisect & Geometric Negative Space",
    svg: (
      <svg className="text-primary" fill="none" height="90" viewBox="0 0 60 90" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 85 L15 15 L45 15 L45 85 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="30" cy="45" fill="currentColor" r="2.5" />
        <line stroke="currentColor" strokeWidth="2.5" x1="15" x2="45" y1="15" y2="15" />
      </svg>
    )
  },
  {
    id: "oval",
    number: "Shape 03",
    name: "Oval (Ovale)",
    subtitle: "Classic",
    tag: "Classic",
    description: "Straight parallel side walls culminating in a soft parabolic curve. Naturally follows the contour of the eponychium for effortless elegance.",
    apex: "Apex: Soft Curve 40%",
    force: "Force: Balanced",
    recommendedArt: "Opal Aurora & Sheer Translucent Washes",
    svg: (
      <svg className="text-primary" fill="none" height="90" viewBox="0 0 60 90" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 85 C15 50, 15 30, 30 10 C45 30, 45 50, 45 85 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="30" cy="42" fill="currentColor" r="2.5" />
        <line stroke="currentColor" strokeDasharray="2 2" strokeOpacity="0.4" x1="30" x2="30" y1="10" y2="85" />
      </svg>
    )
  },
  {
    id: "round",
    number: "Shape 04",
    name: "Round (Ronde)",
    subtitle: "Understated",
    tag: "Understated",
    description: "Designed for active hands and natural lengths. Curved free-edge mirrored seamlessly to the fingertip pad, ideal for minimal bisects.",
    apex: "Apex: Low Height 35%",
    force: "Force: Maximum",
    recommendedArt: "Obsidian Lunula & Minimalist Accents",
    svg: (
      <svg className="text-primary" fill="none" height="90" viewBox="0 0 60 90" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 85 C15 55, 15 40, 30 25 C45 40, 45 55, 45 85 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="30" cy="50" fill="currentColor" r="2.5" />
      </svg>
    )
  },
  {
    id: "coffin",
    number: "Shape 05",
    name: "Coffin / Ballerina",
    subtitle: "Editorial",
    tag: "Editorial",
    description: "Dramatically tapered side walls converging on a crisp squared-off blunt tip. Highly favoured for 3D metallic liquid sculptures and ombre glazes.",
    apex: "Apex: Reinforced 50%",
    force: "Force: Moderate",
    recommendedArt: "Vitreous Amber & Ombre Pigments",
    svg: (
      <svg className="text-primary" fill="none" height="90" viewBox="0 0 60 90" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 85 L18 20 L42 20 L46 85 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.75" />
        <line stroke="currentColor" strokeWidth="2.5" x1="22" x2="38" y1="20" y2="20" />
        <circle cx="30" cy="45" fill="currentColor" r="2.5" />
      </svg>
    )
  },
  {
    id: "stiletto",
    number: "Shape 06",
    name: "Stiletto (Stylet)",
    subtitle: "Haute Couture",
    tag: "Haute Couture",
    description: "Extreme taper resolving in a needle-fine focal point. Requires calibrated hard-gel C-curve pinching and structural high-stress reinforcement.",
    apex: "Apex: High Arch 55%",
    force: "Force: Specialized",
    recommendedArt: "Burgundy 24K Gold Inlay & Liquid Chromium",
    svg: (
      <svg className="text-primary" fill="none" height="90" viewBox="0 0 60 90" width="60" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 85 L30 5 L48 85 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="30" cy="35" fill="currentColor" r="2.5" />
        <line stroke="currentColor" strokeDasharray="2 2" strokeOpacity="0.4" x1="30" x2="30" y1="5" y2="85" />
      </svg>
    )
  }
];
