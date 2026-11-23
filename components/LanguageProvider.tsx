"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "pt" | "en";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "pt",
  setLocale: () => {},
  toggleLocale: () => {},
});

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "pt";
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {}
  const navLang = (navigator.language || "").toLowerCase();
  return navLang.startsWith("en") ? "en" : "pt";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const initial = detectBrowserLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial === "en" ? "en" : "pt-BR";
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    document.documentElement.lang = next === "en" ? "en" : "pt-BR";
    try {
      localStorage.setItem("lang", next);
    } catch {}
  }

  function toggleLocale() {
    setLocale(locale === "pt" ? "en" : "pt");
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
