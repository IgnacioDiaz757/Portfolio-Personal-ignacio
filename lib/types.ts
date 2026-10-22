export interface NavLink {
  label: string;
  href: string;
}

export type ProjectCategory = "sistemas" | "web" | "tiendas";

export interface Project {
  title: string;
  summary: string;
  impact: string;
  stack: readonly string[];
  links: {
    live: string;
    repo: string;
  };
  hideLinks?: boolean; // Para ocultar links en sistemas de gestión privados
  image?: string; // captura en /public/projects
  metric?: ProjectMetric;
  category: ProjectCategory;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements?: readonly string[];
  stages?: readonly ExperienceStage[];
}

export interface ExperienceStage {
  label: string; // año o nombre de la etapa
  title: string;
  description: string;
  techs?: readonly string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}


export interface CaseStudy {
  role: string;
  challenge: string;
  solution: readonly string[];
  result: readonly string[];
}
