import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'footer';
  brandName?: string;
  brandTagline?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  brandName = 'دار السنديان',
  brandTagline = 'أتيليه النجارة المعمارية والأثاث المصنوع يدوياً',
  className = '',
}) => {
  const isFooter = variant === 'footer';

  return (
    <span className={`inline-flex items-center gap-3 whitespace-nowrap shrink-0 ${className}`}>
      {/* Custom Architectural Dovetail & Octagonal Joinery Emblem */}
      <svg
        width={isFooter ? 40 : 32}
        height={isFooter ? 40 : 32}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`shrink-0 ${
          isFooter
            ? 'text-[#E8DFD1]'
            : 'text-[#16382E] dark:text-[#E8DFD1]'
        }`}
      >
        {/* Outer Chamfered Timber Frame */}
        <path
          d="M12 3H28L37 12V28L28 37H12L3 28V12L12 3Z"
          stroke="currentColor"
          strokeWidth="1.85"
        />
        {/* Interlocking Dovetail & Tenon Geometry */}
        <path
          d="M20 7L26.5 13.5L23.5 16.5L20 13L16.5 16.5L13.5 13.5L20 7Z"
          fill="#C68B2C"
        />
        <path
          d="M20 33L13.5 26.5L16.5 23.5L20 27L23.5 23.5L26.5 26.5L20 33Z"
          fill="#C68B2C"
        />
        <path
          d="M7 20L13.5 13.5L16.5 16.5L13 20L16.5 23.5L13.5 26.5L7 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M33 20L26.5 26.5L23.5 23.5L27 20L23.5 16.5L26.5 13.5L33 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="18"
          y="18"
          width="4"
          height="4"
          transform="rotate(45 20 20)"
          fill="currentColor"
        />
      </svg>

      {isFooter ? (
        <span className="flex flex-col">
          <span className="font-display text-2xl font-bold tracking-tight text-[#F7F4EE]">
            {brandName}
          </span>
          <span className="text-xs text-[#C2B8A9]">{brandTagline}</span>
        </span>
      ) : (
        <span className="font-display text-xl font-bold tracking-tight text-[#16382E] dark:text-[#F5EFE6]">
          {brandName}
        </span>
      )}
    </span>
  );
};
