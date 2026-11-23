import type { Metadata } from "next";
import { SobreContent } from "@/components/SobreContent";

export const metadata: Metadata = {
  title: "Sobre a Mentora | Engenheira de Software e Game Developer",
  description:
    "Conheça a trajetória da engenheira de software e game developer sênior: 8+ anos de experiência, liderança técnica, produções comerciais e pós-graduação.",
  alternates: { canonical: "/sobre" },
};

export default function Sobre() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <SobreContent />
    </div>
  );
}
