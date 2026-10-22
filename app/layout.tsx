import type { Metadata, Viewport } from "next";
import { Inter, Mrs_Saint_Delafield, Oswald, Playfair_Display } from "next/font/google";
import "./globals.css";
import LanguageProviderWrapper from "@/components/LanguageProviderWrapper";
import HtmlLangUpdater from "@/components/HtmlLangUpdater";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { EMAIL, GITHUB_URL, SITE_URL, socialLinks } from "@/lib/data";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

const signature = Mrs_Saint_Delafield({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6f3" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: "Juan Ignacio Díaz — Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack con más de 3 años de experiencia. HTML, CSS, JavaScript, SQL, PostgreSQL, interfaces, React, Next.js, Node.js e IA. Productos web con foco en experiencia de usuario y resultados medibles.",
  keywords: [
    "desarrollador full stack",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "PostgreSQL",
    "Next.js",
    "React",
    "Node.js",
    "IA",
    "desarrollador web",
    "programador",
    "frontend",
    "backend",
  ],
  authors: [{ name: "Juan Ignacio Díaz" }],
  creator: "Juan Ignacio Díaz",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    title: "Juan Ignacio Díaz — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack con más de 3 años de experiencia. Stack: HTML, CSS, JavaScript, SQL, PostgreSQL, interfaces, React, Next.js, Node.js e IA.",
    siteName: "Juan Ignacio Díaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Ignacio Díaz — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack con más de 3 años. HTML, CSS, JavaScript, SQL, PostgreSQL, React, Next.js, Node.js e IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// datos estructurados para buscadores: quién es y dónde encontrarlo
const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juan Ignacio Díaz",
  jobTitle: "Desarrollador Full Stack",
  url: SITE_URL,
  email: EMAIL,
  address: { "@type": "PostalAddress", addressLocality: "Córdoba", addressCountry: "AR" },
  knowsAbout: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
  sameAs: socialLinks.map((l) => l.href).concat(GITHUB_URL).filter((v, i, a) => a.indexOf(v) === i),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </head>
      <body
        className={`${oswald.variable} ${inter.variable} ${playfair.variable} ${signature.variable} antialiased`}
      >
        <LanguageProviderWrapper>
          <HtmlLangUpdater />
          {children}
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
