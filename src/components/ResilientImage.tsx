import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  titleFallback?: string;
  className?: string;
  objectPosition?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  titleFallback,
  className = '',
  objectPosition = 'center center',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#23211E] via-[#1B1917] to-[#2C251D] p-6 text-center text-[#F8F8F6] ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-3 opacity-70"
          aria-hidden="true"
        >
          <path
            d="M12 4H28L36 12V28L28 36H12L4 28V12L12 4Z"
            stroke="#B47B2B"
            strokeWidth="1.5"
          />
          <path
            d="M20 11L25 16L20 21L15 16L20 11Z"
            stroke="#F8F8F6"
            strokeWidth="1.5"
          />
        </svg>
        <span className="font-display text-base font-bold text-[#F8F8F6]">
          {titleFallback || 'دار السنديان'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      style={{ objectPosition }}
      className={className}
    />
  );
};
