"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaLock } from "react-icons/fa6";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjects } from "@/lib/data-translations";
import { GITHUB_URL } from "@/lib/data";
import { trackSpotlight } from "@/lib/spotlight";
import { getCaseStudy } from "@/lib/case-studies";
import type { Project, ProjectCategory } from "@/lib/types";
import CaseStudyDialog from "./CaseStudyDialog";
import TechChips from "./TechChips";

const INITIAL_VISIBLE = 6;

const SPOTLIGHT_STYLE = {
  background:
    "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--color-white) 8%, transparent), transparent 70%)",
} as const;

function hostOf(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

// captura dentro de un marco de navegador; los proyectos privados muestran un placeholder
function BrowserShot({ project, sizes, priority }: { project: Project; sizes: string; priority?: boolean }) {
  const { t } = useLanguage();
  return (
    <div className="force-dark overflow-hidden rounded-lg border border-white/10 bg-[#0d1117]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <span className="h-2 w-2 rounded-full bg-green-500/80" />
        </div>
        <span className="truncate font-mono text-[10px] text-zinc-500">
          {project.hideLinks ? "•••" : hostOf(project.links.live)}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title}`}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-zinc-500">
            <FaLock aria-hidden="true" className="h-6 w-6" />
            <span className="text-xs">{t("projects.privado")}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Metric({ project, large }: { project: Project; large?: boolean }) {
  if (!project.metric) return null;
  return (
    <p className="flex items-baseline gap-3">
      <span
        className={`bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-bold text-transparent ${
          large ? "text-5xl sm:text-6xl" : "text-3xl"
        }`}
      >
        {project.metric.value}
      </span>
      <span className={`text-zinc-400 ${large ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}>
        {project.metric.label}
      </span>
    </p>
  );
}

function ProjectLinks({ project, onCase }: { project: Project; onCase?: () => void }) {
  const { t } = useLanguage();
  if (project.hideLinks && !onCase) return null;
  // varios repos apuntan al mismo sitio: en ese caso no se muestra "Código"
  const hasRepo = !project.hideLinks && project.links.repo !== project.links.live;
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {!project.hideLinks && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label={`${t("projects.verDemo")} ${project.title} (se abre en nueva pestaña)`}
        >
          {t("projects.verDemo")}
        </a>
      )}
      {hasRepo && (
        <a
          href={project.links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded text-sm font-medium text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={`${t("projects.codigo")} ${project.title} (se abre en nueva pestaña)`}
        >
          {t("projects.codigo")}
        </a>
      )}
      {onCase && (
        <button
          type="button"
          onClick={onCase}
          aria-haspopup="dialog"
          aria-label={`${t("projects.verCaso")}: ${project.title}`}
          className="inline-flex min-h-11 items-center rounded text-sm font-medium text-emerald-300 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          {t("projects.verCaso")} →
        </button>
      )}
    </div>
  );
}

function FeaturedCard({ project, onCase }: { project: Project; onCase?: () => void }) {
  const { t } = useLanguage();
  return (
    <article
      onMouseMove={trackSpotlight}
      data-animate="fade-in-up"
      className="group relative grid items-center gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 transition-colors hover:border-white/25 lg:grid-cols-2 lg:gap-10"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={SPOTLIGHT_STYLE}
      />
      <div className="relative">
        <BrowserShot project={project} sizes="(min-width: 1024px) 560px, 100vw" priority />
      </div>
      <div className="relative space-y-5">
        <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          {t("projects.destacado")}
        </span>
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">{project.title}</h3>
        <Metric project={project} large />
        <p className="text-base sm:text-lg text-zinc-300">{project.summary}</p>
        <TechChips stack={project.stack} />
        <ProjectLinks project={project} onCase={onCase} />
      </div>
    </article>
  );
}

function ProjectCard({ project, index, onCase }: { project: Project; index: number; onCase?: () => void }) {
  return (
    <article
      onMouseMove={trackSpotlight}
      style={{ animationDelay: `${(index % 3) * 80}ms` }}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 animate-fade-in-up [animation-fill-mode:both] transition-colors hover:border-white/25"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={SPOTLIGHT_STYLE}
      />
      <div className="relative">
        <BrowserShot project={project} sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="relative flex flex-1 flex-col gap-3">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <Metric project={project} />
        <p className="text-sm text-zinc-300">{project.summary}</p>
        <div className="mt-auto space-y-3 pt-1">
          <TechChips stack={project.stack} />
          <ProjectLinks project={project} onCase={onCase} />
        </div>
      </div>
    </article>
  );
}

const FILTERS: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "projects.filtroTodos" },
  { id: "sistemas", label: "projects.filtroSistemas" },
  { id: "web", label: "projects.filtroWeb" },
  { id: "tiendas", label: "projects.filtroTiendas" },
];

export default function Projects() {
  const { language, t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [caseProject, setCaseProject] = useState<Project | null>(null);

  const projects = getProjects(language);
  const pool = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  // el destacado solo aparece sin filtro; con filtro se listan todas las coincidencias por igual
  const featured = filter === "all" ? projects.find((p) => p.image && p.metric) : undefined;
  const rest = pool.filter((p) => p !== featured);
  const limit = featured ? INITIAL_VISIBLE - 1 : INITIAL_VISIBLE;
  const visible = expanded ? rest : rest.slice(0, limit);
  const caseHandler = (p: Project) =>
    getCaseStudy(p.links.live, language) ? () => setCaseProject(p) : undefined;

  return (
    <section
      id="proyectos"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-12 px-4 sm:px-6">
        <div className="text-center" data-animate>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t("projects.titulo")}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-300 px-4">
            {t("projects.subtitulo")}
          </p>
        </div>

        <div role="group" aria-label={t("projects.filtrar")} className="flex flex-wrap justify-center gap-2">
          {FILTERS.map(({ id, label }) => {
            const count = id === "all" ? projects.length : projects.filter((p) => p.category === id).length;
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFilter(id);
                  setExpanded(false);
                }}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  active
                    ? "border-white/30 bg-white text-black"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                {t(label)} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {featured && <FeaturedCard project={featured} onCase={caseHandler(featured)} />}

        <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <ProjectCard
              key={project.links.live}
              project={project}
              index={index}
              onCase={caseHandler(project)}
            />
          ))}
        </div>

        {rest.length > limit && (
          <div className="text-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {expanded ? t("projects.verMenos") : `${t("projects.verTodos")} (${pool.length})`}
            </button>
          </div>
        )}

        {/* GitHub Invitation Section */}
        <div className="mt-12 sm:mt-16 text-center" data-animate>
          <p className="mx-auto mb-4 sm:mb-6 max-w-2xl text-base sm:text-lg text-zinc-300">
            {t("projects.masProyectos")}
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Ver perfil de GitHub"
          >
            <FaGithub aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <CaseStudyDialog project={caseProject} onClose={() => setCaseProject(null)} />
    </section>
  );
}
