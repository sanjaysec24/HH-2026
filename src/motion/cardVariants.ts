import { Variants } from 'motion/react';

export const interactiveCardVariants: Variants = {
  initial: {
    y: 0,
    rotate: 0,
    scale: 1,
  },
  hover: {
    y: -5,
    rotate: 0.5,
    scale: 1.01,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.99,
    y: -1,
  },
};

export const floatingCardVariants: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
};
