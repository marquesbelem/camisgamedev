import type { Metadata } from "next";
import { JsonLd } from "./JsonLd";
import { TrackPageClient } from "./TrackPageClient";
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
      <TrackPageClient track={t} />
    </article>
  );
}
