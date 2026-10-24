import type { MetadataRoute } from "next";
import { SITE_URL, TRACKS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/sobre", "/precos", ...TRACKS.map((t) => `/aulas/${t.slug}`)];
  return pages.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p === "/aulas/logica-infantil-scratch" ? 0.9 : 0.7,
  }));
}
