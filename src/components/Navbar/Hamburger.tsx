'use client';

import { MotionConfig, motion } from 'framer-motion';
import { useState } from 'react';

export default function Hamburger() {
  const [active, setActive] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
    >
      <motion.button
        initial={false}
        animate={active ? 'open' : 'closed'}
        onClick={() => setActive(pv => !pv)}
        className='relative block h-12  w-12 sm:hidden'
      >
        <motion.span
          variants={VARIANTS.top}
          className='absolute h-1 w-10 bg-foreground'
          style={{ y: '-50%', left: '50%', x: '-50%', top: '35%' }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className='absolute h-1 w-10 bg-foreground'
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className='absolute h-1 w-5 bg-foreground'
          style={{
            x: '-50%',
            y: '50%',
            bottom: '35%',
            left: 'calc(50% + 10px)'
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%']
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%']
    }
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg']
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg']
    }
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['35%', '50%', '50%'],
      left: '50%'
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '35%'],
      left: 'calc(50% + 10px)'
    }
  }
};
