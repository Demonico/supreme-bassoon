'use client';

import { useEffect, useRef } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLinks from './nav-links';
import { AnimatePresence, motion } from 'framer-motion';
import MotionButtonWrapper from '../buttons/motion-button-wrapper';
import { clientMobileNavItems } from './nav-items';

interface MobileMenuProps {
  handleMenuClick: () => void;
  isMenuOpen: boolean;
}

export default function MobileMenu({
  handleMenuClick,
  isMenuOpen,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleMenuClick();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleMenuClick]);

  return (
    <AnimatePresence mode='wait'>
      {isMenuOpen && (
        <>
          <div className='w-full h-full fixed top-0 left-0 z-10 bg-black/30' />
          <motion.div
            key='mobile-menu'
            initial={{ opacity: 0, x: 224 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            exit={{
              opacity: 0,
              x: 224,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            ref={menuRef}
            aria-label='Mobile navigation menu'
            className='fixed top-0 right-0 z-20 bg-blue-900 bg-opacity-90 w-52 h-full'
          >
            <MotionButtonWrapper>
              <div
                role='button'
                aria-label='Close mobile navigation menu'
                tabIndex={0}
                className='flex justify-end pt-5 pr-6 text-2xl cursor-pointer hover:text-blue-200 text-white group'
              >
                <FontAwesomeIcon icon={faClose} onClick={handleMenuClick} />
              </div>
            </MotionButtonWrapper>
            <div className='flex flex-col gap-8 p-6 font-semibold text-white transition'>
              <NavLinks navData={clientMobileNavItems} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
