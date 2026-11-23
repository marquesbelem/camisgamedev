"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { ThemeToggle } from "./ThemeToggle";
import { WhatsAppButton } from "./WhatsAppButton";
import { TRANSLATIONS } from "@/lib/i18n";

export function Header() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].nav;

  const NAV = [
    { href: "/#trilhas", label: t.classes },
    { href: "/sobre", label: t.about },
    { href: "/precos", label: t.prices },
    { href: "/#contato", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[var(--bg)]/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" aria-label={t.homeAria}>
          <Logo className="w-36 sm:w-44" />
        </Link>
        <nav aria-label={t.navAria} className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-bold text-muted transition hover:text-[var(--accent)]"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <WhatsAppButton
              id="header-whatsapp"
              text={t.scheduleWhatsapp}
              label={t.schedule}
            />
          </div>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      <nav
        aria-label={t.navMobileAria}
        className="flex justify-center gap-6 border-t border-line px-4 py-2 md:hidden"
      >
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className="py-1 text-sm font-bold text-muted">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
