"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getProjects } from "@/lib/data-translations";
import { GITHUB_URL } from "@/lib/data";

export default function Projects() {
  const { language, t } = useLanguage();
  const projects = getProjects(language);
  
  return (
    <section
      id="proyectos"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="space-y-8 sm:space-y-12 px-4 sm:px-6">
        <div className="text-center" data-animate>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t("projects.titulo")}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-300 px-4">
            {t("projects.subtitulo")}
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-animate="scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover-lift focus-within:ring-2 focus-within:ring-blue-500"
              tabIndex={0}
            >
              <div className="mb-3 sm:mb-4 flex items-start justify-between">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-zinc-300">{project.summary}</p>
              <div className="mb-3 sm:mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {!project.hideLinks && (
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label={`${t("projects.verDemo")} ${project.title} (se abre en nueva pestaña)`}
                  >
                    {t("projects.verDemo")}
                  </a>
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label={`${t("projects.codigo")} ${project.title} (se abre en nueva pestaña)`}
                  >
                    {t("projects.codigo")}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
        
        {/* GitHub Invitation Section */}
        <div className="mt-12 sm:mt-16 text-center" data-animate>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg text-zinc-300">
            {t("projects.masProyectos")}
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Ver perfil de GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.05-.02-2.07-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.09-.12-.3-.52-1.5.11-3.12 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.4.98.01 1.97.14 2.89.4 2.21-1.49 3.18-1.18 3.18-1.18.63 1.62.23 2.82.11 3.12.74.81 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56C20.22 21.39 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

