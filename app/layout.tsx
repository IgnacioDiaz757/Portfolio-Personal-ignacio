import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Ignacio Díaz — Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack con 6+ años de experiencia. Especializado en Next.js, React, TypeScript y Node.js. Construyo productos web escalables con foco en experiencia de usuario y resultados medibles.",
  keywords: [
    "desarrollador full stack",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
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
      "Desarrollador Full Stack especializado en Next.js, React y TypeScript. Construyo productos web escalables.",
    siteName: "Juan Ignacio Díaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Ignacio Díaz — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en Next.js, React y TypeScript.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
