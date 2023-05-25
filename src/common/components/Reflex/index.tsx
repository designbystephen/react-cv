import React from 'react'
import { ScreenSizeVariants } from '../../../styles/variants';
import './index.css';

type ReflexProps = {
  children: React.ReactNode,
  size?: `${ScreenSizeVariants}`,
  className?: string,
};


function Reflex({children, size, className }: ReflexProps) {
  const modifier = size ? `reflex--${size}` : '';

  return (
    <div className={`reflex ${modifier} ${className}`}>
      {children}
    </div>
  )
}

export default Reflex;

