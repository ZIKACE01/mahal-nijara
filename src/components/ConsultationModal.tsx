import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import type { LocalizedContent } from '../data/translations';

interface ConsultationModalProps {
  t: LocalizedContent;
  isOpen: boolean;
  initialWood?: string;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  t,
  isOpen,
  initialWood,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState(t.modal.projectTypes[0]);
  const [woodChoice, setWoodChoice] = useState(
    initialWood || t.craft.specimens[0].name
  );
  const [dimensions, setDimensions] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (initialWood) {
      setWoodChoice(initialWood);
    } else {
      setWoodChoice(t.craft.specimens[0].name);
    }
    setProjectType(t.modal.projectTypes[0]);
  }, [initialWood, t.craft.specimens, t.modal.projectTypes]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg(t.modal.errorRequired);
      return;
    }
    setErrorMsg('');
    const refNumber = `DS-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(refNumber);
  };

  const resetAndClose = () => {
    setSubmittedRef(null);
    setErrorMsg('');
    setName('');
    setPhone('');
    setDimensions('');
    setNotes('');
    onClose();
  };

  const isRtl = t.dir === 'rtl';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#120D0A]/80 p-4 backdrop-blur-sm"
      onClick={resetAndClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-[#DFD6C5] bg-[#F7F4EE] p-6 text-[#1C1612] shadow-2xl dark:border-[#352921] dark:bg-[#17110D] dark:text-[#F7F4EE] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#E2DACB] pb-4 dark:border-[#2E241E]">
          <div>
            <p className="text-xs font-semibold text-[#16382E] dark:text-[#E8B86D]">
              {t.modal.kicker}
            </p>
            <h2
              id="consultation-title"
              className="mt-1 font-display text-2xl font-bold text-[#1C1612] dark:text-[#F7F4EE]"
            >
              {t.modal.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            aria-label={t.modal.closeAria}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#DFD6C5] bg-white text-[#1C1612] transition-colors hover:border-[#C68B2C] dark:border-[#352921] dark:bg-[#231B16] dark:text-[#F7F4EE] dark:hover:border-[#C68B2C]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submittedRef ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#16382E] text-[#E8B86D] dark:bg-[#C68B2C] dark:text-[#17110D]">
              <Check className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-[#1C1612] dark:text-[#F7F4EE]">
              {t.modal.successTitle}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4E4136] dark:text-[#D8CEC0]">
              {t.modal.successBodyPrefix}{' '}
              <span className="font-semibold text-[#1C1612] dark:text-[#F7F4EE]">
                {name}
              </span>
              . {t.modal.successBodyMid}{' '}
              <span className="font-semibold text-[#16382E] dark:text-[#E8B86D]">
                {woodChoice}
              </span>
              {t.modal.successBodySuffix}
            </p>
            <div className="mt-5 inline-block rounded-lg border border-[#DFD6C5] bg-white px-4 py-2 font-mono text-xs text-[#5C4D40] tabular-nums dark:border-[#352921] dark:bg-[#231B16] dark:text-[#C7BBAE]">
              {t.modal.refLabel} {submittedRef}
            </div>
            <div className="mt-7">
              <button
                type="button"
                onClick={resetAndClose}
                className="min-h-[44px] rounded-lg bg-[#16382E] px-6 py-2.5 text-sm font-medium text-[#F7F4EE] hover:bg-[#C68B2C] hover:text-[#17110D] dark:bg-[#C68B2C] dark:text-[#17110D]"
              >
                {t.modal.backBtn}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {errorMsg && (
              <div
                role="alert"
                className="rounded-lg border border-[#B91C1C]/30 bg-[#FEF2F2] px-4 py-3 text-xs font-medium text-[#991B1B] dark:border-[#EF4444]/40 dark:bg-[#2B1414] dark:text-[#FCA5A5]"
              >
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="client-name"
                  className="mb-1.5 block text-xs font-semibold text-[#1C1612] dark:text-[#E8DFD1]"
                >
                  {t.modal.nameLabel}
                </label>
                <input
                  id="client-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.modal.namePlaceholder}
                  className="min-h-[42px] w-full rounded-lg border border-[#D4C8B4] bg-white px-3.5 py-2 text-sm text-[#1C1612] focus:border-[#16382E] focus:outline-none dark:border-[#3B2E26] dark:bg-[#231B16] dark:text-[#F7F4EE] dark:focus:border-[#C68B2C]"
                />
              </div>

              <div>
                <label
                  htmlFor="client-phone"
                  className="mb-1.5 block text-xs font-semibold text-[#1C1612] dark:text-[#E8DFD1]"
                >
                  {t.modal.phoneLabel}
                </label>
                <input
                  id="client-phone"
                  type="tel"
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+212 6XX XXX XXX"
                  className={`min-h-[42px] w-full rounded-lg border border-[#D4C8B4] bg-white px-3.5 py-2 text-sm text-[#1C1612] focus:border-[#16382E] focus:outline-none dark:border-[#3B2E26] dark:bg-[#231B16] dark:text-[#F7F4EE] dark:focus:border-[#C68B2C] ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="project-type"
                className="mb-1.5 block text-xs font-semibold text-[#1C1612] dark:text-[#E8DFD1]"
              >
                {t.modal.projectTypeLabel}
              </label>
              <select
                id="project-type"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="min-h-[42px] w-full rounded-lg border border-[#D4C8B4] bg-white px-3.5 py-2 text-sm text-[#1C1612] focus:border-[#16382E] focus:outline-none dark:border-[#3B2E26] dark:bg-[#231B16] dark:text-[#F7F4EE] dark:focus:border-[#C68B2C]"
              >
                {t.modal.projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="wood-choice"
                  className="mb-1.5 block text-xs font-semibold text-[#1C1612] dark:text-[#E8DFD1]"
                >
                  {t.modal.woodLabel}
                </label>
                <select
                  id="wood-choice"
                  value={woodChoice}
                  onChange={(e) => setWoodChoice(e.target.value)}
                  className="min-h-[42px] w-full rounded-lg border border-[#D4C8B4] bg-white px-3.5 py-2 text-sm text-[#1C1612] focus:border-[#16382E] focus:outline-none dark:border-[#3B2E26] dark:bg-[#231B16] dark:text-[#F7F4EE] dark:focus:border-[#C68B2C]"
                >
                  {t.craft.specimens.map((wood) => (
                    <option key={wood.id} value={wood.name}>
                      {wood.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="dimensions"
                  className="mb-1.5 block text-xs font-semibold text-[#1C1612] dark:text-[#E8DFD1]"
                >
                  {t.modal.dimensionsLabel}
                </label>
                <input
                  id="dimensions"
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder={t.modal.dimensionsPlaceholder}
                  className="min-h-[42px] w-full rounded-lg border border-[#D4C8B4] bg-white px-3.5 py-2 text-sm text-[#1C1612] focus:border-[#16382E] focus:outline-none dark:border-[#3B2E26] dark:bg-[#231B16] dark:text-[#F7F4EE] dark:focus:border-[#C68B2C]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="project-notes"
                className="mb-1.5 block text-xs font-semibold text-[#1C1612] dark:text-[#E8DFD1]"
              >
                {t.modal.notesLabel}
              </label>
              <textarea
                id="project-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.modal.notesPlaceholder}
                className="w-full rounded-lg border border-[#D4C8B4] bg-white px-3.5 py-2.5 text-sm text-[#1C1612] focus:border-[#16382E] focus:outline-none dark:border-[#3B2E26] dark:bg-[#231B16] dark:text-[#F7F4EE] dark:focus:border-[#C68B2C]"
              />
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-[#E2DACB] pt-5 dark:border-[#2E241E]">
              <button
                type="button"
                onClick={resetAndClose}
                className="min-h-[42px] rounded-lg border border-[#D4C8B4] bg-white px-5 py-2 text-sm font-medium text-[#1C1612] hover:bg-[#EDE7DC] dark:border-[#3B2E26] dark:bg-[#231B16] dark:text-[#E8DFD1] dark:hover:bg-[#2E241E]"
              >
                {t.modal.cancelBtn}
              </button>
              <button
                type="submit"
                className="min-h-[42px] rounded-lg bg-[#16382E] px-6 py-2 text-sm font-medium text-[#F7F4EE] transition-colors hover:bg-[#C68B2C] hover:text-[#17110D] dark:bg-[#C68B2C] dark:text-[#17110D] dark:hover:bg-[#E8B86D]"
              >
                {t.modal.submitBtn}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
