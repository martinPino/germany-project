import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { GuideProvider } from "@/components/GuideDialog";
import Header from "@/components/Header";
import { env, site } from "@/content/site";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

const title = "Lena Ayza Moreno · Erzieherin en Alemania | Guía gratis para educadoras";
const description =
  "Guía gratuita y acompañamiento para maestras y maestros hispanohablantes que quieren trabajar como educadores infantiles (Erzieherin) en Kitas de Alemania.";

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: site.name, locale: "es_ES", type: "website", images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#181B19" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Erzieherin (educadora infantil)",
  url: env.siteUrl,
  image: `${env.siteUrl}/lena.jpg`,
  sameAs: [env.tiktok],
  nationality: "ES",
  workLocation: { "@type": "Country", name: "Alemania" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-ES" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <GuideProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </GuideProvider>
      </body>
    </html>
  );
}
