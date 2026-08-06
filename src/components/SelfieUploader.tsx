import React, { useState, useRef } from 'react';
import { Camera, Upload, RefreshCw, Check, Sparkles, UserCheck } from 'lucide-react';
import { TravelStickerBadge } from './VectorIllustrations';

interface SelfieUploaderProps {
  currentSelfieUrl: string;
  onSelfieSelected: (url: string) => void;
  selectedStickers: string[];
  onStickerToggle: (stickerId: string) => void;
}

const SAMPLE_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
];

const AVAILABLE_STICKERS = [
  { id: 'sticker-surf', name: 'Founder Surf' },
  { id: 'sticker-feni', name: 'Feni & Prompts' },
  { id: 'sticker-scooter', name: 'Scooter Squad' },
  { id: 'sticker-coconut', name: '100x Goa' },
  { id: 'sticker-beach', name: 'Beach Mode' },
];

export const SelfieUploader: React.FC<SelfieUploaderProps> = ({
  currentSelfieUrl,
  onSelfieSelected,
  selectedStickers,
  onStickerToggle,
}) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const startCamera = async () => {
    try {
      setIsCameraActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert('Could not access camera. Please upload an image file instead.');
      setIsCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = 400;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, 400, 400);
        const dataUrl = canvas.toDataURL('image/png');
        onSelfieSelected(dataUrl);
        stopCamera();
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onSelfieSelected(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
      {/* Selfie Preview Area */}
      <div className="flex flex-col items-center">
        <div className="relative group">
          <div className="w-56 h-56 bg-white border-2 border-[#09562C] rounded-2xl p-3 shadow-goa-xl rotate-[-2deg] transition-transform hover:rotate-0 flex items-center justify-center relative overflow-hidden">
            {isCameraActive ? (
              <div className="w-full h-full relative rounded-xl overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover transform -scale-x-100"
                />
                <button
                  onClick={capturePhoto}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#FF0F7B] text-white border-2 border-[#09562C] px-4 py-1.5 rounded-full font-mono text-xs font-bold shadow-goa-sm flex items-center gap-1.5"
                >
                  <Camera className="w-4 h-4" />
                  <span>SNAP PHOTO</span>
                </button>
              </div>
            ) : currentSelfieUrl ? (
              <div className="w-full h-full rounded-xl overflow-hidden border-2 border-[#09562C] relative bg-[#F7F0DD]">
                <img
                  src={currentSelfieUrl}
                  alt="Selfie"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-[#FFD81A] border-2 border-[#09562C] px-2 py-0.5 rounded font-mono text-[9px] font-black text-[#09562C] shadow-goa-sm">
                  HH GOA PASSPORT
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-4 text-center text-[#09562C]">
                <Camera className="w-12 h-12 text-[#0E6D38] mb-2" />
                <span className="font-serif font-bold text-sm">Upload or Snap Selfie</span>
                <span className="font-mono text-[10px] text-gray-600 mt-1">
                  Required for official builder pass
                </span>
              </div>
            )}

            {/* Sticker overlay preview */}
            {selectedStickers.length > 0 && (
              <div className="absolute -bottom-3 -right-3 z-20 pointer-events-none">
                <TravelStickerBadge type={selectedStickers[0]} className="w-16 h-16" />
              </div>
            )}
          </div>
        </div>

        {/* Upload Action Buttons */}
        <div className="flex items-center gap-3 mt-6 flex-wrap justify-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-[#0E6D38] text-[#FFD81A] border-2 border-[#09562C] px-4 py-2.5 rounded-xl font-mono text-xs font-bold shadow-goa-sm flex items-center gap-2 hover:bg-[#09562C] transition-colors"
          >
            <Upload className="w-4 h-4" />
            <span>Upload Photo</span>
          </button>

          {!isCameraActive ? (
            <button
              onClick={startCamera}
              className="bg-[#FFD81A] text-[#09562C] border-2 border-[#09562C] px-4 py-2.5 rounded-xl font-mono text-xs font-bold shadow-goa-sm flex items-center gap-2 hover:bg-[#FF0F7B] hover:text-white transition-colors"
            >
              <Camera className="w-4 h-4" />
              <span>Use Camera</span>
            </button>
          ) : (
            <button
              onClick={stopCamera}
              className="bg-red-500 text-white border-2 border-[#09562C] px-4 py-2.5 rounded-xl font-mono text-xs font-bold shadow-goa-sm flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Cancel Camera</span>
            </button>
          )}
        </div>

        {/* Preset Sample Avatars */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <span className="font-mono text-[11px] font-bold text-[#09562C] uppercase flex items-center gap-1">
            <UserCheck className="w-3.5 h-3.5 text-[#0E6D38]" />
            Or Pick a Preset Goa Builder Avatar:
          </span>
          <div className="flex items-center gap-2.5">
            {SAMPLE_AVATARS.map((url, i) => (
              <button
                key={i}
                onClick={() => onSelfieSelected(url)}
                className={`w-12 h-12 rounded-xl border-2 overflow-hidden transition-all shadow-goa-sm ${
                  currentSelfieUrl === url
                    ? 'border-[#FF0F7B] scale-110 ring-2 ring-[#FF0F7B]'
                    : 'border-[#09562C] opacity-80 hover:opacity-100'
                }`}
              >
                <img src={url} alt={`Preset ${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tropical Sticker Decorator Selection */}
      <div className="bg-white border-2 border-[#09562C] rounded-2xl p-4 shadow-goa-md">
        <div className="font-serif font-bold text-base text-[#09562C] mb-1 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FF0F7B]" />
          <span>Apply Tropical Travel Stickers</span>
        </div>
        <p className="font-mono text-xs text-[#0E6D38] mb-3">
          Select stickers to decorate your official HH Goa builder pass.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {AVAILABLE_STICKERS.map((sticker) => {
            const isSelected = selectedStickers.includes(sticker.id);
            return (
              <button
                key={sticker.id}
                onClick={() => onStickerToggle(sticker.id)}
                className={`border-2 rounded-xl p-2.5 font-mono text-xs font-bold flex items-center justify-between transition-all shadow-goa-sm ${
                  isSelected
                    ? 'bg-[#FFD81A] border-[#09562C] text-[#09562C]'
                    : 'bg-[#F7F0DD] border-[#09562C]/40 text-[#09562C] hover:border-[#09562C]'
                }`}
              >
                <span>{sticker.name}</span>
                {isSelected && <Check className="w-4 h-4 text-[#0E6D38]" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
