import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroIllustration } from './components/HeroIllustration';
import { HeroContent } from './components/HeroContent';
import { ScrollIndicator } from './components/ScrollIndicator';
import { BackgroundDecoration } from './components/BackgroundDecoration';
import { AboutModal } from './components/AboutModal';
import { HowItWorksModal } from './components/HowItWorksModal';
import { Footer } from './components/Footer';

// Screen 2 Components
import { ProgressBar } from './components/ProgressBar';
import { WelcomeHeader } from './components/WelcomeHeader';
import { UploadCard } from './components/UploadCard';
import { UploadTips } from './components/UploadTips';
import { ContinueButton } from './components/ContinueButton';

// Screen 3 Component
import { RegistrationScreen } from './components/RegistrationScreen';

// Screen 4 Component
import { GenerationScreen } from './components/GenerationScreen';

// Screen 5 Component
import { PassRevealScreen } from './components/PassRevealScreen';

import { pageVariants } from './motion/pageVariants';
import { BuilderData } from './types';

export default function App() {
  // Screen state: 1 = Landing, 2 = Upload Selfie, 3 = Builder Registration, 4 = Identity Printing, 5 = Official Pass Reveal
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState<boolean>(false);

  // Global Check-In Builder Data State
  const [builderData, setBuilderData] = useState<BuilderData>({
    selfieUrl: '',
    selfieName: '',
    selfieSize: '',
    fullName: '',
    builderStack: '',
    currentRole: '',
    city: '',
    oneWord: '',
    builderTitle: '',
  });

  const handleStartCheckIn = () => {
    setCurrentScreen(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImageSelected = (fileData: { url: string; name: string; size: string }) => {
    setBuilderData((prev) => ({
      ...prev,
      selfieUrl: fileData.url,
      selfieName: fileData.name,
      selfieSize: fileData.size,
    }));
  };

  const handleImageRemoved = () => {
    setBuilderData((prev) => ({
      ...prev,
      selfieUrl: '',
      selfieName: '',
      selfieSize: '',
    }));
  };

  const handleUpdateBuilderData = (updates: Partial<BuilderData>) => {
    setBuilderData((prev) => ({ ...prev, ...updates }));
  };

  const handleGoToScreen3 = () => {
    setCurrentScreen(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteScreen3 = () => {
    setCurrentScreen(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateBuilderTitle = (title: string) => {
    setBuilderData((prev) => ({ ...prev, builderTitle: title }));
  };

  const handleCompleteGeneration = () => {
    setCurrentScreen(5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestartCheckIn = () => {
    setBuilderData({
      selfieUrl: '',
      selfieName: '',
      selfieSize: '',
      fullName: '',
      builderStack: '',
      currentRole: '',
      city: '',
      oneWord: '',
      builderTitle: '',
    });
    setCurrentScreen(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F0DD] text-[#09562C] font-sans relative flex flex-col justify-between overflow-x-hidden selection:bg-[#FFD81A] selection:text-[#09562C]">
      {/* Background Decoratives & Texture */}
      <BackgroundDecoration />

      {/* Top Navigation */}
      <Navbar
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
      />

      {/* MAIN SCREEN ROUTER WITH ANIMATE PRESENCE */}
      <AnimatePresence mode="wait">
        {currentScreen === 1 && (
          /* SCREEN 1: LANDING */
          <motion.main
            key="screen-1"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-1 flex flex-col justify-center items-center py-2 sm:py-4 px-4 z-10 relative w-full"
          >
            <HeroIllustration />
            <HeroContent
              onStartCheckIn={handleStartCheckIn}
              onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
            />
          </motion.main>
        )}

        {currentScreen === 2 && (
          /* SCREEN 2: UPLOAD SELFIE CHECK-IN */
          <motion.main
            key="screen-2"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-1 flex flex-col justify-center items-center py-2 sm:py-4 px-4 z-10 relative w-full max-w-4xl mx-auto"
          >
            {/* Top Progress Bar: Step 1 of 5 */}
            <ProgressBar
              currentStep={1}
              totalSteps={5}
              stepTitle="Builder Check-In"
              onBack={() => setCurrentScreen(1)}
            />

            {/* Welcome Header */}
            <WelcomeHeader />

            {/* Large Upload Card */}
            <UploadCard
              onImageSelected={handleImageSelected}
              onImageRemoved={handleImageRemoved}
              selectedImage={
                builderData.selfieUrl
                  ? {
                      url: builderData.selfieUrl,
                      name: builderData.selfieName || 'selfie.jpg',
                      size: builderData.selfieSize || '1.8 MB',
                    }
                  : null
              }
            />

            {/* Upload Tips */}
            <UploadTips />

            {/* Continue Button */}
            <ContinueButton
              isEnabled={Boolean(builderData.selfieUrl)}
              onClick={handleGoToScreen3}
              label="Continue →"
            />
          </motion.main>
        )}

        {currentScreen === 3 && (
          /* SCREEN 3: BUILDER REGISTRATION */
          <motion.main
            key="screen-3"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-1 flex flex-col justify-center items-center z-10 relative w-full"
          >
            <RegistrationScreen
              builderData={builderData}
              onUpdateData={handleUpdateBuilderData}
              onBackToSelfie={() => setCurrentScreen(2)}
              onCompleteStep={handleCompleteScreen3}
            />
          </motion.main>
        )}

        {currentScreen === 4 && (
          /* SCREEN 4: BUILDER IDENTITY & PASS GENERATION */
          <motion.main
            key="screen-4"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-1 flex flex-col justify-center items-center z-10 relative w-full"
          >
            <GenerationScreen
              builderData={builderData}
              onUpdateBuilderTitle={handleUpdateBuilderTitle}
              onBackToForm={() => setCurrentScreen(3)}
              onCompleteGeneration={handleCompleteGeneration}
            />
          </motion.main>
        )}

        {currentScreen === 5 && (
          /* SCREEN 5: OFFICIAL BUILDER PASS REVEAL */
          <motion.main
            key="screen-5"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex-1 flex flex-col justify-center items-center z-10 relative w-full"
          >
            <PassRevealScreen
              builderData={builderData}
              onEditDetails={() => setCurrentScreen(3)}
              onRestartCheckIn={handleRestartCheckIn}
            />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Footer Scroll Indicator on Landing */}
      {currentScreen === 1 && (
        <div className="z-10 relative pb-2">
          <ScrollIndicator />
        </div>
      )}

      {/* Global Application Footer */}
      <Footer />

      {/* Modals */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onStartCheckIn={handleStartCheckIn}
      />
    </div>
  );
}
