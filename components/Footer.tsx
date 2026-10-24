import Link from "next/link";
import { Logo } from "./Logo";
import { REGION, TRACKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <Logo className="w-44" />
          <p className="mt-4 max-w-xs text-sm text-muted">
            Mentoria e aulas particulares de programação e jogos, com engenharia real e pedagogia estruturada.
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm text-[var(--accent)]">Aulas</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {TRACKS.map((t) => (
              <li key={t.slug}>
                <Link href={`/aulas/${t.slug}`} className="text-muted hover:text-[var(--accent)]">
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm text-[var(--accent)]">Atendimento</h2>
          <p className="mt-3 text-sm text-muted">
            Online: todo o Brasil e exterior.
            <br />
            Presencial: {REGION.join(", ")} (SP).
          </p>
        </div>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} Camis GameDev. Todos os direitos reservados.
      </p>
    </footer>
  );
}
