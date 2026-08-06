import React from 'react';

// Handcrafted SVG Vector Illustrations for HH Goa 2026

export const PalmTreeIcon: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-12 h-12',
  color = '#0E6D38',
}) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Trunk */}
    <path
      d="M46 95 C48 70 42 45 52 25 C53 23 56 23 56 25 C48 45 54 70 52 95 Z"
      fill="#09562C"
      stroke="#09562C"
      strokeWidth="2"
    />
    <path d="M46 95 Q52 65 52 25" stroke="#FFD81A" strokeWidth="2" strokeDasharray="4 4" />
    
    {/* Coconuts */}
    <circle cx="48" cy="28" r="5" fill="#5C3A21" stroke="#09562C" strokeWidth="1.5" />
    <circle cx="55" cy="27" r="5" fill="#7C4A21" stroke="#09562C" strokeWidth="1.5" />
    <circle cx="51" cy="32" r="4.5" fill="#5C3A21" stroke="#09562C" strokeWidth="1.5" />

    {/* Leaves */}
    <path
      d="M52 25 C30 18 10 25 5 35 C15 32 30 28 50 26 Z"
      fill={color}
      stroke="#09562C"
      strokeWidth="2"
    />
    <path
      d="M52 25 C35 10 20 0 10 5 C20 12 35 18 50 24 Z"
      fill="#FFD81A"
      stroke="#09562C"
      strokeWidth="2"
    />
    <path
      d="M52 25 C65 10 80 0 90 5 C80 12 65 18 54 24 Z"
      fill={color}
      stroke="#09562C"
      strokeWidth="2"
    />
    <path
      d="M52 25 C75 18 90 25 95 35 C85 32 70 28 54 26 Z"
      fill="#FF0F7B"
      stroke="#09562C"
      strokeWidth="2"
    />
    <path
      d="M52 25 C60 40 75 50 85 55 C72 48 60 38 52 27 Z"
      fill={color}
      stroke="#09562C"
      strokeWidth="2"
    />
    <path
      d="M52 25 C40 40 25 50 15 55 C28 48 40 38 50 27 Z"
      fill={color}
      stroke="#09562C"
      strokeWidth="2"
    />
  </svg>
);

export const SunWaveIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Sun */}
    <circle cx="60" cy="50" r="32" fill="#FFD81A" stroke="#09562C" strokeWidth="3" />
    {/* Sun rays */}
    <path d="M60 10 V14" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />
    <path d="M60 86 V90" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 50 H24" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />
    <path d="M96 50 H100" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 22 L35 25" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />
    <path d="M85 75 L88 78" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />
    <path d="M88 22 L85 25" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />
    <path d="M35 75 L32 78" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />

    {/* Waves */}
    <path
      d="M10 75 Q 30 65, 50 75 T 90 75 T 110 75"
      stroke="#FF0F7B"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M10 88 Q 30 78, 50 88 T 90 88 T 110 88"
      stroke="#0E6D38"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const GoaHouseIcon: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Roof */}
    <path d="M15 45 L60 15 L105 45 Z" fill="#FF0F7B" stroke="#09562C" strokeWidth="3" />
    <path d="M10 48 L60 18 L110 48" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />
    {/* Body */}
    <rect x="22" y="45" width="76" height="45" fill="#FFD81A" stroke="#09562C" strokeWidth="3" />
    {/* Door */}
    <path d="M50 90 V65 C50 60 70 60 70 65 V90 Z" fill="#0E6D38" stroke="#09562C" strokeWidth="2.5" />
    {/* Windows */}
    <rect x="30" y="55" width="12" height="15" rx="2" fill="#F7F0DD" stroke="#09562C" strokeWidth="2" />
    <rect x="78" y="55" width="12" height="15" rx="2" fill="#F7F0DD" stroke="#09562C" strokeWidth="2" />
    {/* Porch steps */}
    <rect x="18" y="90" width="84" height="6" fill="#F7F0DD" stroke="#09562C" strokeWidth="2" />
  </svg>
);

export const ScooterIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Wheels */}
    <circle cx="25" cy="60" r="12" fill="#333" stroke="#09562C" strokeWidth="3" />
    <circle cx="25" cy="60" r="5" fill="#F7F0DD" />
    <circle cx="75" cy="60" r="12" fill="#333" stroke="#09562C" strokeWidth="3" />
    <circle cx="75" cy="60" r="5" fill="#F7F0DD" />

    {/* Body */}
    <path
      d="M20 50 Q 30 35, 50 35 L 75 50 L 75 60 L 20 60 Z"
      fill="#FF0F7B"
      stroke="#09562C"
      strokeWidth="3"
    />
    {/* Seat */}
    <rect x="42" y="28" width="28" height="8" rx="4" fill="#09562C" stroke="#09562C" />
    {/* Handlebar & Headlight */}
    <path d="M25 50 L20 20 L28 20" stroke="#09562C" strokeWidth="3" strokeLinecap="round" />
    <circle cx="18" cy="20" r="6" fill="#FFD81A" stroke="#09562C" strokeWidth="2" />

    {/* Coconut in basket */}
    <circle cx="70" cy="42" r="6" fill="#5C3A21" stroke="#09562C" strokeWidth="2" />
  </svg>
);

export const DirectionBoard: React.FC<{
  text1?: string;
  text2?: string;
  className?: string;
}> = ({ text1 = 'ANJUNA 4KM', text2 = 'HACKER HAVEN 0KM', className = 'w-48 h-36' }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Main Post */}
    <rect x="94" y="20" width="12" height="135" fill="#5C3A21" stroke="#09562C" strokeWidth="3" />
    {/* Top Signboard (Pointing Right) */}
    <path
      d="M20 30 H160 L180 45 L160 60 H20 Z"
      fill="#FFD81A"
      stroke="#09562C"
      strokeWidth="3.5"
    />
    <text
      x="85"
      y="49"
      fill="#09562C"
      fontSize="14"
      fontWeight="900"
      fontFamily="JetBrains Mono, monospace"
      textAnchor="middle"
    >
      {text1}
    </text>

    {/* Bottom Signboard (Pointing Left) */}
    <path
      d="M180 80 H40 L20 95 L40 110 H180 Z"
      fill="#FF0F7B"
      stroke="#09562C"
      strokeWidth="3.5"
    />
    <text
      x="105"
      y="99"
      fill="#FFFFFF"
      fontSize="13"
      fontWeight="900"
      fontFamily="JetBrains Mono, monospace"
      textAnchor="middle"
    >
      {text2}
    </text>
  </svg>
);

export const CoconutDrinkIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Coconut */}
    <circle cx="40" cy="45" r="28" fill="#0E6D38" stroke="#09562C" strokeWidth="3" />
    {/* Cut top */}
    <ellipse cx="40" cy="24" rx="20" ry="8" fill="#F7F0DD" stroke="#09562C" strokeWidth="2.5" />
    {/* Straw */}
    <path
      d="M36 24 L22 0 M22 0 L15 2"
      stroke="#FF0F7B"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Umbrella */}
    <path d="M48 24 L56 10" stroke="#09562C" strokeWidth="2" />
    <path d="M45 10 C50 2, 60 2, 65 10 Z" fill="#FFD81A" stroke="#09562C" strokeWidth="2" />
  </svg>
);

export const PassportStampSVG: React.FC<{
  label?: string;
  sublabel?: string;
  color?: string;
  className?: string;
}> = ({ label = 'OFFICIAL HH GOA', sublabel = 'OCT 2026', color = '#FF0F7B', className = 'w-24 h-24' }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} opacity-90`}
  >
    <circle cx="60" cy="60" r="52" stroke={color} strokeWidth="3" strokeDasharray="6 3" />
    <circle cx="60" cy="60" r="44" stroke={color} strokeWidth="2" />
    <path
      id="curveTop"
      d="M 25 60 A 35 35 0 0 1 95 60"
      fill="none"
    />
    <text fill={color} fontSize="9" fontWeight="800" fontFamily="JetBrains Mono, monospace">
      <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
        {label}
      </textPath>
    </text>
    <text
      x="60"
      y="62"
      fill={color}
      fontSize="12"
      fontWeight="900"
      fontFamily="Fraunces, serif"
      textAnchor="middle"
    >
      VERIFIED
    </text>
    <text
      x="60"
      y="76"
      fill={color}
      fontSize="8"
      fontWeight="700"
      fontFamily="JetBrains Mono, monospace"
      textAnchor="middle"
    >
      {sublabel}
    </text>
    {/* Star icons */}
    <polygon
      points="60,32 62,37 67,37 63,40 64,45 60,42 56,45 57,40 53,37 58,37"
      fill={color}
    />
  </svg>
);

export const TravelStickerBadge: React.FC<{
  type: string;
  className?: string;
}> = ({ type, className = 'w-20 h-20' }) => {
  switch (type) {
    case 'sticker-surf':
      return (
        <div
          className={`bg-[#FFD81A] border-2 border-[#09562C] shadow-goa-sm rounded-full p-2 text-center text-[#09562C] font-mono text-[10px] font-extrabold rotate-[-6deg] ${className} flex flex-col items-center justify-center`}
        >
          <span className="text-sm">🏄</span>
          <span>FOUNDER</span>
          <span className="bg-[#FF0F7B] text-white px-1 rounded text-[8px]">SURF</span>
        </div>
      );
    case 'sticker-feni':
      return (
        <div
          className={`bg-[#FF0F7B] border-2 border-[#09562C] shadow-goa-sm rounded-lg p-1.5 text-center text-white font-mono text-[9px] font-black rotate-[8deg] ${className} flex flex-col items-center justify-center`}
        >
          <span className="text-sm">🍹</span>
          <span>FENI &amp;</span>
          <span className="text-[#FFD81A]">PROMPTS</span>
        </div>
      );
    case 'sticker-scooter':
      return (
        <div
          className={`bg-[#0E6D38] border-2 border-[#09562C] shadow-goa-sm rounded-xl p-2 text-center text-[#FFD81A] font-mono text-[9px] font-bold rotate-[-12deg] ${className} flex flex-col items-center justify-center`}
        >
          <span className="text-sm">🛵</span>
          <span>SCOOTER</span>
          <span className="text-white text-[8px]">SQUAD</span>
        </div>
      );
    case 'sticker-coconut':
      return (
        <div
          className={`bg-[#F7F0DD] border-2 border-[#09562C] shadow-goa-sm rounded-full p-2 text-center text-[#09562C] font-mono text-[9px] font-bold rotate-[10deg] ${className} flex flex-col items-center justify-center`}
        >
          <span className="text-sm">🥥</span>
          <span>100X</span>
          <span className="text-[#0E6D38] text-[8px]">GOA</span>
        </div>
      );
    case 'sticker-beach':
      return (
        <div
          className={`bg-[#FFD81A] border-2 border-[#09562C] shadow-goa-sm rounded-md p-1.5 text-center text-[#09562C] font-mono text-[9px] font-extrabold rotate-[-4deg] ${className} flex flex-col items-center justify-center`}
        >
          <span className="text-sm">🏖️</span>
          <span>BEACH MODE</span>
          <span className="bg-[#0E6D38] text-white text-[8px] px-1 rounded">ACTIVE</span>
        </div>
      );
    default:
      return (
        <div
          className={`bg-[#0E6D38] border-2 border-[#09562C] shadow-goa-sm rounded-full p-2 text-center text-[#FFD81A] font-mono text-[9px] font-bold rotate-[-8deg] ${className} flex flex-col items-center justify-center`}
        >
          <span className="text-sm">🌴</span>
          <span>VERIFIED</span>
          <span className="text-white text-[8px]">BUILDER</span>
        </div>
      );
  }
};
