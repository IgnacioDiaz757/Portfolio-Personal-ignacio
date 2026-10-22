import type { NavLink, SkillGroup, Experience, SocialLink } from "./types";

/** dominio público del portafolio (sitemap, Open Graph y datos estructurados) */
export const SITE_URL = "https://portfoliopersonalignaciodiaz.vercel.app";
/** PDF generado con `npm run cv` (uno por idioma) */
export const cvUrl = (language: string) => `/cv/Juan-Ignacio-Diaz-CV-${language}.pdf`;
export const GITHUB_URL = "https://github.com/IgnacioDiaz757";
/** +54 9 351 2606190 → wa.me abre WhatsApp o WhatsApp Business según lo instalado */
export const WHATSAPP_NUMBER = "5493512606190";
export const EMAIL = "ignadiazcab1905@gmail.com";
export const WHATSAPP_URL =
  "https://wa.me/5493512606190?text=Hola%20Juan%2C%20quiero%20trabajar%20con%20vos";

export const navLinks: readonly NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const skillGroups: readonly SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Next.js",
      "React",
      "Astro",
      "Tailwind",
      "Framer Motion",
    ],
  },
  {
    label: "Backend & Data",
    items: [
      "Node.js",
      "PostgreSQL",
      "SQL",
      "Supabase",
      "MongoDB",
      "Prisma",
      "tRPC",
      "Sistemas de gestión",
    ],
  },
  {
    label: "Diseño & UX",
    items: ["UI/UX", "Design Systems", "Figma", "Prototipado", "Animaciones"],
  },
  {
    label: "IA & Media",
    items: [
      "Integraciones IA",
      "Modelos generativos",
      "Automatizaciones",
      "Edición de video",
    ],
  },
  {
    label: "Tooling",
    items: ["TypeScript", "Vitest", "Playwright", "CI/CD", "Supabase CLI"],
  },
] as const;

export const experience: readonly Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Minimal Ops",
    period: "2022 — Actualidad",
    description:
      "Lidero la migración de plataformas B2B a Next.js + Edge, priorizando performance y DX.",
    achievements: [
      "Migré 3 plataformas legacy a Next.js mejorando performance en 60%",
      "Implementé sistema de design tokens reduciendo tiempo de desarrollo en 30%",
      "Mentoreé equipo de 4 developers en mejores prácticas de React",
    ],
  },
  {
    role: "Product Engineer",
    company: "Loop Studio",
    period: "2019 — 2022",
    description:
      "Entrega end-to-end de MVPs: definición de scope, arquitectura full-stack y handoff con diseño.",
    achievements: [
      "Entregué 12+ MVPs en tiempo récord con alta satisfacción del cliente",
      "Diseñé arquitectura escalable que soportó crecimiento de 10x usuarios",
    ],
  },
] as const;

export const socialLinks: readonly SocialLink[] = [
  {
    name: "GitHub",
    href: GITHUB_URL,
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/juanignaciodiaz",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/zerounofactory",
    icon: "instagram",
  },
] as const;

