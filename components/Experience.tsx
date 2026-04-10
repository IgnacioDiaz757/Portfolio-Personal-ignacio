"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getExperience } from "@/lib/data-translations";

export default function Experience() {
  const { language, t } = useLanguage();
  const experience = getExperience(language);
  
  return (
    <section
      id="experiencia"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="space-y-8 sm:space-y-12 px-4 sm:px-6">
        <div className="text-center" data-animate>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t("experience.titulo")}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-300 px-4">
            {t("experience.subtitulo")}
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8 relative z-10">
          {experience.map((job, index) => (
            <article
              key={job.company}
              data-animate="fade-in-right"
              style={{ animationDelay: `${index * 150}ms` }}
              className="relative rounded-2xl border border-white/10 bg-black/50 p-5 sm:p-6 md:p-8 transition-all hover:border-white/20 hover:bg-black/70 hover-lift"
              aria-label={`Experiencia: ${job.role} en ${job.company}`}
            >
              <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-base sm:text-lg text-blue-400">{job.company}</p>
                </div>
                <span className="text-xs sm:text-sm text-zinc-400">{job.period}</span>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-300">{job.description}</p>
              {job.achievements && (
                <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

