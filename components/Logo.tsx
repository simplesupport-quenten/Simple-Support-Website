
import React from 'react';
import { UserType } from '../constants';

interface LogoProps {
  className?: string;
  color?: 'dark' | 'light' | 'original';
  userType?: UserType;
}

const Logo: React.FC<LogoProps> = ({ className = "w-auto h-12", color = 'original', userType = 'none' }) => {
  // Exact brand colors from the marks provided
  const BRAND_BLUE = '#045184';
  const BRAND_GREEN = '#67c621';
  const WHITE = '#FFFFFF';

  let primaryColor: string;
  let secondaryColor: string;

  // Set colors based on user profile
  if (userType === 'home') {
    primaryColor = BRAND_GREEN;
    secondaryColor = BRAND_BLUE;
  } else if (userType === 'business') {
    primaryColor = BRAND_BLUE;
    secondaryColor = BRAND_GREEN;
  } else {
    // Default to business blue as a baseline for the selector screen
    primaryColor = BRAND_BLUE;
    secondaryColor = BRAND_GREEN;
  }

  // Handle specific theme overrides (e.g., white logos in footers or hero backgrounds)
  if (color === 'light') {
    primaryColor = WHITE;
    secondaryColor = WHITE;
  } else if (color === 'dark') {
    primaryColor = '#0f172a'; // Slate-900
    secondaryColor = '#0f172a';
  }

  return (
    <svg 
      viewBox="0 0 500 210" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      preserveAspectRatio="xMinYMid meet"
      role="img"
      aria-label={`Simple Support ${userType} Logo`}
    >
      <defs>
        <style>
          {`
            .logo-text-simple { 
              font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
              font-weight: 800; 
              font-size: 135px; 
              letter-spacing: -7px;
            }
            .logo-text-support { 
              font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
              font-weight: 700; 
              font-size: 68px; 
              letter-spacing: -2px;
            }
          `}
        </style>
      </defs>
      
      {/* 
        Lowercase brand name using a dotless 'ı' to allow for 
        a perfectly positioned and custom-colored dot.
      */}
      <text x="0" y="115" fill={primaryColor} className="logo-text-simple">sımple</text>
      
      {/* 
        The custom dot for the 'i' - positioned at cx=76.5 to align 
        exactly over the 'i' stem and avoid the 'bump' over the 'm'.
      */}
      <circle cx="76.5" cy="28" r="13" fill={secondaryColor} />
      
      {/* Horizontal weighted divider line - colored with secondary brand color */}
      <rect x="0" y="132" width="498" height="8" rx="2" fill={secondaryColor} />
      
      {/* Right-aligned "support" tagline sitting below the divider */}
      <text x="498" y="195" textAnchor="end" fill={primaryColor} className="logo-text-support">support</text>
    </svg>
  );
};

export default Logo;
