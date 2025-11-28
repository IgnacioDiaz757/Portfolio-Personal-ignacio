import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-label="Proyectos"
    >
      <div className="space-y-8 sm:space-y-12 px-4 sm:px-6">
        <div className="text-center" data-animate>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Proyectos Destacados
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-400 px-4">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-animate
              style={{ animationDelay: `${index * 100}ms` }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 focus-within:ring-2 focus-within:ring-blue-500"
              tabIndex={0}
            >
              <div className="mb-3 sm:mb-4 flex items-start justify-between">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-zinc-400">{project.summary}</p>
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
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    Ver Demo →
                  </a>
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label={`Ver código de ${project.title}`}
                  >
                    Código →
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

