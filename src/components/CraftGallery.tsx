import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import type { CraftCategory, CraftWork } from '../data/atelierData';
import type { LocalizedContent } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface CraftGalleryProps {
  t: LocalizedContent;
}

export const CraftGallery: React.FC<CraftGalleryProps> = ({ t }) => {
  const [activeFilter, setActiveFilter] = useState<CraftCategory>('all');
  const [selectedWorkId, setSelectedWorkId] = useState<string | null>(null);

  const filteredWorks =
    activeFilter === 'all'
      ? t.gallery.works
      : t.gallery.works.filter((item) => item.category === activeFilter);

  const selectedWork: CraftWork | null = selectedWorkId
    ? t.gallery.works.find((w) => w.id === selectedWorkId) || null
    : null;

  useEffect(() => {
    if (!selectedWork) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedWorkId(null);
      } else if (event.key === 'ArrowLeft') {
        const currentIndex = filteredWorks.findIndex((w) => w.id === selectedWork.id);
        if (currentIndex !== -1) {
          const next = filteredWorks[(currentIndex + 1) % filteredWorks.length];
          setSelectedWorkId(next.id);
        }
      } else if (event.key === 'ArrowRight') {
        const currentIndex = filteredWorks.findIndex((w) => w.id === selectedWork.id);
        if (currentIndex !== -1) {
          const prev =
            filteredWorks[(currentIndex - 1 + filteredWorks.length) % filteredWorks.length];
          setSelectedWorkId(prev.id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWork, filteredWorks]);

  const stepSelected = (direction: 1 | -1) => {
    if (!selectedWork) return;
    const currentIndex = filteredWorks.findIndex((w) => w.id === selectedWork.id);
    if (currentIndex === -1) return;
    const nextIndex =
      (currentIndex + direction + filteredWorks.length) % filteredWorks.length;
    setSelectedWorkId(filteredWorks[nextIndex].id);
  };

  const isRtl = t.dir === 'rtl';

  return (
    <section
      id="gallery"
      className="bg-[#F7F4EE] py-16 transition-colors duration-200 dark:bg-[#120E0B] lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        {/* Section Heading & Filter Tabs */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E2DACB] pb-8 dark:border-[#2E241E] lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold text-[#16382E] dark:text-[#E8B86D]">
              {t.gallery.kicker}
            </p>
            <h2 className="font-display text-3xl font-bold text-[#1C1612] text-balance dark:text-[#F7F4EE] sm:text-4xl">
              {t.gallery.title}
            </h2>
          </div>

          {/* Interactive Segmented Filter Controls */}
          <div
            role="tablist"
            aria-label={t.gallery.filterAria}
            className="flex flex-wrap items-center gap-1 rounded-xl bg-[#EDE7DC] p-1 dark:bg-[#1D1612]"
          >
            {t.gallery.filters.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`min-h-[38px] shrink-0 whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 sm:text-sm ${
                    isActive
                      ? 'bg-[#16382E] text-[#F7F4EE] shadow-sm dark:bg-[#C68B2C] dark:text-[#17110D]'
                      : 'text-[#5C4D40] hover:text-[#16382E] dark:text-[#C7BBAE] dark:hover:text-[#F5EFE6]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Showcase Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work, index) => {
            const isHeroTile = activeFilter === 'all' && index === 0;
            return (
              <article
                key={work.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-[#DFD6C5] bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#C68B2C]/60 dark:border-[#332820] dark:bg-[#1B1511] ${
                  isHeroTile ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedWorkId(work.id)}
                  className={`relative block w-full overflow-hidden bg-[#1B1410] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16382E] dark:focus-visible:outline-[#E8B86D] ${
                    isHeroTile ? 'aspect-[16/10] lg:h-full lg:min-h-[460px]' : 'aspect-[4/3]'
                  }`}
                  aria-label={`${t.gallery.viewWorkAria} ${work.title}`}
                >
                  <ResilientImage
                    src={work.image}
                    alt={work.title}
                    titleFallback={work.title}
                    objectPosition={work.objectPosition}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />

                  <span
                    className={`absolute top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#16382E]/85 text-[#F7F4EE] opacity-90 backdrop-blur-sm transition-colors duration-150 group-hover:bg-[#C68B2C] group-hover:text-[#17110D] group-hover:opacity-100 ${
                      isRtl ? 'left-4' : 'right-4'
                    }`}
                  >
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>

                {/* Unboxed Clean Editorial Metadata */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B5A4C] dark:text-[#A89A8B]">
                      <span className="font-medium text-[#16382E] dark:text-[#E8B86D]">
                        {work.categoryLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{work.woodSpecies}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{work.year}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold text-[#1C1612] dark:text-[#F5EFE6] sm:text-2xl">
                      <button
                        type="button"
                        onClick={() => setSelectedWorkId(work.id)}
                        className={`transition-colors hover:text-[#16382E] dark:hover:text-[#E8B86D] ${
                          isRtl ? 'text-right' : 'text-left'
                        }`}
                      >
                        {work.title}
                      </button>
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#4E4136] dark:text-[#C7BBAE]">
                      {work.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#EFE8DA] pt-4 text-xs text-[#5C4D40] dark:border-[#2E241E] dark:text-[#A89A8B]">
                    <span className="tabular-nums">{work.dimensions}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedWorkId(work.id)}
                      className="font-semibold text-[#16382E] hover:text-[#9E6A1A] hover:underline hover:underline-offset-4 dark:text-[#E8B86D] dark:hover:text-[#F5EFE6]"
                    >
                      {t.gallery.detailsBtn}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedWork && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#120D0A]/85 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedWorkId(null)}
        >
          <div
            className="relative grid max-h-[92vh] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-2xl border border-[#352921] bg-[#17110D] text-[#F7F4EE] lg:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Control */}
            <button
              type="button"
              onClick={() => setSelectedWorkId(null)}
              aria-label={t.gallery.closeAria}
              className={`absolute top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/60 text-[#F7F4EE] transition-colors hover:bg-[#C68B2C] hover:text-[#17110D] ${
                isRtl ? 'left-4' : 'right-4'
              }`}
            >
              <X className="h-5 w-5" />
            </button>

            {/* High-Res Image View */}
            <div className="relative aspect-[4/3] bg-black lg:col-span-7 lg:aspect-auto lg:min-h-[520px]">
              <ResilientImage
                src={selectedWork.image}
                alt={selectedWork.title}
                titleFallback={selectedWork.title}
                objectPosition={selectedWork.objectPosition}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Technical Joinery Specifications */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#E8B86D]">
                  <span>{selectedWork.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedWork.location}</span>
                </div>

                <h3
                  id="lightbox-title"
                  className="mt-3 font-display text-2xl font-bold text-[#F7F4EE] sm:text-3xl"
                >
                  {selectedWork.title}
                </h3>

                <p className="mt-4 text-sm leading-[1.8] text-[#D8CEC0]">
                  {selectedWork.description}
                </p>

                <dl className="mt-6 space-y-3 border-t border-[#2E241E] pt-5 text-sm">
                  <div className="flex justify-between gap-4 border-b border-[#261D18] pb-2.5">
                    <dt className="text-[#A89A8B]">{t.gallery.specWood}</dt>
                    <dd className="font-medium text-[#F7F4EE]">{selectedWork.woodSpecies}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#261D18] pb-2.5">
                    <dt className="text-[#A89A8B]">{t.gallery.specJoinery}</dt>
                    <dd className="font-medium text-[#F7F4EE]">{selectedWork.joineryMethod}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#261D18] pb-2.5">
                    <dt className="text-[#A89A8B]">{t.gallery.specFinish}</dt>
                    <dd className="font-medium text-[#F7F4EE]">{selectedWork.finish}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[#261D18] pb-2.5">
                    <dt className="text-[#A89A8B]">{t.gallery.specDimensions}</dt>
                    <dd className="font-medium text-[#F7F4EE] tabular-nums">
                      {selectedWork.dimensions}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[#A89A8B]">{t.gallery.specYear}</dt>
                    <dd className="font-medium text-[#F7F4EE] tabular-nums">{selectedWork.year}</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#2E241E] pt-5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => stepSelected(-1)}
                    className="inline-flex min-h-[40px] items-center gap-1 rounded-lg border border-[#3B2E26] px-3 py-1.5 text-xs font-medium text-[#F7F4EE] transition-colors hover:border-[#C68B2C]"
                  >
                    {isRtl ? (
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    )}
                    <span>{t.gallery.prevBtn}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => stepSelected(1)}
                    className="inline-flex min-h-[40px] items-center gap-1 rounded-lg border border-[#3B2E26] px-3 py-1.5 text-xs font-medium text-[#F7F4EE] transition-colors hover:border-[#C68B2C]"
                  >
                    <span>{t.gallery.nextBtn}</span>
                    {isRtl ? (
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>

                <span className="text-xs text-[#A89A8B]">{t.gallery.escHint}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
