import type { MetadataRoute } from "next";
import { env } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/aviso-legal", "/privacidad"].map((p) => ({ url: `${env.siteUrl}${p}`, lastModified: now }));
}
