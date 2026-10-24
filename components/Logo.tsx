import Image from "next/image";

/** Recorta o logotipo quadrado (com margens) para exibir só o texto. */
export function Logo({ className = "w-40" }: { className?: string }) {
  const img = (src: string, cls: string) => (
    <Image
      src={src}
      alt=""
      width={1080}
      height={1080}
      priority
      className={`absolute max-w-none ${cls}`}
      style={{ width: "128.57%", height: "auto", left: "-14.29%", top: "-157.7%" }}
    />
  );
  return (
    <span
      role="img"
      aria-label="Camis GameDev"
      className={`relative block overflow-hidden ${className}`}
      style={{ aspectRatio: "840 / 260" }}
    >
      {img("/brand/logo-light.png", "dark:hidden")}
      {img("/brand/logo-dark.png", "hidden dark:block")}
    </span>
  );
}
