import React, { useState } from 'react';
import { BuilderProfile } from '../types';
import {
  PalmTreeIcon,
  SunWaveIcon,
  PassportStampSVG,
  TravelStickerBadge,
  ScooterIcon,
  GoaHouseIcon,
  CoconutDrinkIcon,
} from './VectorIllustrations';
import { Sparkles, MapPin, Calendar, QrCode, RotateCw, CheckCircle2 } from 'lucide-react';

interface PassCardProps {
  builder: BuilderProfile;
  isFlipped?: boolean;
  onFlip?: () => void;
  id?: string;
}

export const PassCard: React.FC<PassCardProps> = ({
  builder,
  isFlipped = false,
  onFlip,
  id = 'builder-pass-card',
}) => {
  const [flippedState, setFlippedState] = useState(isFlipped);

  const handleCardClick = () => {
    setFlippedState(!flippedState);
    if (onFlip) onFlip();
  };

  return (
    <div className="relative group max-w-md w-full mx-auto perspective-1000">
      {/* Flip Button overlay */}
      <button
        onClick={handleCardClick}
        className="absolute -top-3 -right-3 z-30 bg-[#FFD81A] text-[#09562C] border-2 border-[#09562C] shadow-goa-sm px-2.5 py-1 rounded-full font-mono text-xs font-bold flex items-center gap-1 hover:bg-[#FF0F7B] hover:text-white transition-colors"
      >
        <RotateCw className="w-3.5 h-3.5" />
        <span>Flip Side</span>
      </button>

      {/* Main Pass Container */}
      <div
        id={id}
        className="w-full bg-[#F7F0DD] border-2 border-[#09562C] rounded-2xl shadow-goa-xl overflow-hidden transition-all duration-500 relative"
        style={{
          backgroundColor: '#F7F0DD',
        }}
      >
        {!flippedState ? (
          /* FRONT SIDE */
          <div className="p-5 sm:p-6 flex flex-col gap-4 relative">
            {/* Top Festival Header Header */}
            <div className="bg-[#0E6D38] border-2 border-[#09562C] rounded-xl p-3 text-white flex items-center justify-between shadow-goa-sm relative overflow-hidden">
              {/* Background decorative wave */}
              <div className="absolute right-0 top-0 opacity-20 pointer-events-none">
                <PalmTreeIcon className="w-24 h-24" color="#FFD81A" />
              </div>

              <div>
                <div className="font-mono text-[10px] tracking-widest text-[#FFD81A] font-extrabold uppercase">
                  OFFICIAL BUILDER PASS 2026
                </div>
                <div className="font-serif text-2xl font-black tracking-tight text-white leading-tight">
                  HH GOA FESTIVAL
                </div>
                <div className="flex items-center gap-2 mt-0.5 text-[11px] font-mono text-[#F7F0DD]">
                  <MapPin className="w-3 h-3 text-[#FF0F7B]" />
                  <span>Goa, India</span>
                  <span>•</span>
                  <Calendar className="w-3 h-3 text-[#FFD81A]" />
                  <span>28–31 Oct 2026</span>
                </div>
              </div>

              {/* Serial number pill */}
              <div className="bg-[#FFD81A] border-2 border-[#09562C] text-[#09562C] px-2.5 py-1 rounded-lg font-mono text-[11px] font-black shadow-goa-sm">
                {builder.serialNumber}
              </div>
            </div>

            {/* Middle Section: Photo & Profile Info */}
            <div className="grid grid-cols-12 gap-4 items-center my-1">
              {/* Selfie Frame */}
              <div className="col-span-5 relative">
                <div className="bg-white p-2 pb-5 border-2 border-[#09562C] rounded-xl shadow-goa-sm rotate-[-3deg] transform hover:rotate-0 transition-transform">
                  <div className="aspect-square rounded-lg overflow-hidden border border-[#09562C] bg-[#F7F0DD] relative">
                    {builder.selfieUrl ? (
                      <img
                        src={builder.selfieUrl}
                        alt={builder.fullName}
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-[#FFD81A]/30 text-[#09562C] font-mono text-xs font-bold">
                        <span>NO PHOTO</span>
                      </div>
                    )}
                    {/* Hologram badge */}
                    <div className="absolute top-1 right-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 text-[8px] font-mono font-black text-white px-1 rounded shadow">
                      HOLO
                    </div>
                  </div>
                  <div className="mt-1.5 text-center font-mono text-[9px] font-bold text-[#09562C] truncate">
                    {builder.handle || '@builder'}
                  </div>
                </div>

                {/* Sticker overlay on photo corner */}
                <div className="absolute -bottom-2 -left-2 z-10 pointer-events-none">
                  <TravelStickerBadge type={builder.selectedStickers[0] || 'sticker-verified'} className="w-12 h-12" />
                </div>
              </div>

              {/* Profile Meta Details */}
              <div className="col-span-7 flex flex-col justify-center">
                <div className="font-mono text-[10px] text-[#0E6D38] font-bold uppercase tracking-wider">
                  {builder.role}
                </div>
                <div className="font-serif text-xl font-bold text-[#09562C] leading-tight">
                  {builder.fullName || 'Anonymous Builder'}
                </div>

                {/* Generated Title Banner */}
                <div className="mt-2 bg-[#FFD81A] border-2 border-[#09562C] rounded-lg p-2 shadow-goa-sm">
                  <div className="font-mono text-[9px] font-black text-[#FF0F7B] uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#FF0F7B]" />
                    <span>Goa Builder Title</span>
                  </div>
                  <div className="font-serif text-sm font-black text-[#09562C] leading-snug">
                    "{builder.title}"
                  </div>
                </div>
              </div>
            </div>

            {/* Goa Vibe & Project summary */}
            <div className="bg-white border-2 border-[#09562C] rounded-xl p-3 shadow-goa-sm flex flex-col gap-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="font-bold text-[#0E6D38]">PROJECT AT HH GOA:</span>
                <span className="bg-[#F7F0DD] text-[#09562C] border border-[#09562C] px-2 py-0.5 rounded font-extrabold text-[10px]">
                  {builder.project || 'Stealth Project'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#09562C]">
                <span className="text-base">🍹</span>
                <span className="italic text-[#FF0F7B]">"{builder.goaVibe || 'Coconut water & code'}"</span>
              </div>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-1.5 items-center">
              {builder.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#0E6D38] text-[#FFD81A] border border-[#09562C] px-2 py-0.5 rounded-md font-mono text-[10px] font-black"
                >
                  #{skill}
                </span>
              ))}
            </div>

            {/* Footer Stamps & Barcode Divider */}
            <div className="relative my-2">
              <div className="absolute -left-[27px] sm:-left-[31px] -top-3.5 w-7 h-7 rounded-full bg-[#FDFBF7] border-2 border-[#09562C] z-10 pointer-events-none" />
              <div className="absolute -right-[27px] sm:-right-[31px] -top-3.5 w-7 h-7 rounded-full bg-[#FDFBF7] border-2 border-[#09562C] z-10 pointer-events-none" />
              <div className="border-t-2 border-dashed border-[#09562C]" />
            </div>

            <div className="pt-1 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {/* Barcode representation */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-0.5 h-6">
                    {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1].map((width, i) => (
                      <div
                        key={i}
                        className="bg-[#09562C] h-full"
                        style={{ width: `${width * 1.5}px` }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] font-extrabold text-[#09562C]">
                    CHECKED IN: OCT 2026
                  </span>
                </div>
              </div>

              <div className="relative">
                <PassportStampSVG label="HH GOA 2026" sublabel="VERIFIED" color="#FF0F7B" className="w-16 h-16" />
              </div>
            </div>
          </div>
        ) : (
          /* BACK SIDE */
          <div className="p-5 sm:p-6 flex flex-col gap-4 bg-[#F7F0DD] relative min-h-[380px] justify-between">
            {/* Header */}
            <div className="bg-[#FF0F7B] border-2 border-[#09562C] rounded-xl p-3 text-white flex items-center justify-between shadow-goa-sm">
              <div>
                <div className="font-mono text-[10px] text-[#FFD81A] font-extrabold uppercase">
                  FESTIVAL GUIDE &amp; SURVIVAL
                </div>
                <div className="font-serif text-xl font-black text-white">
                  HH GOA 2026 BACKSTAGE
                </div>
              </div>
              <ScooterIcon className="w-12 h-12" />
            </div>

            {/* Survival Checklist */}
            <div className="bg-white border-2 border-[#09562C] rounded-xl p-3.5 shadow-goa-sm flex flex-col gap-2">
              <div className="font-mono text-xs font-black text-[#09562C] uppercase border-b border-[#09562C] pb-1 flex items-center justify-between">
                <span>Goa Festival Checklist</span>
                <span className="text-[#0E6D38]">5/5 READY</span>
              </div>
              <ul className="space-y-1.5 font-mono text-[11px] text-[#09562C] font-semibold">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6D38]" />
                  <span>Fresh Tender Coconut Water (Unlimited)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6D38]" />
                  <span>Scooter Rental &amp; Helmet Verified</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6D38]" />
                  <span>Sunset Demo Stage Pitch Deck Loaded</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6D38]" />
                  <span>Beach Shack Wi-Fi Credentials Active</span>
                </li>
              </ul>
            </div>

            {/* QR Code section */}
            <div className="bg-[#FFD81A] border-2 border-[#09562C] rounded-xl p-3 flex items-center gap-3 shadow-goa-sm">
              <div className="bg-white p-1.5 border border-[#09562C] rounded-lg">
                <QrCode className="w-12 h-12 text-[#09562C]" />
              </div>
              <div>
                <div className="font-mono text-[10px] font-black text-[#09562C] uppercase">
                  Scan for Verification
                </div>
                <div className="font-mono text-xs font-extrabold text-[#0E6D38]">
                  {builder.serialNumber}
                </div>
                <div className="font-mono text-[9px] text-[#09562C]">
                  Official Entry Badge • HH Goa Festival 2026
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center font-serif italic text-xs text-[#09562C]">
              "Code by day, sunsets by evening, building future by night."
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
