import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Monitor, ShieldCheck, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TrackIcon } from "@/components/TrackIcon";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { TRACKS } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="glow-bg relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div className="rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-bold text-[var(--accent)]">
              <Sparkles size={16} aria-hidden /> Mentoria & aulas particulares
            </p>
            <h1 className="font-display mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Aprenda a programar <span className="text-[var(--accent)]">criando jogos</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Aulas com uma engenheira de software e game developer sênior, com 8+ anos de experiência, liderança técnica e produções comerciais. De 5 anos a profissionais.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <WhatsAppButton id="hero-whatsapp" text="Olá! Gostaria de agendar uma aula" label="Agendar pelo WhatsApp" />
              <Link
                id="hero-tracks"
                href="#trilhas"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-line px-6 py-3 font-bold transition hover:border-[var(--accent)]"
              >
                Ver aulas <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-muted">
              <li className="flex items-center gap-2"><Monitor size={16} aria-hidden /> Online: Brasil e exterior</li>
              <li className="flex items-center gap-2"><MapPin size={16} aria-hidden /> Presencial: Caieiras e região</li>
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-brand-purple to-brand-yellow opacity-80" aria-hidden />
            <Image
              src="/brand/profile.jpg"
              alt="Retrato da mentora Camis, engenheira de software e game developer"
              width={600}
              height={600}
              priority
              sizes="(max-width: 768px) 80vw, 400px"
              className="relative aspect-square rounded-[2rem] object-cover"
            />
            <span className="floaty absolute -right-3 -top-4 rounded-2xl bg-brand-yellow px-3 py-2 font-display text-sm text-[#17102e] shadow-lg">
              8+ anos
            </span>
          </div>
        </div>
      </section>

      <section id="trilhas" className="mx-auto max-w-6xl scroll-mt-28 px-4 pt-20">
        <h2 className="font-display text-3xl sm:text-4xl">Escolha sua trilha</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Cada trilha tem metodologia própria por faixa etária e objetivo.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t) => (
            <li key={t.slug}>
              <Link
                id={`track-${t.slug}`}
                href={`/aulas/${t.slug}`}
                className="card-hover flex h-full flex-col rounded-3xl border border-line bg-surface p-6"
              >
                <span
                  className={`grid size-14 place-items-center rounded-2xl ${
                    t.accent === "yellow" ? "bg-brand-yellow text-[#17102e]" : "bg-brand-purple text-white"
                  }`}
                >
                  <TrackIcon icon={t.icon} />
                </span>
                <h3 className="font-display mt-5 text-lg">{t.title}</h3>
                <p className="mt-1 text-sm font-bold text-[var(--accent)]">{t.audience}</p>
                <p className="mt-3 flex-1 text-muted">{t.short}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted">{t.mode}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-bold text-[var(--accent)]">
                  Saiba mais <ArrowRight size={16} aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/brand/gamer.jpg"
            alt="Jovem jogadora em frente ao computador"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 560px"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/70 to-transparent" aria-hidden />
        </div>
        <div>
          <h2 className="font-display text-3xl sm:text-4xl">Engenharia real, pedagogia estruturada</h2>
          <p className="mt-4 text-muted">
            Metodologia que une boas práticas de mercado, respeito ao tempo cognitivo de cada idade e projetos práticos a cada aula.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Histórico em produções comerciais e liderança técnica",
              "Projetos práticos e portfólio desde as primeiras aulas",
              "Atendimento online e presencial exclusivo",
            ].map((i) => (
              <li key={i} className="flex gap-3">
                <ShieldCheck className="mt-0.5 shrink-0 text-[var(--accent)]" size={20} aria-hidden />
                {i}
              </li>
            ))}
          </ul>
          <Link href="/sobre" className="mt-8 inline-flex items-center gap-2 font-bold text-[var(--accent)]">
            Conheça minha trajetória <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>

      <section id="contato" className="mx-auto mt-24 max-w-3xl scroll-mt-28 px-4">
        <h2 className="font-display text-center text-3xl sm:text-4xl">Vamos conversar?</h2>
        <p className="mb-8 mt-3 text-center text-muted">
          Preencha o formulário e continue a conversa direto no WhatsApp.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
