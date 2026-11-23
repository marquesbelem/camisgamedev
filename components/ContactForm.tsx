"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { getLocalizedTrack, TRANSLATIONS } from "@/lib/i18n";
import { TRACKS, whatsappLink } from "@/lib/site";

const field =
  "w-full rounded-xl border border-line bg-[var(--bg)] px-4 py-3 text-base text-fg placeholder:text-muted/70 focus:border-[var(--accent)]";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { locale } = useLanguage();
  const c = TRANSLATIONS[locale].contact;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg =
      `${c.msgPrefix} ${d.get("nome")}. ${c.msgInterest} ${d.get("trilha")}. ` +
      `${c.msgMode} ${d.get("modalidade")}. ` +
      (d.get("mensagem") ? `${c.msgBody} ${d.get("mensagem")}` : "");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      className="grid gap-4 rounded-3xl border border-line bg-surface p-6 sm:p-8"
    >
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm font-bold">
          {c.nameLabel}
        </label>
        <input id="nome" name="nome" required autoComplete="name" className={field} placeholder={c.namePlaceholder} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="trilha" className="mb-1 block text-sm font-bold">
            {c.trackLabel}
          </label>
          <select id="trilha" name="trilha" className={field} defaultValue={getLocalizedTrack(TRACKS[0], locale).title}>
            {TRACKS.map((track) => {
              const lt = getLocalizedTrack(track, locale);
              return (
                <option key={lt.slug} value={`${lt.title} (${lt.audience})`}>
                  {lt.title} · {lt.audience}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="modalidade" className="mb-1 block text-sm font-bold">
            {c.modeLabel}
          </label>
          <select id="modalidade" name="modalidade" className={field}>
            <option>{c.modeOnsite}</option>
            <option>{c.modeOnline}</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm font-bold">
          {c.messageLabel}
        </label>
        <textarea id="mensagem" name="mensagem" rows={3} className={field} placeholder={c.messagePlaceholder} />
      </div>
      <button
        id="contact-submit"
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-bold text-[var(--accent-fg)] transition hover:-translate-y-0.5"
      >
        <Send size={18} aria-hidden /> {c.submit}
      </button>
      <p role="status" className="min-h-5 text-sm text-muted">
        {sent ? c.sentStatus : ""}
      </p>
    </form>
  );
}
