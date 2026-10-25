import type { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, Gamepad2, Users } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PERSONAL_SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a Mentora | Engenheira de Software e Game Developer",
  description:
    "Conheça a trajetória da engenheira de software e game developer sênior: 8+ anos de experiência, liderança técnica, produções comerciais e pós-graduação.",
  alternates: { canonical: "/sobre" },
};

const FACTS = [
  { icon: Award, t: "8+ anos", d: "de experiência em engenharia de software" },
  { icon: Gamepad2, t: "Jogos comerciais", d: "histórico real na indústria de games" },
  { icon: Users, t: "Liderança técnica", d: "code review e mentoria de times" },
  { icon: GraduationCap, t: "Pós-graduação", d: "formação acadêmica sólida" },
];

export default function Sobre() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.3fr]">
        <Image
          src="/brand/profile.jpg"
          alt="Retrato da mentora Camis"
          width={600}
          height={600}
          priority
          sizes="(max-width: 768px) 90vw, 380px"
          className="aspect-square w-full rounded-[2rem] object-cover"
        />
        <div>
          <h1 className="font-display text-4xl leading-tight">Sobre a mentora</h1>
          <p className="mt-5 text-lg text-muted">
            Engenheira de Software e Desenvolvedora de Jogos sênior, com mais de 8 anos de experiência, liderança técnica e histórico em produções comerciais.
          </p>
          <p className="mt-4 text-muted">
            Minhas aulas unem engenharia real, pedagogia estruturada e desenvolvimento cognitivo: do primeiro bloco do ScratchJr à arquitetura de um jogo em Unity.
          </p>
          <a
            href={PERSONAL_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-bold text-[var(--accent)] underline underline-offset-4"
          >
            Ver currículo completo
          </a>
        </div>
      </div>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FACTS.map(({ icon: I, t, d }) => (
          <li key={t} className="card-hover rounded-3xl border border-line bg-surface p-6">
            <I className="text-[var(--accent)]" size={28} aria-hidden />
            <h2 className="font-display mt-4 text-base">{t}</h2>
            <p className="mt-2 text-sm text-muted">{d}</p>
          </li>
        ))}
      </ul>
      <div className="mt-12 text-center">
        <WhatsAppButton id="sobre-whatsapp" text="Olá! Vi seu site e gostaria de conversar sobre as aulas" />
      </div>
    </div>
  );
}
