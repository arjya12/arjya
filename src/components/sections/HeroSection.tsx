'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';
import { SocialLinks } from '@/components/ui/SocialLinks';

// Configuration for hero text typing animation
// - typingSpeed: ms per character for the typing effect
const CONFIG = {
  typingSpeed: 55,
} as const;

export const HeroSection = () => {
  // Accessible, performant typing state
  const fullHeading = "hey, I'm arjya.";
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [isCursorBlinking, setIsCursorBlinking] = useState(true);

  const typingIntervalRef = useRef<number | null>(null);
  const blinkIntervalRef = useRef<number | null>(null);

  // Respect prefers-reduced-motion to disable animations
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    try {
      media.addEventListener?.('change', update);
    } catch {
      media.addListener?.(update);
    }
    return () => {
      try {
        media.removeEventListener?.('change', update);
      } catch {
        media.removeListener?.(update);
      }
    };
  }, []);

  // Typing effect: run on every page load
  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedText(fullHeading);
      setIsTypingComplete(true);
      setIsCursorBlinking(false);
      return;
    }

    // Reset animation state before starting
    setTypedText('');
    setIsTypingComplete(false);
    setIsCursorBlinking(true);

    let index = 0;
    typingIntervalRef.current = window.setInterval(() => {
      index += 1;
      setTypedText(fullHeading.slice(0, index));
      if (index >= fullHeading.length) {
        if (typingIntervalRef.current)
          window.clearInterval(typingIntervalRef.current);
        setIsTypingComplete(true);
        setIsCursorBlinking(true); // keep blinking after complete
      }
    }, CONFIG.typingSpeed);

    return () => {
      if (typingIntervalRef.current)
        window.clearInterval(typingIntervalRef.current);
    };
  }, [prefersReducedMotion]);

  // Cursor blink: 400ms during typing, 800ms after typing
  useEffect(() => {
    if (prefersReducedMotion || !isCursorBlinking) return;
    const intervalMs = isTypingComplete ? 800 : 100;
    blinkIntervalRef.current = window.setInterval(() => {
      setIsCursorVisible((v) => !v);
    }, intervalMs);
    return () => {
      if (blinkIntervalRef.current)
        window.clearInterval(blinkIntervalRef.current);
    };
  }, [prefersReducedMotion, isCursorBlinking, isTypingComplete]);

  // (Fun facts removed)
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
          >
            {/* Typing animation heading. Title kept for tooltips; live region avoided to prevent SR spam. */}
            <span title="Greeting heading">{typedText}</span>
            <span
              aria-hidden="true"
              className="select-none"
              style={{
                display: 'inline-block',
                width: '0.5ch',
                opacity: isCursorBlinking ? (isCursorVisible ? 1 : 0) : 1,
              }}
            >
              |
            </span>
          </motion.h1>

          {/* (Fun facts removed) */}
          {personalInfo.education && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="-mt-2 mb-2 flex w-full justify-center text-lg text-gray-700 dark:text-gray-300 md:text-xl"
            >
              {personalInfo.education}
            </motion.p>
          )}
          {/* removed optional title line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-3 flex w-full justify-center text-lg text-gray-700 dark:text-gray-300 md:text-xl"
          >
            {personalInfo.location && (
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {personalInfo.location}
              </span>
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 flex w-full justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection('projects')}
              variant="primary"
              size="lg"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
        >
          <ChevronDown className="h-8 w-8 animate-bounce text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};
