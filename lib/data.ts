import type { NavLink, Project, SkillGroup, Experience, SocialLink } from "./types";

export const GITHUB_URL = "https://github.com/IgnacioDiaz757";
export const WHATSAPP_URL = "https://wa.me/5493512606190?text=Hola%20Juan%2C%20quiero%20trabajar%20con%20vos";

export const navLinks: readonly NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const projects: readonly Project[] = [
  {
    title: "Riveras del Suquía · Sistema de Gestión",
    summary:
      "ERP cooperativo que centraliza cobranzas, logística, stock e indicadores en tiempo real para la cooperativa Riveras del Suquía.",
    impact:
      "Reduje 70% la carga operativa mensual al automatizar reportes financieros y flujos de aprobación.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind"],
    links: {
      live: "https://riverasdelsuquia.com.ar/sistema",
      repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaSistema",
    },
    hideLinks: true,
  },
  {
    title: "Plataforma Gastronómica · Revista Matices",
    summary:
      "Marketplace gastronómico con catálogo editable, formularios inteligentes y contenidos premium para la Revista Matices.",
    impact:
      "Aumenté 3x las suscripciones digitales al integrar paywalls dinámicos y campañas IA.",
    stack: ["Next.js", "Supabase", "Stripe", "Tailwind", "IA Integrations"],
    links: {
      live: "https://revistamaticescba.com",
      repo: "https://github.com/IgnacioDiaz757/PlataformaMatices",
    },
  },
  {
    title: "Riveras del Suquía · Plataforma Web",
    summary:
      "Sitio público con mapas interactivos, agenda de eventos y CMS headless para comunicar actividades de la cooperativa.",
    impact:
      "Multipliqué por 5 las visitas orgánicas gracias a optimizaciones SEO y contenido administrable.",
    stack: ["Next.js", "Mapbox", "Contentful", "Tailwind"],
    links: {
      live: "https://riverasdelsuquia.com.ar",
      repo: "https://github.com/IgnacioDiaz757/RiverasDelSuquiaPagina",
    },
  },
  {
    title: "Viveros Unidos · Plataforma Web",
    summary:
      "Catálogo digital con filtros de especies, fichas técnicas descargables y pedidos mayoristas para la red Viveros Unidos.",
    impact:
      "Incrementé 45% las ventas B2B habilitando pedidos online con seguimiento y alertas automáticas.",
    stack: ["React", "Next.js", "Supabase", "Tailwind"],
    links: {
      live: "https://viverosunidos.com",
      repo: "https://github.com/IgnacioDiaz757/ViverosUnidos",
    },
  },
  {
    title: "Viveros Unidos · Sistema de Gestión",
    summary:
      "Control de stock, producción y distribución con tableros personalizados y notificaciones para viveros asociados.",
    impact:
      "Logré trazabilidad completa de lotes y un ahorro del 30% en tiempos de coordinación logística.",
    stack: ["Next.js", "Node.js", "MongoDB", "Supabase", "tRPC"],
    links: {
      live: "https://viverosunidos.com/admin",
      repo: "https://github.com/IgnacioDiaz757/ViverosUnidosGestion",
    },
    hideLinks: true,
  },
  {
    title: "Coopyme · Plataforma Cooperativa",
    summary:
      "Portal integral para cooperativas pymes con módulos de membresías, capacitación y conexión con proveedores.",
    impact:
      "Facilité la autogestión de 150+ asociados mediante dashboards personalizados y automatizaciones IA.",
    stack: ["Next.js", "Supabase", "Node.js", "Tailwind", "Automations"],
    links: {
      live: "https://coopyme.lat",
      repo: "https://github.com/IgnacioDiaz757/Coopyme",
    },
  },
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
    name: "Twitter",
    href: "https://twitter.com/juanignaciodiaz",
    icon: "twitter",
  },
] as const;

