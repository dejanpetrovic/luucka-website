
import React from 'react';

// Instructions:
// 1. Rename your logo image file to "logo.png"
// 2. Upload/Place it in the "public" folder of your project root
const LOGO_SRC = "/logo.png"; 

export const Logo = ({ className = "", dark = false }: { className?: string, dark?: boolean }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={LOGO_SRC} 
        alt="LUUCKA" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Fallback if image isn't uploaded yet
          e.currentTarget.style.display = 'none';
        }}
      />
      {/* Fallback text if logo image is missing */}
      <span className="font-display font-bold text-2xl tracking-tight leading-none ml-2 hidden peer-[:hidden]:block" style={{ color: dark ? "#ffffff" : "#0f172a" }}>
        LUUCKA
      </span>
    </div>
  );
};
