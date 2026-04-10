export interface NavLink {
  label: string;
  href: string;
}

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
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

