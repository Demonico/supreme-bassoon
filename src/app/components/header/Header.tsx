'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className='flex items-center justify-between h-16 bg-blue-800 text-white pl-4 pr-6 md:px-8'>
      <motion.div
        className='group'
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
          transformOrigin: 'center',
        }}
        whileTap={{ scale: 0.9, transformOrigin: 'center' }}
      >
        <Link href='/'>
          <div className='flex'>
            <div>
              <Image
                src='/images/small-roof-logo.svg'
                alt='Small white logo with roof and four circles underneath with a lightning bolt, flame, snowflake and water droplet.'
                width={49}
                height={24}
              />
            </div>
            <span className='pl-2 text-xl md:text-2xl font-semibold'>
              DSD Services
            </span>
          </div>
        </Link>
      </motion.div>
      <Nav />
    </header>
  );
}
