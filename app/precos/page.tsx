import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { PRICES, SITE_URL } from "@/lib/site";

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
      <h1 className="font-display text-4xl">Preços</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Valores transparentes por trilha. Presencial com atendimento a domicílio ou espaço corporativo na região de Caieiras, Franco da Rocha e Mairiporã.
      </p>

      <div className="mt-10 hidden overflow-x-auto rounded-3xl border border-line md:block">
        <table className="w-full min-w-[800px] text-left text-sm">
          <caption className="sr-only">Comparativo de preços online e presencial</caption>
          <thead className="bg-surface-2 font-display text-xs">
            <tr>
              {["Trilha", "Online", "Presencial", "Formato"].map((h) => (
                <th key={h} scope="col" className="p-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PRICES.map((p) => (
              <tr key={p.track} className="border-t border-line bg-surface align-top">
                <th scope="row" className="p-4">
                  {p.track}
                  <span className="block text-xs font-normal text-muted">{p.sub}</span>
                </th>
                <td className="p-4">
                  {p.online ? (
                    <>
                      <b>{p.online}</b>
                      <span className="block text-muted">{p.onlineMonth}</span>
                    </>
                  ) : (
                    <em className="text-muted">Não disponível online (apenas presencial)</em>
                  )}
                </td>
                <td className="p-4">
                  <b>{p.onsite}</b>
                  <span className="block text-muted">{p.onsiteMonth}</span>
                </td>
                <td className="p-4 text-muted">{p.format}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-10 grid gap-5 md:hidden">
        {PRICES.map((p) => (
          <li key={p.track} className="rounded-3xl border border-line bg-surface p-5">
            <h2 className="font-display text-base">{p.track}</h2>
            <p className="text-xs text-muted">{p.sub}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-bold text-[var(--accent)]">Online</dt>
                <dd>{p.online ? <>{p.online}<br /><span className="text-muted">{p.onlineMonth}</span></> : "Apenas presencial"}</dd>
              </div>
              <div>
                <dt className="font-bold text-[var(--accent)]">Presencial</dt>
                <dd>{p.onsite}<br /><span className="text-muted">{p.onsiteMonth}</span></dd>
              </div>
              <div>
                <dt className="font-bold text-[var(--accent)]">Formato</dt>
                <dd className="text-muted">{p.format}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-muted">
        *Presencial com atendimento a domicílio ou espaço corporativo na região de Caieiras, Franco da Rocha e Mairiporã.
      </p>
      <div className="mt-10">
        <WhatsAppButton id="precos-whatsapp" text="Olá! Gostaria de um orçamento para as aulas" label="Pedir orçamento" />
      </div>
    </div>
  );
}
