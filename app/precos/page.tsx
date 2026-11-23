import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PrecosContent } from "@/components/PrecosContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preços das Aulas Online e Presencial",
  description:
    "Tabela transparente de valores das aulas de Scratch, Roblox, Unity e criação de sites com IA. Compare online e presencial em Caieiras, Franco da Rocha e Mairiporã.",
  alternates: { canonical: "/precos" },
};

export default function Precos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aulas particulares de programação e jogos",
    url: `${SITE_URL}/precos`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: ["Caieiras", "Franco da Rocha", "Mairiporã", "Brasil"],
  };
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <JsonLd data={jsonLd} />
      <PrecosContent />
    </div>
  );
}
