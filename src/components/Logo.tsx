import React from 'react';
import logo from '../assets/logo.png';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const dimensions = {
    small: 'h-8',      // 32px
    medium: 'h-12',    // 48px
    large: 'h-16',     // 64px
    xlarge: 'h-20'     // 80px
  };

  return (
    <div className={`${dimensions[size]} ${className} flex items-center`}>
      <img 
        src={logo}
        alt="Boledi Management Consultancy Group" 
        className="h-full w-auto object-contain max-w-full"
      />
    </div>
  );
};

export default Logo;