import React, { useState, useEffect } from 'react';

interface AnimatedBatProps {
  alt: string;
  direction: 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedBat: React.FC<AnimatedBatProps> = ({ 
  alt, 
  direction, 
  className = '', 
  style = {} 
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  
  // Bat animation frames
  const batFrames = [
    '/bat1.png',  // Первое изображение
    '/bat2.png',  // Второе изображение  
    '/bat3.png'   // Третье изображение
  ];
  
  // Change frame every 150ms for bat animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame(prev => (prev + 1) % batFrames.length);
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <img
      src={batFrames[currentFrame]}
      alt={alt}
      className={`${className} ${direction === 'left' ? 'scale-x-[-1]' : ''}`}
      style={{
        ...style,
        imageRendering: 'pixelated'
      }}
    />
  );
};

export default AnimatedBat;
