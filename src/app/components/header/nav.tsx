'use client';

import { useState } from 'react';
import NavLinks from './NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import MobileMenu from './MobileMenu';
import MotionButtonWrapper from '../buttons/MotionButtonWrapper';
import { clientNavItems } from './navItems';

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
