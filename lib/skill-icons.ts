import type { IconType } from "react-icons";
import {
  SiAstro,
  SiCss,
  SiFigma,
  SiFramer,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVitest,
} from "react-icons/si";

export interface SkillIcon {
  icon: IconType;
  color: string;
}

// Tecnologías con logo de marca; el resto se muestra como texto
export const SKILL_ICONS: Record<string, SkillIcon> = {
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Next.js": { icon: SiNextdotjs, color: "var(--color-white)" },
  React: { icon: SiReact, color: "#61DAFB" },
  Astro: { icon: SiAstro, color: "#FF5D01" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { icon: SiFramer, color: "var(--color-white)" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Supabase: { icon: SiSupabase, color: "#3FCF8E" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Prisma: { icon: SiPrisma, color: "#7C85F5" },
  tRPC: { icon: SiTrpc, color: "#398CCB" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Vitest: { icon: SiVitest, color: "#6E9F18" },
  "CI/CD": { icon: SiGithubactions, color: "#2088FF" },
  Stripe: { icon: SiStripe, color: "#635BFF" },
};

// Nombres alternativos con los que aparecen en los proyectos
const ALIASES: Record<string, string> = {
  html: "HTML5",
  css: "CSS3",
};

const LOOKUP = new Map<string, SkillIcon>(
  Object.entries(SKILL_ICONS).map(([name, value]) => [name.toLowerCase(), value])
);

export function getSkillIcon(name: string): SkillIcon | undefined {
  const key = name.trim().toLowerCase();
  return LOOKUP.get(ALIASES[key]?.toLowerCase() ?? key);
}
