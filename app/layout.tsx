import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import LanguageProviderWrapper from "@/components/LanguageProviderWrapper";
import HtmlLangUpdater from "@/components/HtmlLangUpdater";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
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
    url: "https://juanignaciodiaz.dev",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${oswald.variable} antialiased`}
      >
        <LanguageProviderWrapper>
          <HtmlLangUpdater />
          {children}
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
