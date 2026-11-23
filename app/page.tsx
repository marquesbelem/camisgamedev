"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgePercent, CalendarCheck, MapPin, Monitor, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FeedbackCarousel } from "@/components/FeedbackCarousel";
import { useLanguage } from "@/components/LanguageProvider";
import { TrackIcon } from "@/components/TrackIcon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FEEDBACKS_EN, getLocalizedTrack, TRANSLATIONS } from "@/lib/i18n";
import { FEEDBACKS, TRACKS } from "@/lib/site";

export default function Home() {
  const { locale } = useLanguage();
  const h = TRANSLATIONS[locale].home;
  const feedbacks = locale === "en" ? FEEDBACKS_EN : FEEDBACKS;

  return (
    <>
      <section className="glow-bg relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div className="rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-bold text-[var(--accent)]">
              <Sparkles size={16} aria-hidden /> {h.badge}
            </p>
            <h1 className="font-display mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {h.heroTitleBefore}<span className="text-[var(--accent)]">{h.heroTitleAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              {h.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton id="hero-whatsapp" text={h.heroWhatsappText} label={h.heroWhatsapp} />
              <Link
                id="hero-tracks"
                href="#trilhas"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-line px-6 py-3 font-bold transition hover:border-[var(--accent)]"
              >
                {h.heroTracks} <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-muted">
              <li className="flex items-center gap-2"><Monitor size={16} aria-hidden /> {h.onlineTag}</li>
              <li className="flex items-center gap-2"><MapPin size={16} aria-hidden /> {h.onsiteTag}</li>
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-brand-purple to-brand-yellow opacity-80" aria-hidden />
            <Image
              src="/brand/profile.jpg"
              alt={h.portraitAlt}
              width={600}
              height={600}
              priority
              sizes="(max-width: 768px) 80vw, 400px"
              className="relative aspect-square rounded-[2rem] object-cover"
            />
            <span className="floaty absolute -right-3 -top-4 rounded-2xl bg-brand-yellow px-3 py-2 font-display text-sm text-[#17102e] shadow-lg">
              {h.yearsBadge}
            </span>
          </div>
        </div>
      </section>

      <section id="trilhas" className="mx-auto max-w-6xl scroll-mt-28 px-4 pt-20">
        <h2 className="font-display text-3xl sm:text-4xl">{h.tracksTitle}</h2>
        <p className="mt-3 max-w-2xl text-muted">
          {h.tracksSubtitle}
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((track) => {
            const t = getLocalizedTrack(track, locale);
            return (
              <li key={t.slug}>
                <Link
                  id={`track-${t.slug}`}
                  href={`/aulas/${t.slug}`}
                  className="card-hover flex h-full flex-col rounded-3xl border border-line bg-surface p-6"
                >
                  <span
                    className={`grid size-14 place-items-center rounded-2xl ${t.accent === "yellow" ? "bg-brand-yellow text-[#17102e]" : "bg-brand-purple text-white"
                      }`}
                  >
                    <TrackIcon icon={t.icon} />
                  </span>
                  <h3 className="font-display mt-5 text-lg">{t.title}</h3>
                  <p className="mt-1 text-sm font-bold text-[var(--accent)]">{t.audience}</p>
                  <p className="mt-3 flex-1 text-muted">{t.short}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted">{t.mode}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-bold text-[var(--accent)]">
                    {h.learnMore} <ArrowRight size={16} aria-hidden />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="sessao-experimental" className="mx-auto mt-24 max-w-6xl scroll-mt-28 px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-8 md:p-12">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-gradient-to-br from-brand-purple to-brand-yellow opacity-30 blur-3xl" aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-4 py-1.5 text-sm font-bold text-[var(--accent)]">
                <Timer size={16} aria-hidden /> {h.trialBadge}
              </p>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl">{h.trialTitle}</h2>
              <p className="mt-4 max-w-xl text-muted">
                {h.trialSubtitle}
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-3">
                  <BadgePercent className="mt-0.5 shrink-0 text-[var(--accent)]" size={20} aria-hidden />
                  <span>{h.trialBullet1Before}<b>{h.trialBullet1Bold}</b>{h.trialBullet1After}</span>
                </li>
                <li className="flex gap-3">
                  <CalendarCheck className="mt-0.5 shrink-0 text-[var(--accent)]" size={20} aria-hidden />
                  <span>{h.trialBullet2Before}<b>{h.trialBullet2Bold1}</b>{h.trialBullet2Mid}<b>{h.trialBullet2Bold2}</b>{h.trialBullet2After}</span>
                </li>
              </ul>
            </div>
            <div className="grid gap-4 self-center sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-3xl border border-line bg-surface-2 p-6">
                <p className="flex items-center gap-2 text-sm font-bold text-[var(--accent)]"><Monitor size={16} aria-hidden /> {h.onlineLabel}</p>
                <p className="font-display mt-2 text-4xl">R$ 35</p>
              </div>
              <div className="rounded-3xl border border-line bg-surface-2 p-6">
                <p className="flex items-center gap-2 text-sm font-bold text-[var(--accent)]"><MapPin size={16} aria-hidden /> {h.onsiteLabel}</p>
                <p className="font-display mt-2 text-4xl">R$ 50</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton id="experimental-whatsapp" text={h.trialWhatsappText} label={h.trialWhatsapp} />
            <Link href="/precos" className="inline-flex items-center gap-2 font-bold text-[var(--accent)]">
              {h.seeAllPrices} <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/brand/gamer.jpg"
            alt={h.gamerAlt}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 560px"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/70 to-transparent" aria-hidden />
        </div>
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">{h.engTitle}</h2>
          <p className="mt-4 text-muted">
            {h.engSubtitle}
          </p>
          <ul className="mt-6 space-y-3">
            {h.engBullets.map((item) => (
              <li key={item} className="flex gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-[var(--accent)]" size={20} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {feedbacks.length > 0 && (
        <section id="feedbacks" className="mx-auto mt-24 max-w-6xl scroll-mt-28 px-4">
          <h2 className="font-display text-3xl sm:text-4xl">{h.feedbacksTitle}</h2>
          <FeedbackCarousel items={feedbacks} />
        </section>
      )}

      <section id="contato" className="mx-auto mt-24 max-w-3xl scroll-mt-28 px-4">
        <h2 className="font-display text-center text-3xl sm:text-4xl">{h.contactTitle}</h2>
        <p className="mt-3 mb-8 text-center text-muted">
          {h.contactSubtitle}
        </p>
        <ContactForm />
      </section>
    </>
  );
}
