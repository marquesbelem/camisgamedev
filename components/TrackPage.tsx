import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Tag } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { TrackIcon } from "./TrackIcon";
import { WhatsAppButton } from "./WhatsAppButton";
import { SITE_URL, TRACKS, type TrackSlug } from "@/lib/site";

export function getTrack(slug: TrackSlug) {
  const t = TRACKS.find((x) => x.slug === slug);
  if (!t) throw new Error(`Trilha desconhecida: ${slug}`);
  return t;
}

export function trackMetadata(slug: TrackSlug): Metadata {
  const t = getTrack(slug);
  const url = `/aulas/${slug}`;
  return {
    title: t.seoTitle,
    description: t.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: t.seoTitle,
      description: t.seoDescription,
      url,
      type: "website",
      locale: "pt_BR",
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    },
  };
}

export function TrackPage({ slug }: { slug: TrackSlug }) {
  const t = getTrack(slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: t.title,
    description: t.seoDescription,
    url: `${SITE_URL}/aulas/${slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    audience: { "@type": "PeopleAudience", suggestedMinAge: undefined, name: t.audience },
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-16">
      <JsonLd data={jsonLd} />
      <nav aria-label="Trilha" className="text-sm text-muted">
        <Link href="/#trilhas" className="hover:text-[var(--accent)]">Aulas</Link> / {t.title}
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
          { i: MapPin, l: "Modalidade", v: t.mode },
          { i: Clock, l: "Formato", v: t.format },
          { i: Tag, l: "Investimento", v: t.price },
        ].map(({ i: I, l, v }) => (
          <li key={l} className="rounded-2xl border border-line bg-surface p-5">
            <I size={20} className="text-[var(--accent)]" aria-hidden />
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted">{l}</p>
            <p className="mt-1 font-bold">{v}</p>
          </li>
        ))}
      </ul>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Destaques</h2>
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
        <section key={s.title} className="mt-12 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="font-display text-xl">{s.title}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted marker:text-[var(--accent)]">
            {s.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <WhatsAppButton id={`cta-${t.slug}`} text={t.whatsappText} label="Quero saber mais pelo WhatsApp" />
        <Link href="/precos" className="font-bold text-[var(--accent)] underline underline-offset-4">
          Ver tabela de preços
        </Link>
      </div>
    </article>
  );
}
