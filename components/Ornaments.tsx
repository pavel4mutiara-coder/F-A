
import React from 'react';

export const CornerOrnament: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={`w-16 h-16 ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z" fill="url(#goldGradient)" />
    <circle cx="10" cy="10" r="2" fill="url(#goldGradient)" />
    <path d="M15 15 L40 15 M15 15 L15 40" stroke="url(#goldGradient)" strokeWidth="1" />
    <defs>
      <linearGradient id="goldGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fef08a" />
        <stop offset="0.5" stopColor="#d4af37" />
        <stop offset="1" stopColor="#a16207" />
      </linearGradient>
    </defs>
  </svg>
);

export const GeometricPattern: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="100%" height="100%" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="islamicGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke="#d4af37" strokeWidth="0.2" fill="none" />
        <path d="M25 25 L75 25 L75 75 L25 75 Z" stroke="#d4af37" strokeWidth="0.1" fill="none" opacity="0.3" />
        <circle cx="50" cy="50" r="10" stroke="#d4af37" strokeWidth="0.1" fill="none" opacity="0.2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#islamicGrid)" />
  </svg>
);

export const GeometricBorder: React.FC = () => (
  <div className="absolute inset-2 sm:inset-3 pointer-events-none z-10 border-[1px] border-[#d4af37]/30">
    <svg width="100%" height="100%" className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="borderPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path 
            d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" 
            fill="none" 
            stroke="#d4af37" 
            strokeWidth="0.5" 
            opacity="0.6"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="none" stroke="url(#borderPattern)" strokeWidth="20" />
    </svg>
  </div>
);

export const CalligraphySparkles: React.FC = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
    <g fill="#fef08a" opacity="0.6">
      <circle cx="20" cy="40" r="0.8" />
      <circle cx="380" cy="40" r="0.8" />
      <circle cx="200" cy="10" r="1.2" />
      <circle cx="60" cy="20" r="0.5" />
      <circle cx="340" cy="20" r="0.5" />
      <path d="M100 15 L102 19 L106 20 L102 21 L100 25 L98 21 L94 20 L98 19 Z" />
      <path d="M300 15 L302 19 L306 20 L302 21 L300 25 L298 21 L294 20 L298 19 Z" />
    </g>
  </svg>
);

export const CalligraphyFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative py-4 px-8 sm:px-12 mb-4 group flex flex-col items-center justify-center">
    <CalligraphySparkles />
    
    {/* Upper Decorative Scroll - Elegant Framing */}
    <svg viewBox="0 0 400 50" className="absolute -top-2 left-1/2 -translate-x-1/2 w-48 sm:w-72 h-auto opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 40 C 80 40, 120 10, 200 10 S 320 40, 360 40" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M60 35 C 100 35, 140 15, 200 15 S 300 35, 340 35" stroke="#fef08a" strokeWidth="0.4" opacity="0.3" />
      <path d="M195 10 L200 5 L205 10 L200 15 Z" fill="#d4af37" />
    </svg>
    
    <div className="relative z-10 w-full flex justify-center py-2">
      {children}
    </div>

    {/* Lower Decorative Scroll - Elegant Framing */}
    <svg viewBox="0 0 400 50" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 sm:w-72 h-auto opacity-80 rotate-180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 40 C 80 40, 120 10, 200 10 S 320 40, 360 40" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M195 10 L200 5 L205 10 L200 15 Z" fill="#d4af37" />
    </svg>
  </div>
);

export const DecorativeDivider: React.FC = () => (
  <div className="flex items-center justify-center space-x-4 my-3 opacity-60">
    <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#d4af37]" />
    <div className="w-2.5 h-2.5 rotate-45 border border-[#d4af37]" />
    <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#d4af37]" />
  </div>
);
