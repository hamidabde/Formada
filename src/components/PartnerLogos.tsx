import React from 'react';

export function Um6pLogo({ className = "h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 380 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 4 Red Rounded Blocks */}
      <rect x="0" y="10" width="48" height="68" rx="5" fill="#E42618" />
      <text x="24" y="60" fill="#FFFFFF" fontSize="46" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">U</text>
      
      <rect x="54" y="10" width="48" height="68" rx="5" fill="#E42618" />
      <text x="78" y="60" fill="#FFFFFF" fontSize="46" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">M</text>
      
      <rect x="108" y="10" width="48" height="68" rx="5" fill="#E42618" />
      <text x="132" y="60" fill="#FFFFFF" fontSize="46" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">6</text>
      
      <rect x="162" y="10" width="48" height="68" rx="5" fill="#E42618" />
      <text x="186" y="60" fill="#FFFFFF" fontSize="46" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle">P</text>
      
      {/* Right side text */}
      <text x="228" y="32" fill="#1F2937" fontSize="23" fontWeight="500" fontFamily="Arial, Helvetica, sans-serif">University</text>
      <text x="228" y="55" fill="#1F2937" fontSize="23" fontWeight="500" fontFamily="Arial, Helvetica, sans-serif">Mohammed VI</text>
      <text x="228" y="78" fill="#1F2937" fontSize="23" fontWeight="500" fontFamily="Arial, Helvetica, sans-serif">Polytechnic</text>
    </svg>
  );
}

export function OcpLogo({ className = "h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="ocpOfficialGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2BB642" />
          <stop offset="50%" stopColor="#1C9C38" />
          <stop offset="100%" stopColor="#0E7828" />
        </linearGradient>
        <linearGradient id="ocpStarLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3BD854" />
          <stop offset="100%" stopColor="#1EA13B" />
        </linearGradient>
        <linearGradient id="ocpStarDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#0B5226" />
        </linearGradient>
      </defs>

      {/* Left Emblem */}
      <g transform="translate(12, 4)">
        {/* Wreath - Outer Wheat Leaves */}
        <path
          d="M 44 8 C 24 18 12 36 12 52 C 12 68 24 86 44 94 C 32 82 22 66 22 52 C 22 38 32 22 44 8 Z"
          fill="url(#ocpOfficialGreen)"
        />
        <path
          d="M 58 8 C 78 18 90 36 90 52 C 90 68 78 86 58 94 C 70 82 80 66 80 52 C 80 38 70 22 58 8 Z"
          fill="url(#ocpOfficialGreen)"
        />

        {/* Individual Wheat Grains - Left */}
        <path d="M 32 22 C 20 30 22 44 28 50 C 22 42 22 32 32 22 Z" fill="url(#ocpOfficialGreen)" />
        <path d="M 36 78 C 24 68 24 54 30 48 C 24 56 24 68 36 78 Z" fill="url(#ocpOfficialGreen)" />
        <path d="M 42 12 C 34 18 28 26 26 34 C 32 28 38 22 42 12 Z" fill="url(#ocpOfficialGreen)" />
        <path d="M 42 90 C 34 84 28 76 26 68 C 32 74 38 80 42 90 Z" fill="url(#ocpOfficialGreen)" />

        {/* Individual Wheat Grains - Right */}
        <path d="M 70 22 C 82 30 80 44 74 50 C 80 42 80 32 70 22 Z" fill="url(#ocpOfficialGreen)" />
        <path d="M 66 78 C 78 68 78 54 72 48 C 78 56 78 68 66 78 Z" fill="url(#ocpOfficialGreen)" />
        <path d="M 60 12 C 68 18 74 26 76 34 C 70 28 64 22 60 12 Z" fill="url(#ocpOfficialGreen)" />
        <path d="M 60 90 C 68 84 74 76 76 68 C 70 74 64 80 60 90 Z" fill="url(#ocpOfficialGreen)" />

        {/* 5-pointed Faceted Star */}
        <g transform="translate(51, 51)">
          {/* Top Point */}
          <polygon points="0,0 0,-26 8,-11" fill="url(#ocpStarLight)" />
          <polygon points="0,0 0,-26 -8,-11" fill="url(#ocpStarDark)" />
          {/* Right Point */}
          <polygon points="0,0 25,-8 11,4" fill="url(#ocpStarLight)" />
          <polygon points="0,0 25,-8 11,-13" fill="url(#ocpStarDark)" />
          {/* Bottom-Right Point */}
          <polygon points="0,0 15,22 2,12" fill="url(#ocpStarLight)" />
          <polygon points="0,0 15,22 13,3" fill="url(#ocpStarDark)" />
          {/* Bottom-Left Point */}
          <polygon points="0,0 -15,22 -13,3" fill="url(#ocpStarLight)" />
          <polygon points="0,0 -15,22 -2,12" fill="url(#ocpStarDark)" />
          {/* Left Point */}
          <polygon points="0,0 -25,-8 -11,-13" fill="url(#ocpStarLight)" />
          <polygon points="0,0 -25,-8 -11,4" fill="url(#ocpStarDark)" />
        </g>
      </g>

      {/* OCP Text */}
      <text
        x="126"
        y="72"
        fill="url(#ocpOfficialGreen)"
        fontSize="76"
        fontWeight="900"
        fontFamily="Arial, 'Helvetica Neue', Helvetica, sans-serif"
        letterSpacing="1"
      >
        OCP
      </text>
    </svg>
  );
}

export function AzuraLogo({ className = "h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sun rays & center */}
      <circle cx="28" cy="48" r="9" fill="#FFB800" />
      <g stroke="#FFB800" strokeWidth="3" strokeLinecap="round">
        <line x1="14" y1="48" x2="6" y2="48" />
        <line x1="42" y1="48" x2="50" y2="48" />
        <line x1="28" y1="34" x2="28" y2="26" />
        <line x1="28" y1="62" x2="28" y2="70" />
        <line x1="18" y1="38" x2="12" y2="32" />
        <line x1="38" y1="58" x2="44" y2="64" />
        <line x1="18" y1="58" x2="12" y2="64" />
        <line x1="38" y1="38" x2="44" y2="32" />
      </g>
      
      {/* Upper Teal Arc Swoosh */}
      <path d="M55 46 C115 10 175 14 192 24 C148 18 88 28 60 50 Z" fill="#00A3B5" />
      <path d="M142 10 C168 12 184 18 190 24 C178 18 158 14 142 10 Z" fill="#004282" />

      {/* Azura Text */}
      <text x="32" y="74" fill="#004282" fontSize="44" fontWeight="900" fontFamily="'Georgia', serif">Azura</text>

      {/* Teal ATLANTIC box */}
      <rect x="25" y="85" width="168" height="26" fill="#00A3B5" rx="2" />
      <text x="109" y="103" fill="#FFFFFF" fontSize="15" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" letterSpacing="4">ATLANTIC</text>
    </svg>
  );
}

export function DislogLogo({ className = "h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text x="140" y="52" fill="#E50038" fontSize="48" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" letterSpacing="4">DISLOG</text>
      <text x="140" y="76" fill="#E50038" fontSize="17" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" letterSpacing="10">GROUP</text>
    </svg>
  );
}

export function LicorneLogo({ className = "h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 350 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="licorneRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7B1FA2" />
          <stop offset="50%" stopColor="#3F51B5" />
          <stop offset="100%" stopColor="#1A237E" />
        </linearGradient>
      </defs>

      {/* Left Emblem Icon */}
      <g transform="translate(8, 2)">
        {/* Outer Dashed Arc on Upper Left */}
        <path d="M 12 36 A 38 38 0 0 1 42 10" stroke="#7B1FA2" strokeWidth="3" strokeDasharray="4 3" strokeLinecap="round" fill="none" />

        {/* Main Gradient Circle with Gap at Top Left */}
        <path d="M 40 10 A 36 36 0 1 1 10 46" stroke="url(#licorneRingGrad)" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Unicorn Head Silhouette / Line Art */}
        <g stroke="#1A237E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Horn sticking up and to the right */}
          <path d="M 42 22 L 68 10" stroke="#1A237E" strokeWidth="3.2" />
          
          {/* Muzzle and forehead contour pointing down-left */}
          <path d="M 24 50 C 24 38 30 32 36 28 C 42 24 48 26 50 32 C 50 42 42 48 34 49 C 30 50 28 54 30 58 Z" fill="#1A237E" fillOpacity="0.05" />
          
          {/* Ear and Neck back line */}
          <path d="M 40 28 C 44 20 48 24 48 30 C 50 38 52 46 54 56" />
        </g>
      </g>

      {/* Right Side Text */}
      <text x="106" y="52" fill="#1A237E" fontSize="42" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.5">LICORNE</text>
      <text x="108" y="76" fill="#1A237E" fontSize="18" fontWeight="700" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.2">Consulting-Training</text>
    </svg>
  );
}
