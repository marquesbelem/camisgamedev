"use client";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLanguage } from "@/components/LanguageProvider";
import { PRICES_EN, TRANSLATIONS } from "@/lib/i18n";
import { PRICES } from "@/lib/site";

export function PrecosContent() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].prices;
  const prices = locale === "en" ? PRICES_EN : PRICES;

  return (
    <>
      <h1 className="font-display text-4xl">{t.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">
        {t.subtitle}
      </p>

      <div className="mt-10 hidden overflow-x-auto rounded-3xl border border-line md:block">
        <table className="w-full min-w-[800px] text-left text-sm">
          <caption className="sr-only">{t.caption}</caption>
          <thead className="bg-surface-2 font-display text-xs">
            <tr>
              {t.headers.map((h) => (
                <th key={h} scope="col" className="p-4">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {prices.map((p) => (
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
                    <em className="text-muted">{t.notOnline}</em>
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
        {prices.map((p) => (
          <li key={p.track} className="rounded-3xl border border-line bg-surface p-5">
            <h2 className="font-display text-base">{p.track}</h2>
            <p className="text-xs text-muted">{p.sub}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-bold text-[var(--accent)]">{t.onlineLabel}</dt>
                <dd>{p.online ? <>{p.online}<br /><span className="text-muted">{p.onlineMonth}</span></> : t.onsiteOnlyShort}</dd>
              </div>
              <div>
                <dt className="font-bold text-[var(--accent)]">{t.onsiteLabel}</dt>
                <dd>{p.onsite}<br /><span className="text-muted">{p.onsiteMonth}</span></dd>
              </div>
              <div>
                <dt className="font-bold text-[var(--accent)]">{t.formatLabel}</dt>
                <dd className="text-muted">{p.format}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-muted">
        {t.footnote}
      </p>
      <div className="mt-10">
        <WhatsAppButton id="precos-whatsapp" text={t.whatsappText} label={t.whatsappLabel} />
      </div>
    </>
  );
}
