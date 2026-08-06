import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ProgressBar } from './ProgressBar';
import { RegistrationHeader } from './RegistrationHeader';
import { LivePreviewPass } from './LivePreviewPass';
import { RegistrationForm } from './RegistrationForm';
import { ContinueButton } from './ContinueButton';
import { BuilderData } from '../types';

interface RegistrationScreenProps {
  builderData: BuilderData;
  onUpdateData: (data: Partial<BuilderData>) => void;
  onBackToSelfie: () => void;
  onCompleteStep: () => void;
}

export const RegistrationScreen: React.FC<RegistrationScreenProps> = ({
  builderData,
  onUpdateData,
  onBackToSelfie,
  onCompleteStep,
}) => {
  const [errors, setErrors] = useState<{
    fullName?: string;
    builderStack?: string;
    currentRole?: string;
  }>({});

  const handleFieldChange = (field: keyof BuilderData, value: string) => {
    onUpdateData({ [field]: value });

    // Clear validation error when user types
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const isFormValid = Boolean(
    builderData.fullName?.trim() &&
      builderData.builderStack?.trim() &&
      builderData.currentRole?.trim()
  );

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const newErrors: typeof errors = {};
    if (!builderData.fullName?.trim()) {
      newErrors.fullName = "Let's add your name 😊";
    }
    if (!builderData.builderStack?.trim()) {
      newErrors.builderStack = 'Please select your primary stack 🎨';
    }
    if (!builderData.currentRole?.trim()) {
      newErrors.currentRole = 'Please pick your builder role 🚀';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onCompleteStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto px-4 py-2 sm:py-4 z-10 relative flex flex-col items-center"
    >
      {/* Top Progress Bar: Step 2 of 5 */}
      <ProgressBar
        currentStep={2}
        totalSteps={5}
        stepTitle="Builder Registration"
        onBack={onBackToSelfie}
      />

      {/* Header */}
      <RegistrationHeader />

      {/* Two-column layout on Desktop / Single-column on Mobile */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start my-4">
        {/* LEFT PANEL: Live Preview Badge Pass (5 Cols on LG) */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
          <LivePreviewPass
            builderData={builderData}
            onEditPhoto={onBackToSelfie}
          />
        </div>

        {/* RIGHT PANEL: Builder Registration Form (7 Cols on LG) */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <RegistrationForm
            builderData={builderData}
            onChange={handleFieldChange}
            onSubmit={handleSubmit}
            errors={errors}
          />
        </div>
      </div>

      {/* Continue Button */}
      <div className="w-full flex flex-col items-center mt-2">
        <ContinueButton
          isEnabled={isFormValid}
          onClick={handleSubmit}
          label="Continue →"
        />

        {/* Bottom Note */}
        <div className="mt-2 font-mono text-xs font-black text-[#0E6D38] flex items-center justify-center gap-1.5 bg-[#FFD81A]/60 px-4 py-1.5 rounded-full border border-[#09562C] shadow-goa-sm text-center">
          <Sparkles className="w-3.5 h-3.5 text-[#FF0F7B] shrink-0" />
          <span>✨ Your Builder Title will be generated in the next step.</span>
        </div>
      </div>
    </motion.div>
  );
};
