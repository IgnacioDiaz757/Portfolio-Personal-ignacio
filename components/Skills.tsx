import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-label="Habilidades"
    >
      <div className="space-y-8 sm:space-y-12 px-4 sm:px-6">
        <div className="text-center" data-animate>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Habilidades & Tecnologías
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-400 px-4">
            Stack tecnológico que utilizo para construir productos
            modernos
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.label}
              data-animate
              style={{ animationDelay: `${index * 100}ms` }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 focus-within:ring-2 focus-within:ring-blue-500"
              tabIndex={0}
            >
              <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-semibold text-white">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

