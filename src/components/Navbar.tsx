import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import type { LocalizedContent } from '../data/translations';

interface NavbarProps {
  t: LocalizedContent;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ t, onOpenConsultation }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#video-slider', label: t.nav.videoSlider },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#craft', label: t.nav.craft },
    { href: '#testimonials', label: t.nav.testimonials },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#E2DACB] bg-[#F7F4EE]/95 backdrop-blur-sm transition-colors duration-200 dark:border-[#2E241E] dark:bg-[#120E0B]/95">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-8 px-6 py-3.5 md:px-10">
        {/* Zone 1: Single-element Brand Wordmark + Custom SVG Mark */}
        <a
          href="#top"
          className="shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16382E] dark:focus-visible:outline-[#E8B86D]"
          aria-label={t.brandName}
        >
          <BrandLogo variant="header" brandName={t.brandName} />
        </a>

        {/* Zone 2: 4 Concise single-line navigation links */}
        <nav
          aria-label={t.footer.sectionsTitle}
          className="hidden items-center gap-7 text-sm font-medium text-[#5C4D40] dark:text-[#C7BBAE] md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap py-1 transition-colors duration-150 hover:text-[#16382E] hover:underline hover:underline-offset-8 hover:decoration-[#C68B2C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#16382E] dark:hover:text-[#E8B86D] dark:focus-visible:outline-[#E8B86D]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="hidden min-h-[40px] shrink-0 whitespace-nowrap rounded-lg bg-[#16382E] px-5 py-2 text-sm font-medium text-[#F7F4EE] transition-colors duration-150 hover:bg-[#C68B2C] hover:text-[#17110D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16382E] dark:bg-[#C68B2C] dark:text-[#17110D] dark:hover:bg-[#E8B86D] sm:inline-flex sm:items-center"
          >
            {t.nav.requestConsult}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E2DACB] text-[#16382E] transition-colors hover:bg-[#EDE7DC] dark:border-[#352921] dark:text-[#E8DFD1] dark:hover:bg-[#231B16] md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E2DACB] bg-[#F7F4EE] px-6 py-4 dark:border-[#2E241E] dark:bg-[#120E0B] md:hidden">
          <nav className="flex flex-col gap-3" aria-label={t.footer.sectionsTitle}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center border-b border-[#E2DACB]/70 text-base font-medium text-[#1C1612] last:border-b-0 dark:border-[#2E241E] dark:text-[#F5EFE6]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenConsultation();
              }}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#16382E] px-5 py-2.5 text-sm font-medium text-[#F7F4EE] hover:bg-[#C68B2C] hover:text-[#17110D] dark:bg-[#C68B2C] dark:text-[#17110D]"
            >
              {t.nav.requestConsult}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
