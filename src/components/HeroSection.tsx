import React from 'react';
import { ArrowDownLeft, ArrowDownRight, Play } from 'lucide-react';
import { HERO_MEDIA } from '../data/atelierData';
import type { LocalizedContent } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  t: LocalizedContent;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t }) => {
  const isRtl = t.dir === 'rtl';

  return (
    <section
      id="atelier"
      className="border-b border-[#E2DACB] bg-[#F7F4EE] transition-colors duration-200 dark:border-[#2E241E] dark:bg-[#120E0B]"
    >
      <div className="mx-auto max-w-[1360px] px-6 py-14 md:px-10 lg:py-20">
        {/* Split-Screen Hero: Equal height stretched columns */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Typographic Hierarchy Column */}
          <div className="flex flex-col justify-between lg:col-span-5 lg:py-4">
            <div>
              <p className="mb-4 text-sm font-semibold text-[#16382E] dark:text-[#E8B86D]">
                {t.hero.kicker}
              </p>

              <h1 className="font-display text-4xl leading-[1.2] font-bold tracking-tight text-[#1C1612] text-balance dark:text-[#F7F4EE] sm:text-5xl lg:text-[3.25rem]">
                {t.hero.headline}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-[1.75] text-[#4E4136] dark:text-[#D1C5B7] sm:text-[17px]">
                {t.hero.lead}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#gallery"
                className="inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-[#16382E] px-6 py-3 text-sm font-medium text-[#F7F4EE] transition-colors duration-150 hover:bg-[#1E4B3E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16382E] dark:bg-[#C68B2C] dark:text-[#17110D] dark:hover:bg-[#E8B86D]"
              >
                <span>{t.hero.ctaPrimary}</span>
                {isRtl ? (
                  <ArrowDownLeft className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                )}
              </a>

              <a
                href="#video-slider"
                className="inline-flex min-h-[44px] shrink-0 items-center gap-2.5 whitespace-nowrap rounded-lg border border-[#D4C8B4] bg-white px-5 py-3 text-sm font-medium text-[#1C1612] transition-colors duration-150 hover:border-[#C68B2C] hover:text-[#16382E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16382E] dark:border-[#352921] dark:bg-[#1B1511] dark:text-[#F5EFE6] dark:hover:border-[#E8B86D] dark:hover:text-[#E8B86D]"
              >
                <Play className="h-4 w-4 fill-current text-[#C68B2C]" aria-hidden="true" />
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>
          </div>

          {/* Dominant Visual Anchor Column */}
          <div className="lg:col-span-7">
            <figure className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-[#DFD6C5] bg-[#1B1410] dark:border-[#352921] sm:min-h-[420px] lg:min-h-[500px]">
              <ResilientImage
                src={HERO_MEDIA.image}
                alt={t.hero.caption}
                titleFallback={t.brandName}
                className="h-full w-full object-cover lg:h-full"
                objectPosition="center 30%"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17110D]/80 via-[#17110D]/15 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-6 py-4 text-xs text-[#F5EFE6] sm:text-sm">
                <span>{t.hero.caption}</span>
                <span className="hidden shrink-0 font-mono text-xs text-[#E8B86D] sm:inline">
                  {t.hero.specBadge}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width 4-Column Craft Metrics Strip */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#E2DACB] pt-8 dark:border-[#2E241E] lg:grid-cols-4 lg:gap-8">
          {t.hero.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-[#16382E] tabular-nums dark:text-[#E8B86D] sm:text-[2.15rem]">
                {metric.value}
              </span>
              <span className="text-sm text-[#5C4D40] dark:text-[#C7BBAE]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
