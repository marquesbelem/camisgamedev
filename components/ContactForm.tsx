"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { TRACKS, whatsappLink } from "@/lib/site";

const field =
  "w-full rounded-xl border border-line bg-[var(--bg)] px-4 py-3 text-base text-fg placeholder:text-muted/70 focus:border-[var(--accent)]";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg =
      `Olá! Meu nome é ${d.get("nome")}. Tenho interesse em: ${d.get("trilha")}. ` +
      `Modalidade: ${d.get("modalidade")}. ` +
      (d.get("mensagem") ? `Mensagem: ${d.get("mensagem")}` : "");
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
          Seu nome
        </label>
        <input id="nome" name="nome" required autoComplete="name" className={field} placeholder="Como posso te chamar?" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="trilha" className="mb-1 block text-sm font-bold">
            Aula de interesse
          </label>
          <select id="trilha" name="trilha" className={field} defaultValue={TRACKS[0].title}>
            {TRACKS.map((t) => (
              <option key={t.slug} value={`${t.title} (${t.audience})`}>
                {t.title} · {t.audience}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="modalidade" className="mb-1 block text-sm font-bold">
            Modalidade
          </label>
          <select id="modalidade" name="modalidade" className={field}>
            <option>Presencial (Caieiras e região)</option>
            <option>Online</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm font-bold">
          Mensagem (opcional)
        </label>
        <textarea id="mensagem" name="mensagem" rows={3} className={field} placeholder="Idade, experiência prévia, horários..." />
      </div>
      <button
        id="contact-submit"
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-bold text-[var(--accent-fg)] transition hover:-translate-y-0.5"
      >
        <Send size={18} aria-hidden /> Enviar pelo WhatsApp
      </button>
      <p role="status" className="min-h-5 text-sm text-muted">
        {sent ? "Abrimos o WhatsApp com sua mensagem pronta. Obrigada!" : ""}
      </p>
    </form>
  );
}
