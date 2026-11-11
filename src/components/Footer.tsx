import React from 'react';
import { BrandLogo } from './BrandLogo';
import type { LocalizedContent } from '../data/translations';

interface FooterProps {
  t: LocalizedContent;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenConsultation }) => {
  return (
    <footer className="border-t border-[#2E241E] bg-[#17110D] text-[#E8DFD1] dark:border-[#241B15] dark:bg-[#0B0806]">
      <div className="mx-auto max-w-[1360px] px-6 py-14 md:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-[#2E241E] pb-10 dark:border-[#241B15] md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandLogo
              variant="footer"
              brandName={t.brandName}
              brandTagline={t.brandTagline}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#C2B8A9]">
              {t.footer.about}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-[#F7F4EE]">
              {t.footer.sectionsTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#C2B8A9]">
              <li>
                <a href="#gallery" className="transition-colors hover:text-[#E8B86D]">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#video-slider" className="transition-colors hover:text-[#E8B86D]">
                  {t.nav.videoSlider}
                </a>
              </li>
              <li>
                <a href="#craft" className="transition-colors hover:text-[#E8B86D]">
                  {t.nav.craft}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition-colors hover:text-[#E8B86D]">
                  {t.nav.testimonials}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-[#F7F4EE]">
              {t.footer.workshopTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#C2B8A9]">
              <li>{t.footer.address}</li>
              <li>{t.footer.hours}</li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="font-medium text-[#E8B86D] hover:underline hover:underline-offset-4"
                >
                  {t.footer.bookVisit}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-[#9C8E7E] sm:flex-row sm:items-center">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.madeWith}</span>
        </div>
      </div>
    </footer>
  );
};
