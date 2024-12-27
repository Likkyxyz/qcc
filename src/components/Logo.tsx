import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 120 120" 
      className={`${className} origin-center`}
      aria-label="Quantum Logo"
    >
      {/* Moved circles to center the larger one at 60,60 */}
      <g transform="translate(60, 60)">
        <circle cx="-30" cy="-20" r="20" fill="currentColor" />
        <circle cx="0" cy="0" r="30" fill="currentColor" />
      </g>
    </svg>
  );
}