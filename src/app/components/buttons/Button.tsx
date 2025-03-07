'use client';

import { ReactNode } from 'react';
import MotionButtonWrapper from './MotionButtonWrapper';

interface ButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fontWeight: 'regular' | 'medium' | 'semibold' | 'bold';
}

export default function Button({
  children,
  size = 'md',
  fontWeight = 'semibold',
}: ButtonProps) {
  const sizeClasses = {
    sm: 'text-base py-1 px-2',
    md: 'text-lg py-2 px-4',
    lg: 'text-xl py-3 px-6',
    xl: 'text-2xl py-3 px-6',
  };

  const weightClasses = {
    regular: 'font-regular',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <MotionButtonWrapper>
      <button
        className={`bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-800 transition cursor-pointer ${sizeClasses[size]} ${weightClasses[fontWeight]}`}
      >
        {children}
      </button>
    </MotionButtonWrapper>
  );
}
