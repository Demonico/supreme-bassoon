'use client';

import { useState } from 'react';
import NavLinks from './nav-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import MobileMenu from './mobile-menu';
import MotionButtonWrapper from '../buttons/motion-button-wrapper';
import { clientNavItems } from './nav-items';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className='hidden md:flex gap-8 font-semibold'>
        <NavLinks navData={clientNavItems} />
      </div>
      <MotionButtonWrapper>
        <div
          role='button'
          aria-label='Open mobile navigation menu'
          tabIndex={0}
          className='flex md:hidden hover:text-blue-200 transition cursor-pointer'
        >
          <FontAwesomeIcon
            icon={faBars}
            className='text-2xl'
            onClick={handleMenuClick}
          />
        </div>
      </MotionButtonWrapper>
      <MobileMenu handleMenuClick={handleMenuClick} isMenuOpen={isMenuOpen} />
    </nav>
  );
}
