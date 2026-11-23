"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      id="lang-toggle"
      type="button"
      onClick={toggleLocale}
      aria-label={locale === "pt" ? "Switch to English" : "Mudar para Português"}
      title={locale === "pt" ? "Switch to English" : "Mudar para Português"}
      className="grid h-11 min-w-11 place-items-center rounded-full border border-line bg-surface px-3 text-xs font-bold tracking-wide text-fg transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {locale === "pt" ? "EN" : "PT"}
    </button>
  );
}
