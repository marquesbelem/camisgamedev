"use client";

import Image from "next/image";
import { Award, GraduationCap, Gamepad2, Users } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLanguage } from "@/components/LanguageProvider";
import { TRANSLATIONS } from "@/lib/i18n";
import { PERSONAL_SITE_URL } from "@/lib/site";

const FACT_ICONS = [Award, Gamepad2, Users, GraduationCap];

export function SobreContent() {
  const { locale } = useLanguage();
  const s = TRANSLATIONS[locale].about;

  return (
    <>
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr]">
        <Image
          src="/brand/profile.jpg"
          alt={s.portraitAlt}
          width={600}
          height={600}
          priority
          sizes="(max-width: 768px) 90vw, 380px"
          className="aspect-square w-full rounded-[2rem] object-cover"
        />
        <div>
          <h1 className="font-display text-4xl leading-tight">{s.title}</h1>
          <p className="mt-5 text-lg text-muted">
            {s.p1}
          </p>
          <p className="mt-4 text-muted">
            {s.p2}
          </p>
          <a
            href={PERSONAL_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-bold text-[var(--accent)] underline underline-offset-4"
          >
            {s.resumeLink}
          </a>
        </div>
      </div>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {s.facts.map(({ t, d }, idx) => {
          const I = FACT_ICONS[idx];
          return (
            <li key={t} className="card-hover rounded-3xl border border-line bg-surface p-6">
              <I className="text-[var(--accent)]" size={28} aria-hidden />
              <h2 className="font-display mt-4 text-base">{t}</h2>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </li>
          );
        })}
      </ul>
      <div className="mt-12 text-center">
        <WhatsAppButton id="sobre-whatsapp" text={s.whatsappText} />
      </div>
    </>
  );
}
