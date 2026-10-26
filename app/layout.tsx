import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { BRAND, MENTOR_NAME, PERSONAL_SITE_URL, REGION, SITE_URL } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const bungee = localFont({
  src: "./fonts/Bungee-Regular.ttf",
  variable: "--font-bungee",
  display: "swap",
});
const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aulas de Programação e Jogos | Camis GameDev",
    template: "%s | Camis GameDev",
  },
  description:
    "Mentoria e aulas particulares de programação, Roblox, Unity e Scratch com engenheira de software e game developer sênior. Online no Brasil todo e presencial em Caieiras e região.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: BRAND,
    title: "Aulas de Programação e Jogos | Camis GameDev",
    description:
      "Aprenda a programar criando jogos: Scratch, Roblox, Unity e sites com IA. Online no Brasil todo e presencial em Caieiras e região.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aulas de Programação e Jogos | Camis GameDev",
    description:
      "Aprenda a programar criando jogos: Scratch, Roblox, Unity e sites com IA. Online e presencial em Caieiras e região.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0818" },
  ],
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#mentor`,
      name: MENTOR_NAME,
      url: PERSONAL_SITE_URL,
      sameAs: [PERSONAL_SITE_URL],
      jobTitle: "Engenheira de Software & Game Developer Senior",
      description:
        "Mais de 8 anos de experiência em engenharia de software e produção de jogos comerciais.",
      image: `${SITE_URL}/brand/profile.jpg`,
      knowsAbout: ["Unity", "C#", "Roblox Luau", "Scratch", "ScratchJr", "Next.js", "AI-assisted Web Development"],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Mentoria & Aulas de Programação",
      url: SITE_URL,
      image: `${SITE_URL}/brand/profile.jpg`,
      areaServed: REGION.map((name) => ({ "@type": "City", name })),
      priceRange: "$$",
      founder: { "@id": `${SITE_URL}/#mentor` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${bungee.variable} ${raleway.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--accent-fg)]"
        >
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <JsonLd data={jsonLd} />
        <Analytics />
      </body>
    </html>
  );
}
