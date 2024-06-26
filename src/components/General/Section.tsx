'use client';
import { useColorAnimation } from '@/hooks/useColorAnimation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  animate?: boolean;
};

function Section({ children, className, animate = false }: Props) {
  const { backgroundImage } = useColorAnimation();

  const SectionVariants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.6
      }
    }
  };

  return (
    <motion.section
      className={cn(
        `
      mx-auto flex h-screen w-screen
      flex-col items-start justify-center p-8
      `,
        className
      )}
      variants={SectionVariants}
      initial={'initial'}
      whileInView={'animate'}
      style={
        animate
          ? {
              backgroundImage
            }
          : {}
      }
    >
      {children}
    </motion.section>
  );
}

export default Section;
