import React, { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { motion } from 'motion/react';
import { Camera, Upload, Image as ImageIcon, Sparkles, CheckCircle2 } from 'lucide-react';
import { ImagePreview } from './ImagePreview';

interface UploadCardProps {
  onImageSelected: (fileData: { url: string; name: string; size: string }) => void;
  onImageRemoved: () => void;
  selectedImage: { url: string; name: string; size: string } | null;
}

export const UploadCard: React.FC<UploadCardProps> = ({
  onImageSelected,
  onImageRemoved,
  selectedImage,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const handleProcessFile = (file: File) => {
    setFileError(null);

    // Validate size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setFileError('File size exceeds 10MB limit.');
      return;
    }

    // Validate type (JPG, PNG, HEIC / HEIF / images)
    const validTypes = ['image/jpeg', 'image/png', 'image/heic', 'image/heif', 'image/webp'];
    if (!validTypes.includes(file.type) && !file.name.toLowerCase().match(/\.(jpg|jpeg|png|heic|heif|webp)$/)) {
      setFileError('Please upload a valid JPG, PNG, or HEIC image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result as string;
      if (url) {
        onImageSelected({
          url,
          name: file.name,
          size: formatFileSize(file.size),
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleProcessFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProcessFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full max-w-xl mx-auto my-2 sm:my-4"
    >
      {/* Decorative Paper Clip Graphic Top-Right */}
      <div className="absolute -top-4 right-8 w-6 h-12 bg-transparent border-4 border-[#09562C] rounded-full z-20 pointer-events-none rotate-[15deg] opacity-90" />

      {/* Passport Stamp Sticker Graphic Top-Left */}
      <div className="absolute -top-5 -left-1 sm:-left-3 px-3 py-1 bg-[#FFD81A] border-2 border-[#09562C] rounded-xl font-mono text-[10px] font-black text-[#09562C] tracking-widest uppercase rotate-[-8deg] shadow-goa-sm z-20 pointer-events-none flex items-center gap-1">
        <span>PASSPORT CHECK</span>
        <Sparkles className="w-3 h-3 text-[#FF0F7B] shrink-0" />
      </div>

      {/* Main Large Paper Card */}
      <div className="bg-[#F7F0DD] border-4 border-[#09562C] rounded-3xl p-5 sm:p-8 shadow-goa-lg relative z-10">
        {selectedImage ? (
          <ImagePreview
            imageSrc={selectedImage.url}
            fileName={selectedImage.name}
            fileSize={selectedImage.size}
            onReplace={() => fileInputRef.current?.click()}
            onRemove={onImageRemoved}
          />
        ) : (
          <div>
            {/* Upload Box Dropzone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-3 border-dashed rounded-2xl p-6 sm:p-10 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[260px] ${
                isDragging
                  ? 'border-[#FF0F7B] bg-[#FFD81A]/20 scale-[1.01]'
                  : 'border-[#09562C]/50 hover:border-[#09562C] bg-white/60 hover:bg-white/90'
              }`}
            >
              {/* Illustrated Camera / Upload Graphic */}
              <motion.div
                animate={isDragging ? { scale: [1, 1.15, 1] } : { y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#FFD81A] border-3 border-[#09562C] shadow-goa flex items-center justify-center mb-4 relative rotate-[-2deg] group-hover:rotate-0 transition-transform"
              >
                <Camera className="w-10 h-10 sm:w-12 sm:h-12 text-[#09562C]" />
                <div className="absolute -bottom-2 -right-2 p-1.5 rounded-xl bg-[#FF0F7B] border-2 border-[#09562C] text-white">
                  <Upload className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Text instructions */}
              <h3 className="font-sans font-black text-xl sm:text-2xl text-[#09562C] mb-1 flex items-center justify-center gap-2">
                <Camera className="w-5 h-5 text-[#09562C] shrink-0" />
                <span>Upload Selfie</span>
              </h3>
              <p className="font-mono text-xs sm:text-sm font-bold text-[#0E6D38] mb-3">
                or Drag & Drop your image here
              </p>

              {/* Supported formats & Max size badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono font-extrabold text-[#09562C]/80">
                <span className="px-2.5 py-0.5 rounded-full bg-[#F7F0DD] border border-[#09562C]">
                  Supported: JPG • PNG • HEIC
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FFD81A] border border-[#09562C]">
                  Max size: 10 MB
                </span>
              </div>

              {/* Mobile direct camera option badge */}
              <div className="mt-4 pt-3 border-t border-[#09562C]/20 flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    cameraInputRef.current?.click();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#09562C] text-[#FFD81A] font-mono text-xs font-bold hover:bg-[#FF0F7B] hover:text-white transition-colors"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Take Photo with Camera</span>
                </button>
              </div>
            </div>

            {/* Error Message */}
            {fileError && (
              <div className="mt-3 p-3 bg-[#FF0F7B]/10 border-2 border-[#FF0F7B] rounded-xl text-center font-mono text-xs font-bold text-[#FF0F7B]">
                ⚠️ {fileError}
              </div>
            )}
          </div>
        )}

        {/* Hidden File Inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/heic,image/heif,image/webp"
          onChange={handleFileInputChange}
          className="hidden"
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="user"
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>
    </motion.div>
  );
};
