import React, { forwardRef, useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'motion/react';
import { Palmtree, ShieldCheck, Ticket } from 'lucide-react';
import { BuilderData } from '../types';
import { BuilderPhoto } from './BuilderPhoto';
import { BuilderInfo } from './BuilderInfo';

interface BuilderPassProps {
  builderData: BuilderData;
  passNumber?: string;
  issueDate?: string;
}

// SVG Die-Cut Ticket Shape Path Generator
function generateTicketSvgPath(
  w: number,
  h: number,
  notchY: number,
  rNotch: number,
  rCorner: number,
  nTeeth: number,
  hTooth: number
) {
  // Top-left corner start
  let d = `M ${rCorner} 0`;
  // Top edge
  d += ` L ${w - rCorner} 0`;
  // Top-right corner arc
  d += ` A ${rCorner} ${rCorner} 0 0 1 ${w} ${rCorner}`;

  // Right edge down to top of right notch
  d += ` L ${w} ${(notchY - rNotch).toFixed(2)}`;
  // Right notch (inward semicircular arc cutout)
  d += ` A ${rNotch} ${rNotch} 0 0 0 ${w} ${(notchY + rNotch).toFixed(2)}`;
  // Right edge down to top of bottom zigzag
  d += ` L ${w} ${h.toFixed(2)}`;

  // Sawtooth bottom teeth from right (X=w) to left (X=0)
  const toothWidth = w / nTeeth;
  for (let i = nTeeth - 1; i >= 0; i--) {
    const xPeak = (i + 0.5) * toothWidth;
    const yPeak = h + hTooth;
    const xValley = i * toothWidth;
    const yValley = h;
    d += ` L ${xPeak.toFixed(2)} ${yPeak.toFixed(2)}`;
    d += ` L ${xValley.toFixed(2)} ${yValley.toFixed(2)}`;
  }

  // Left edge up to bottom of left notch
  d += ` L 0 ${(notchY + rNotch).toFixed(2)}`;
  // Left notch (inward semicircular arc cutout)
  d += ` A ${rNotch} ${rNotch} 0 0 0 0 ${(notchY - rNotch).toFixed(2)}`;
  // Left edge up to top-left corner arc
  d += ` L 0 ${rCorner}`;
  // Top-left corner arc
  d += ` A ${rCorner} ${rCorner} 0 0 1 ${rCorner} 0`;
  d += ` Z`;

  return d;
}

export const BuilderPass = forwardRef<HTMLDivElement, BuilderPassProps>(
  (
    {
      builderData,
      passNumber = 'HH-2026-01482',
      issueDate = 'OCT 2026',
    },
    ref
  ) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const perforationRef = useRef<HTMLDivElement>(null);

    const [dims, setDims] = useState({
      width: 384,
      height: 520,
      notchY: 340,
      rNotch: 18,
      rCorner: 24,
      nTeeth: 12,
      hTooth: 20,
    });

    useLayoutEffect(() => {
      const updateDims = () => {
        if (!cardRef.current || !perforationRef.current) return;
        const cardRect = cardRef.current.getBoundingClientRect();
        const perfRect = perforationRef.current.getBoundingClientRect();

        const width = cardRect.width;
        if (width === 0) return;

        const isMobile = width < 380;
        const rCorner = 24;
        const rNotch = isMobile ? 17 : 20; // ~10-15% larger notch cutouts (34px mobile / 40px desktop)
        const nTeeth = isMobile ? 10 : 12; // 10 teeth on mobile, 12 on desktop
        const hTooth = isMobile ? 14 : 20; // 14px depth on mobile, 20px depth on desktop

        const notchY = perfRect.top + perfRect.height / 2 - cardRect.top;
        const height = Math.max(100, cardRect.height - hTooth);

        setDims({
          width,
          height,
          notchY,
          rNotch,
          rCorner,
          nTeeth,
          hTooth,
        });
      };

      updateDims();

      const observer = new ResizeObserver(updateDims);
      if (cardRef.current) observer.observe(cardRef.current);
      if (perforationRef.current) observer.observe(perforationRef.current);

      return () => observer.disconnect();
    }, []);

    const svgPathD = generateTicketSvgPath(
      dims.width,
      dims.height,
      dims.notchY,
      dims.rNotch,
      dims.rCorner,
      dims.nTeeth,
      dims.hTooth
    );

    return (
      <motion.div
        ref={ref}
        initial={{ scale: 0.9, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
        className="w-full max-w-md mx-auto relative select-none p-2"
      >
        {/* Main Boarding Pass / Event Ticket Outer Container */}
        <div ref={cardRef} className="relative w-full text-[#09562C]">
          {/* Die-Cut SVG Ticket Background, 2px Green Border, Side Notches & Bottom Sawtooth Cut */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            style={{
              filter: 'drop-shadow(0px 8px 24px rgba(9, 86, 44, 0.12))',
            }}
            viewBox={`-2 -2 ${dims.width + 4} ${dims.height + dims.hTooth + 4}`}
          >
            {/* Main Ticket Card Silhouette */}
            <path
              d={svgPathD}
              fill="#F7F0DD"
              stroke="#09562C"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Perforation Line passing exactly through vertical center of side circular notches, constrained between notch inner edges */}
            <line
              x1={dims.rNotch}
              y1={dims.notchY}
              x2={dims.width - dims.rNotch}
              y2={dims.notchY}
              stroke="#09562C"
              strokeOpacity="0.3"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Ticket Content Container */}
          <div className="relative z-10 p-6 sm:p-7 pb-10 sm:pb-12 text-[#09562C]">
            {/* 1. HH Goa Branding Header */}
            <div className="border-b-2 border-[#09562C]/15 pb-6 mb-6">
              <div className="flex items-center justify-between font-mono text-[10px] font-black tracking-widest text-[#0E6D38] uppercase mb-2">
                <span className="flex items-center gap-1">
                  <Ticket className="w-3.5 h-3.5 text-[#0E6D38] shrink-0" />
                  EVENT TICKET
                </span>
                <span>{issueDate}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-serif text-2xl font-black text-[#09562C] tracking-tight leading-none">
                  <Palmtree className="w-5.5 h-5.5 text-[#09562C] shrink-0" />
                  <span>HH GOA 2026</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FFD81A] border border-[#09562C] font-mono text-[10px] font-black text-[#09562C] uppercase tracking-wider shadow-2xs shrink-0">
                  DELEGATE
                </span>
              </div>
            </div>

            {/* 2. Builder Photo */}
            <BuilderPhoto
              selfieUrl={builderData.selfieUrl}
              fullName={builderData.fullName}
            />

            {/* 3–6. Builder Information: Name, Title, Stack/Role, City/Personality & Metadata */}
            <BuilderInfo
              builderData={builderData}
              passNumber={passNumber}
              issueDate={issueDate}
            />

            {/* Perforation Line Anchor Target (used to measure exact Y offset for notches & dashed line) */}
            <div
              ref={perforationRef}
              className="my-5 h-1 w-full pointer-events-none opacity-0"
            />

            {/* 7 & 8. Edge-to-Edge Barcode & Pass Number Section */}
            <div className="space-y-2 pt-1 text-center">
              {/* Crisp High-Contrast Edge-to-Edge Vector Barcode */}
              <div className="flex items-center justify-between gap-0.5 sm:gap-1 py-1 w-full overflow-hidden px-1">
                {Array.from({ length: 42 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 bg-[#09562C] ${
                      i % 5 === 0
                        ? 'w-1.5'
                        : i % 3 === 0
                        ? 'w-1'
                        : i % 2 === 0
                        ? 'w-0.5'
                        : 'w-1 bg-[#09562C]/85'
                    }`}
                  />
                ))}
              </div>

              {/* Pass Number aligned beneath barcode like an airline ticket */}
              <div className="flex items-center justify-between font-mono text-[10px] font-bold text-[#09562C]/85 px-1 pt-0.5">
                <span className="tracking-widest">PASS NO. {passNumber}</span>
                <span className="flex items-center gap-1 text-[#0E6D38] font-black">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>HH GOA 2026</span>
                </span>
              </div>

              {/* Official Credential Statement */}
              <p className="font-mono text-[8.5px] font-bold text-[#09562C]/60 tracking-widest uppercase pt-1">
                OFFICIAL HH GOA 2026 DELEGATE CREDENTIAL
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

BuilderPass.displayName = 'BuilderPass';





