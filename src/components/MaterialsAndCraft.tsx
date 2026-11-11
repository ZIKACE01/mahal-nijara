import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { LocalizedContent } from '../data/translations';

interface MaterialsAndCraftProps {
  t: LocalizedContent;
  onOpenConsultation: (defaultWood?: string) => void;
}

export const MaterialsAndCraft: React.FC<MaterialsAndCraftProps> = ({
  t,
  onOpenConsultation,
}) => {
  const [activeWoodId, setActiveWoodId] = useState(t.craft.specimens[0].id);
  const selectedWood =
    t.craft.specimens.find((w) => w.id === activeWoodId) || t.craft.specimens[0];
  const isRtl = t.dir === 'rtl';

  return (
    <>
      {/* Section 3: Craft Philosophy & Interactive Wood Species Lab */}
      <section
        id="craft"
        className="bg-[#F7F4EE] py-16 transition-colors duration-200 dark:bg-[#120E0B] lg:py-24"
      >
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          {/* Editorial 3-Column Methodology */}
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold text-[#16382E] dark:text-[#E8B86D]">
              {t.craft.kicker}
            </p>
            <h2 className="font-display text-3xl font-bold text-[#1C1612] text-balance dark:text-[#F7F4EE] sm:text-4xl">
              {t.craft.title}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#E2DACB] pt-10 dark:border-[#2E241E] md:grid-cols-3 lg:gap-12">
            {t.craft.principles.map((item) => (
              <div key={item.index} className="flex flex-col">
                <span className="font-mono text-sm font-semibold text-[#C68B2C] tabular-nums">
                  {item.index}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-[#16382E] dark:text-[#E8B86D]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-[#4E4136] dark:text-[#C7BBAE] sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Wood Species Specimen Selector */}
          <div className="mt-16 rounded-2xl border border-[#DFD6C5] bg-white p-6 transition-colors duration-200 dark:border-[#332820] dark:bg-[#1B1511] sm:p-10">
            <div className="flex flex-col justify-between gap-6 border-b border-[#EFE8DA] pb-6 dark:border-[#2E241E] lg:flex-row lg:items-center">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#1C1612] dark:text-[#F5EFE6]">
                  {t.craft.labTitle}
                </h3>
                <p className="mt-1 text-sm text-[#5C4D40] dark:text-[#B8AA9B]">
                  {t.craft.labSubtitle}
                </p>
              </div>

              <div
                role="tablist"
                aria-label={t.craft.labAria}
                className="flex flex-wrap gap-2"
              >
                {t.craft.specimens.map((wood) => {
                  const isActive = wood.id === selectedWood.id;
                  return (
                    <button
                      key={wood.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveWoodId(wood.id)}
                      className={`inline-flex min-h-[40px] items-center gap-2.5 rounded-lg border px-4 py-2 text-xs font-medium transition-colors sm:text-sm ${
                        isActive
                          ? 'border-[#16382E] bg-[#16382E] text-[#F7F4EE] dark:border-[#C68B2C] dark:bg-[#C68B2C] dark:text-[#17110D]'
                          : 'border-[#DFD6C5] bg-[#F7F4EE] text-[#1C1612] hover:border-[#C68B2C] dark:border-[#352921] dark:bg-[#140F0C] dark:text-[#E8DFD1] dark:hover:border-[#C68B2C]'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-3 w-3 rounded-sm ${wood.toneClass}`}
                      />
                      <span className="whitespace-nowrap">{wood.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Specimen Details */}
            <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div
                  className={`relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-xl p-6 text-white ${selectedWood.toneClass}`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(12deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 2px, transparent 2px, transparent 11px)',
                    }}
                  />
                  <div className="relative z-10">
                    <span className="text-xs text-white/85">{selectedWood.origin}</span>
                    <h4 className="mt-1 font-display text-2xl font-bold">
                      {selectedWood.name}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <p className="text-base leading-[1.8] text-[#3B3027] dark:text-[#D8CEC0]">
                  {selectedWood.description}
                </p>

                <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-[#EFE8DA] pt-6 dark:border-[#2E241E] sm:grid-cols-3">
                  <div>
                    <dt className="text-xs text-[#6B5A4C] dark:text-[#A89A8B]">
                      {t.craft.densityLabel}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-[#16382E] tabular-nums dark:text-[#E8B86D]">
                      {selectedWood.densityKg}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#6B5A4C] dark:text-[#A89A8B]">
                      {t.craft.dryingLabel}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-[#1C1612] dark:text-[#F5EFE6]">
                      {selectedWood.dryingTime}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#6B5A4C] dark:text-[#A89A8B]">
                      {t.craft.grainLabel}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-[#1C1612] dark:text-[#F5EFE6]">
                      {selectedWood.grainPattern}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#EFE8DA] pt-5 dark:border-[#2E241E]">
                  <div className="text-xs text-[#5C4D40] dark:text-[#C7BBAE] sm:text-sm">
                    <span className="font-semibold text-[#1C1612] dark:text-[#F5EFE6]">
                      {t.craft.idealForLabel}{' '}
                    </span>
                    {selectedWood.idealFor}
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(selectedWood.name)}
                    className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[#16382E] hover:text-[#9E6A1A] hover:underline hover:underline-offset-4 dark:text-[#E8B86D] dark:hover:text-[#F5EFE6]"
                  >
                    <span>{t.craft.requestWithWood}</span>
                    {isRtl ? (
                      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Attributable Testimonials & Direct Custom Commission Banner */}
      <section
        id="testimonials"
        className="border-t border-[#E2DACB] bg-[#EDE7DC]/75 py-16 transition-colors duration-200 dark:border-[#2E241E] dark:bg-[#17110D] lg:py-24"
      >
        <div className="mx-auto max-w-[1360px] px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold text-[#16382E] dark:text-[#E8B86D]">
              {t.testimonials.kicker}
            </p>
            <h2 className="font-display text-3xl font-bold text-[#1C1612] text-balance dark:text-[#F7F4EE] sm:text-4xl">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {t.testimonials.items.map((item) => (
              <blockquote
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-[#DFD6C5] bg-white p-8 dark:border-[#332820] dark:bg-[#1B1511]"
              >
                <p className="text-base leading-[1.85] text-[#2D241C] dark:text-[#D8CEC0]">
                  «{item.quote}»
                </p>

                <footer className="mt-6 border-t border-[#EFE8DA] pt-5 dark:border-[#2E241E]">
                  <div className="font-display text-lg font-bold text-[#16382E] dark:text-[#E8B86D]">
                    {item.name}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#6B5A4C] dark:text-[#A89A8B]">
                    <span>{item.role}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.project}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Direct Custom Commission Invitation in Deep Cedar Emerald */}
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#16382E] px-8 py-10 text-[#F7F4EE] dark:border dark:border-[#255446] dark:bg-[#102A22] lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                {t.testimonials.bannerTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#D7E4DE] sm:text-base">
                {t.testimonials.bannerSubtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenConsultation()}
              className="min-h-[44px] shrink-0 whitespace-nowrap rounded-lg bg-[#C68B2C] px-6 py-3 text-sm font-semibold text-[#17110D] transition-colors hover:bg-[#D89F3F]"
            >
              {t.testimonials.bannerCta}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
