import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppButton({
  text,
  label = "Chamar no WhatsApp",
  id,
  variant = "primary",
}: {
  text: string;
  label?: string;
  id?: string;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition hover:-translate-y-0.5 active:translate-y-0";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-lg shadow-[var(--accent)]/25"
      : "border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]";
  return (
    <a
      id={id}
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      <MessageCircle size={20} aria-hidden />
      {label}
    </a>
  );
}
