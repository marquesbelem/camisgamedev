"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";
import { getLocalizedTrack, TRANSLATIONS } from "@/lib/i18n";
import { REGION, TRACKS } from "@/lib/site";

export function Footer() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].footer;

  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Logo className="w-44" />
          <p className="mt-4 max-w-xs text-sm text-muted">
            {t.tagline}
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm text-[var(--accent)]">{t.classesTitle}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {TRACKS.map((track) => {
              const lt = getLocalizedTrack(track, locale);
              return (
                <li key={lt.slug}>
                  <Link href={`/aulas/${lt.slug}`} className="text-muted hover:text-[var(--accent)]">
                    {lt.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm text-[var(--accent)]">{t.serviceTitle}</h2>
          <p className="mt-3 text-sm text-muted">
            {t.online}
            <br />
            {t.onsite}: {REGION.join(", ")} (SP).
          </p>
        </div>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {t.rights}
      </p>
    </footer>
  );
}
