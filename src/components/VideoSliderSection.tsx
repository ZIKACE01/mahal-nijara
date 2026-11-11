import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';
import type { VideoSlide } from '../data/atelierData';
import type { LocalizedContent } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface DustMote {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
}

interface VideoSliderSectionProps {
  t: LocalizedContent;
}

const formatTime = (seconds: number): string => {
  const clamped = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(clamped / 60);
  const secs = clamped % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const getCutTransform = (
  cameraMove: 'zoom-in' | 'pan-right' | 'pan-left' | 'zoom-out',
  cutProgress: number
): string => {
  if (cameraMove === 'zoom-in') {
    const scale = 1.04 + cutProgress * 0.14;
    const tx = (0.5 - cutProgress) * 3;
    return `scale(${scale.toFixed(4)}) translate3d(${tx.toFixed(2)}%, 0, 0)`;
  }
  if (cameraMove === 'pan-right') {
    const tx = (cutProgress - 0.5) * 6;
    return `scale(1.14) translate3d(${tx.toFixed(2)}%, 0, 0)`;
  }
  if (cameraMove === 'pan-left') {
    const tx = (0.5 - cutProgress) * 6;
    return `scale(1.14) translate3d(${tx.toFixed(2)}%, 0, 0)`;
  }
  const scale = 1.18 - cutProgress * 0.14;
  const ty = (cutProgress - 0.5) * 2;
  return `scale(${scale.toFixed(4)}) translate3d(0, ${ty.toFixed(2)}%, 0)`;
};

export const VideoSliderSection: React.FC<VideoSliderSectionProps> = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [isTheaterExpanded, setIsTheaterExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const overlayCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioGainRef = useRef<GainNode | null>(null);
  const motesRef = useRef<DustMote[]>([]);
  const progressRef = useRef<number>(0);
  const lastUiSyncRef = useRef<number>(0);

  const stateRef = useRef({
    activeIndex: 0,
    isPlaying: true,
    autoAdvance: true,
    slides: t.video.slides,
  });

  stateRef.current = {
    activeIndex,
    isPlaying,
    autoAdvance,
    slides: t.video.slides,
  };

  const slides = t.video.slides;
  const currentSlide: VideoSlide = slides[activeIndex] || slides[0];
  const isRtl = t.dir === 'rtl';

  useEffect(() => {
    const motes: DustMote[] = [];
    for (let i = 0; i < 44; i += 1) {
      motes.push({
        x: Math.random(),
        y: Math.random(),
        r: 1.0 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.032,
        vy: -0.015 - Math.random() * 0.024,
        alpha: 0.16 + Math.random() * 0.36,
      });
    }
    motesRef.current = motes;
  }, []);

  const toggleAudio = useCallback(() => {
    setIsMuted((prevMuted) => {
      const nextMuted = !prevMuted;
      if (!nextMuted) {
        try {
          if (!audioCtxRef.current) {
            const AudioContextClass =
              window.AudioContext ||
              (window as unknown as { webkitAudioContext: typeof AudioContext })
                .webkitAudioContext;
            const ctx = new AudioContextClass();
            const bufferSize = ctx.sampleRate * 2;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            let lastOut = 0;
            for (let i = 0; i < bufferSize; i += 1) {
              const white = Math.random() * 2 - 1;
              data[i] = (lastOut + 0.02 * white) / 1.02;
              lastOut = data[i];
              data[i] *= 1.8;
            }
            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.loop = true;

            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 340;

            const gain = ctx.createGain();
            gain.gain.value = 0.08;

            source.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            source.start();

            audioCtxRef.current = ctx;
            audioGainRef.current = gain;
          } else if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
          }
          if (audioGainRef.current) {
            audioGainRef.current.gain.value = 0.08;
          }
        } catch {
          // Graceful fallback
        }
      } else if (audioGainRef.current) {
        audioGainRef.current.gain.value = 0;
      }
      return nextMuted;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const selectSlide = useCallback(
    (targetIndex: number) => {
      const normalized = (targetIndex + slides.length) % slides.length;
      setActiveIndex(normalized);
      progressRef.current = 0;
      setCurrentTime(0);
      setIsPlaying(true);
    },
    [slides.length]
  );

  const scrubTo = useCallback(
    (seconds: number) => {
      const clamped = Math.max(0, Math.min(seconds, currentSlide.durationSeconds));
      progressRef.current = clamped;
      setCurrentTime(clamped);
    },
    [currentSlide.durationSeconds]
  );

  // Continuous 60fps playback timer + sunlit workshop particle canvas overlay
  useEffect(() => {
    let animationId = 0;
    let lastTimestamp = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;

      const {
        activeIndex: idx,
        isPlaying: playing,
        autoAdvance: auto,
        slides: currentSlides,
      } = stateRef.current;
      const slide = currentSlides[idx] || currentSlides[0];

      if (playing && slide) {
        progressRef.current += dt;
        if (progressRef.current >= slide.durationSeconds) {
          progressRef.current = 0;
          setCurrentTime(0);
          if (auto) {
            setActiveIndex((prev) => (prev + 1) % currentSlides.length);
          }
        } else if (now - lastUiSyncRef.current > 50) {
          lastUiSyncRef.current = now;
          setCurrentTime(progressRef.current);
        }
      }

      const canvas = overlayCanvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const w = canvas.width;
          const h = canvas.height;
          ctx.clearRect(0, 0, w, h);

          // Animated golden-hour sunbeam sweep across the video stage
          const beamOffset = Math.sin((now / 1000) * 0.75) * 0.09;
          const sunGrad = ctx.createRadialGradient(
            w * (0.76 + beamOffset),
            h * 0.15,
            24,
            w * 0.52,
            h * 0.48,
            w * 0.85
          );
          sunGrad.addColorStop(0, 'rgba(226, 174, 92, 0.22)');
          sunGrad.addColorStop(0.55, 'rgba(180, 123, 43, 0.05)');
          sunGrad.addColorStop(1, 'rgba(14, 14, 13, 0.25)');
          ctx.fillStyle = sunGrad;
          ctx.fillRect(0, 0, w, h);

          // Floating sunlit wood-dust particles
          motesRef.current.forEach((mote) => {
            if (playing) {
              mote.x += mote.vx * dt;
              mote.y += mote.vy * dt;
              if (mote.y < -0.02) mote.y = 1.02;
              if (mote.x < -0.02) mote.x = 1.02;
              if (mote.x > 1.02) mote.x = -0.02;
            }
            ctx.beginPath();
            ctx.arc(mote.x * w, mote.y * h, mote.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(246, 224, 181, ${mote.alpha})`;
            ctx.fill();
          });

          // Bottom contrast scrim for legible overlay text
          const scrim = ctx.createLinearGradient(0, h * 0.48, 0, h);
          scrim.addColorStop(0, 'rgba(11, 11, 10, 0)');
          scrim.addColorStop(1, 'rgba(11, 11, 10, 0.90)');
          ctx.fillStyle = scrim;
          ctx.fillRect(0, h * 0.48, w, h * 0.52);
        }
      }

      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const activeChapter =
    [...currentSlide.chapters]
      .reverse()
      .find((ch) => currentTime >= ch.timeSeconds) || currentSlide.chapters[0];

  const progressPercent = Math.min(
    100,
    (currentTime / currentSlide.durationSeconds) * 100
  );

  return (
    <section
      id="video-slider"
      className="border-b border-[#2E241E] bg-[#17110D] pb-14 pt-8 text-[#F7F4EE] transition-colors duration-200 dark:border-[#241B15] dark:bg-[#0C0907] lg:pb-16 lg:pt-10"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#2E241E] pb-6 dark:border-[#241B15] lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-medium text-[#E8B86D]">
              {t.video.kicker}
            </p>
            <h2 className="font-display text-3xl font-bold text-[#F7F4EE] text-balance sm:text-4xl">
              {t.video.title}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#C7BBAE]">
            <span>{currentSlide.woodUsed}</span>
            <span aria-hidden="true">·</span>
            <span>{currentSlide.technique}</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setAutoAdvance((prev) => !prev)}
              className={`min-h-[36px] rounded-md border px-3 py-1.5 font-medium transition-colors ${
                autoAdvance
                  ? 'border-[#C68B2C] bg-[#16382E]/50 text-[#E8B86D]'
                  : 'border-[#3B2E26] text-[#A89A8B] hover:text-[#F7F4EE]'
              }`}
            >
              {autoAdvance ? t.video.autoOn : t.video.autoOff}
            </button>
          </div>
        </div>

        {/* Main Widescreen Horizontal Auto-Sliding Cinema Track */}
        <div
          className={`mt-8 overflow-hidden rounded-2xl border border-[#352921] bg-[#100C09] dark:border-[#291F18] ${
            isTheaterExpanded
              ? 'fixed inset-4 z-50 m-auto flex max-w-6xl flex-col justify-between shadow-2xl'
              : 'relative'
          }`}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1D1612]">
            {/* Continuous Horizontal Track (forced dir="ltr" internally for reliable % translate across all browsers) */}
            <motion.div
              dir="ltr"
              className="flex h-full w-full"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIsPlaying((p) => !p)}
            >
              {slides.map((slide, sIdx) => {
                const isSlideActive = sIdx === activeIndex;
                const cutDuration = slide.durationSeconds / slide.chapters.length;
                const slideTime = isSlideActive ? currentTime : 0;
                const activeCutIdx = Math.min(
                  slide.chapters.length - 1,
                  Math.floor(slideTime / cutDuration)
                );

                return (
                  <div
                    key={slide.id}
                    className="relative h-full w-full shrink-0 cursor-pointer overflow-hidden"
                  >
                    {slide.chapters.map((chapter, cIdx) => {
                      const isCutVisible = cIdx === activeCutIdx;
                      const cutElapsed = Math.max(0, slideTime - cIdx * cutDuration);
                      const cutProgress = Math.min(1, cutElapsed / cutDuration);
                      const transform = isSlideActive
                        ? getCutTransform(chapter.cameraMove, cutProgress)
                        : 'scale(1.04)';

                      return (
                        <div
                          key={`${slide.id}-${chapter.timeLabel}`}
                          className={`absolute inset-0 transition-opacity duration-700 ${
                            isCutVisible ? 'z-10 opacity-100' : 'z-0 opacity-0'
                          }`}
                        >
                          <div
                            className="h-full w-full will-change-transform"
                            style={{ transform }}
                          >
                            <ResilientImage
                              src={chapter.cutImage}
                              alt={`${slide.title} — ${chapter.title}`}
                              titleFallback={slide.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </motion.div>

            {/* Persistent 60fps Sunbeam & Dust Motes Overlay Canvas */}
            <canvas
              ref={overlayCanvasRef}
              width={1280}
              height={720}
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              aria-hidden="true"
            />

            {/* Top Cinema Bar */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 bg-gradient-to-b from-black/80 to-transparent px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3 text-xs text-[#E8DFD1] sm:text-sm">
                <span className="font-mono font-medium text-[#E8B86D] tabular-nums">
                  {currentSlide.indexLabel}
                </span>
                <span aria-hidden="true" className="text-[#877768]">
                  /
                </span>
                <span>
                  {t.video.currentShot} {activeChapter.title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsTheaterExpanded((prev) => !prev)}
                className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#16382E]/80 text-[#F7F4EE] backdrop-blur-sm transition-colors hover:bg-[#C68B2C] hover:text-[#17110D]"
                aria-label={isTheaterExpanded ? t.video.minimizeAria : t.video.expandAria}
              >
                {isTheaterExpanded ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Side Slide Arrows */}
            <button
              type="button"
              onClick={() => selectSlide(activeIndex - 1)}
              aria-label={t.video.prevSlideAria}
              className={`absolute top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#17110D]/75 text-[#F7F4EE] backdrop-blur-sm transition-colors hover:bg-[#C68B2C] hover:text-[#17110D] ${
                isRtl ? 'right-4' : 'left-4'
              }`}
            >
              {isRtl ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={() => selectSlide(activeIndex + 1)}
              aria-label={t.video.nextSlideAria}
              className={`absolute top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#17110D]/75 text-[#F7F4EE] backdrop-blur-sm transition-colors hover:bg-[#C68B2C] hover:text-[#17110D] ${
                isRtl ? 'left-4' : 'right-4'
              }`}
            >
              {isRtl ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>

            {/* Bottom Overlay Title + Transport Controls */}
            <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-5 pt-10 sm:px-7">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {currentSlide.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#DDD4C6] sm:text-sm">
                    {currentSlide.subtitle}
                  </p>
                </div>

                {/* Slide Pagination Indicator Bars */}
                <div className="hidden items-center gap-1.5 sm:flex">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => selectSlide(idx)}
                      aria-label={s.title}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex
                          ? 'w-7 bg-[#C68B2C]'
                          : 'w-2.5 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Interactive Timeline Scrubber */}
              <div className="mb-3">
                <input
                  type="range"
                  min={0}
                  max={currentSlide.durationSeconds}
                  step={0.05}
                  value={currentTime}
                  onChange={(e) => scrubTo(parseFloat(e.target.value))}
                  aria-label={t.video.scrubberAria}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/25 accent-[#C68B2C]"
                  style={{
                    background: `linear-gradient(${
                      isRtl ? 'to left' : 'to right'
                    }, #C68B2C ${progressPercent}%, rgba(255,255,255,0.22) ${progressPercent}%)`,
                  }}
                />
              </div>

              {/* Player Transport & Multi-Cut Chapter Jump Points */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying((prev) => !prev)}
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#C68B2C] px-4 py-2 text-xs font-semibold text-[#17110D] transition-colors hover:bg-[#D89F3F]"
                    aria-label={isPlaying ? t.video.pause : t.video.play}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-4 w-4 fill-current" aria-hidden="true" />
                        <span>{t.video.pause}</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                        <span>{t.video.play}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleAudio}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-black/40 text-[#F7F4EE] transition-colors hover:border-[#C68B2C]"
                    aria-label={isMuted ? t.video.unmuteAria : t.video.muteAria}
                    title={isMuted ? t.video.unmuteAria : t.video.muteAria}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-[#E8B86D]" />
                    )}
                  </button>

                  <span className="font-mono text-xs text-[#E8DFD1] tabular-nums">
                    {formatTime(currentTime)} / {formatTime(currentSlide.durationSeconds)}
                  </span>
                </div>

                {/* Clickable Cut/Chapter Jump Points */}
                <div className="hidden items-center gap-2 md:flex">
                  {currentSlide.chapters.map((chapter) => {
                    const isCurrentChapter =
                      activeChapter.timeSeconds === chapter.timeSeconds;
                    return (
                      <button
                        key={chapter.timeLabel}
                        type="button"
                        onClick={() => scrubTo(chapter.timeSeconds)}
                        className={`rounded-md px-2.5 py-1 text-xs transition-colors ${
                          isCurrentChapter
                            ? 'bg-[#16382E]/85 font-medium text-[#E8B86D]'
                            : 'text-[#C2B8A9] hover:text-white'
                        }`}
                      >
                        <span
                          className={`font-mono text-[11px] opacity-80 ${
                            isRtl ? 'ml-1.5' : 'mr-1.5'
                          }`}
                        >
                          {chapter.timeLabel}
                        </span>
                        {chapter.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clickable 4-Slide Filmstrip Selector with Live Progress Bar */}
        <div
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
          aria-label={t.video.kicker}
        >
          {slides.map((slide, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => selectSlide(idx)}
                className={`group relative flex flex-col overflow-hidden rounded-xl border transition-colors duration-150 ${
                  isRtl ? 'text-right' : 'text-left'
                } ${
                  isSelected
                    ? 'border-[#C68B2C] bg-[#231B16] dark:bg-[#1C1511]'
                    : 'border-[#2E241E] bg-[#1C1511] hover:border-[#4A3B31] dark:border-[#241B15] dark:bg-[#140F0C]'
                }`}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <ResilientImage
                    src={slide.image}
                    alt={slide.title}
                    titleFallback={slide.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ${
                      isSelected && isPlaying
                        ? 'scale-[1.07] opacity-100'
                        : 'opacity-80 group-hover:scale-[1.03] group-hover:opacity-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute right-3 bottom-2 left-3 flex items-center justify-between text-xs text-[#F7F4EE]">
                    <span className="font-mono text-[#E8B86D] tabular-nums">
                      {slide.indexLabel}
                    </span>
                    <span className="font-mono tabular-nums">{slide.durationLabel}</span>
                  </div>

                  {isSelected && (
                    <div
                      aria-hidden="true"
                      className="absolute right-0 bottom-0 left-0 h-1 bg-white/15"
                    >
                      <div
                        className="h-full bg-[#C68B2C] transition-[width] duration-100 ease-linear"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-4">
                  <span className="font-display text-base font-bold text-[#F7F4EE]">
                    {slide.title}
                  </span>
                  <span className="mt-1.5 text-xs text-[#A89A8B]">
                    {slide.woodUsed}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
