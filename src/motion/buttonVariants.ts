import { Variants } from 'motion/react';

export const primaryButtonVariants: Variants = {
  initial: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.03,
    y: -3,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.97,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
    },
  },
};

export const pulseButtonVariants: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatDelay: 6.8, // Total cycle 8s
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.04,
    y: -3,
  },
  tap: {
    scale: 0.96,
  },
};
