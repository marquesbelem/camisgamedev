"use client";

import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Tag } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { TrackIcon } from "./TrackIcon";
import { WhatsAppButton } from "./WhatsAppButton";
import { getLocalizedTrack, TRANSLATIONS } from "@/lib/i18n";
import type { Track } from "@/lib/site";

export function TrackPageClient({ track }: { track: Track }) {
  const { locale } = useLanguage();
  const t = getLocalizedTrack(track, locale);
  const tp = TRANSLATIONS[locale].trackPage;

  return (
    <>
      <nav aria-label={tp.breadcrumb} className="text-sm text-muted">
        <Link href="/#trilhas" className="hover:text-[var(--accent)]">{tp.breadcrumb}</Link> / {t.title}
      </nav>
      <header className="mt-6 flex items-start gap-5">
        <span
          className={`hidden size-16 shrink-0 place-items-center rounded-2xl sm:grid ${
            t.accent === "yellow" ? "bg-brand-yellow text-[#17102e]" : "bg-brand-purple text-white"
          }`}
        >
          <TrackIcon icon={t.icon} size={32} />
        </span>
        <div>
          <p className="font-bold text-[var(--accent)]">{t.audience}</p>
          <h1 className="font-display mt-1 text-3xl leading-tight sm:text-4xl">{t.headline}</h1>
          <p className="mt-4 text-lg text-muted">{t.intro}</p>
        </div>
      </header>

      {t.notice && (
        <aside
          role="note"
          className="mt-8 flex gap-3 rounded-2xl border-2 border-[var(--accent)] bg-surface-2 p-5"
        >
          <MapPin className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden />
          <p className="font-medium">{t.notice}</p>
        </aside>
      )}

      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { i: MapPin, l: tp.modeLabel, v: t.mode },
          { i: Clock, l: tp.formatLabel, v: t.format },
          { i: Tag, l: tp.priceLabel, v: t.price },
        ].map(({ i: I, l, v }) => (
          <li key={l} className="rounded-2xl border border-line bg-surface p-5">
            <I size={20} className="text-[var(--accent)]" aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">{l}</p>
            <p className="mt-1 font-bold">{v}</p>
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h2 className="font-display text-2xl">{tp.highlightsTitle}</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {t.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--accent)]" size={20} aria-hidden />
              {h}
            </li>
          ))}
        </ul>
      </section>

      {t.sections.map((s) => (
        <section key={s.title} className="mt-10 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="font-display text-xl">{s.title}</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {s.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[var(--accent)]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-12">
        <WhatsAppButton id={`track-${t.slug}-whatsapp`} text={t.whatsappText} label={tp.whatsappLabel} />
      </div>
    </>
  );
}
