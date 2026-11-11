import { useEffect, useState } from 'react';
import { Globe, Moon, Sun } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CraftGallery } from './components/CraftGallery';
import { VideoSliderSection } from './components/VideoSliderSection';
import { MaterialsAndCraft } from './components/MaterialsAndCraft';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { LANGUAGE_OPTIONS, TRANSLATIONS, type Language } from './data/translations';

const getInitialLang = (): Language => {
  try {
    const saved = localStorage.getItem('atelier-lang');
    if (saved === 'ar' || saved === 'fr' || saved === 'en') {
      return saved;
    }
  } catch {
    // Ignore storage errors
  }
  return 'ar';
};

const getInitialTheme = (): boolean => {
  try {
    const saved = localStorage.getItem('atelier-theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
  } catch {
    // Ignore storage errors
  }
  return false;
};

export default function App() {
  const [lang, setLang] = useState<Language>(getInitialLang);
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWood, setSelectedWood] = useState<string | undefined>(undefined);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('atelier-theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage errors
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
    document.title = t.documentTitle;
    try {
      localStorage.setItem('atelier-lang', lang);
    } catch {
      // Ignore storage errors
    }
  }, [lang, t.dir, t.documentTitle]);

  const handleOpenConsultation = (defaultWood?: string) => {
    setSelectedWood(defaultWood);
    setModalOpen(true);
  };

  return (
    <div
      dir={t.dir}
      className="min-h-screen bg-[#F7F4EE] text-[#1C1612] transition-colors duration-200 dark:bg-[#120E0B] dark:text-[#F5EFE6]"
    >
      <Navbar t={t} onOpenConsultation={() => handleOpenConsultation()} />

      <main id="top">
        {/* Top Preferences Bar: Language Switcher & Light/Dark Theme Switch */}
        <div className="border-b border-[#E2DACB] bg-[#F7F4EE] transition-colors duration-200 dark:border-[#241B15] dark:bg-[#120E0B]">
          <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-4 px-6 py-3 md:px-10">
            <div className="flex items-center gap-2">
              <Globe
                className="h-4 w-4 text-[#5C4D40] dark:text-[#C7BBAE]"
                aria-hidden="true"
              />
              <div
                role="group"
                aria-label={t.languageAriaLabel}
                className="inline-flex items-center gap-1 rounded-lg bg-[#EDE7DC] p-1 dark:bg-[#1D1612]"
              >
                {LANGUAGE_OPTIONS.map((opt) => {
                  const isActive = opt.id === lang;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setLang(opt.id)}
                      aria-pressed={isActive}
                      className={`min-h-[32px] shrink-0 whitespace-nowrap rounded-md px-3 py-1 text-xs font-medium transition-colors duration-150 ${
                        isActive
                          ? 'bg-[#16382E] text-[#F7F4EE] shadow-sm dark:bg-[#C68B2C] dark:text-[#17110D]'
                          : 'text-[#5C4D40] hover:text-[#16382E] dark:text-[#B8AA9B] dark:hover:text-[#F5EFE6]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              aria-pressed={isDark}
              className="inline-flex min-h-[38px] shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border border-[#D4C8B4] bg-white px-3.5 py-1.5 text-xs font-medium text-[#1C1612] transition-colors duration-150 hover:border-[#C68B2C] dark:border-[#352921] dark:bg-[#1B1511] dark:text-[#F5EFE6] dark:hover:border-[#C68B2C]"
            >
              {isDark ? (
                <>
                  <Sun className="h-4 w-4 text-[#E8B86D]" aria-hidden="true" />
                  <span>{t.themeLightLabel}</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-[#16382E]" aria-hidden="true" />
                  <span>{t.themeDarkLabel}</span>
                </>
              )}
            </button>
          </div>
        </div>

        <VideoSliderSection t={t} />
        <HeroSection t={t} />
        <CraftGallery t={t} />
        <MaterialsAndCraft t={t} onOpenConsultation={handleOpenConsultation} />
      </main>

      <Footer t={t} onOpenConsultation={() => handleOpenConsultation()} />

      <ConsultationModal
        t={t}
        isOpen={modalOpen}
        initialWood={selectedWood}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
