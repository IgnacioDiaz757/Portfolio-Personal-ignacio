"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { FaBolt, FaGears, FaLaptopCode, FaPlug, FaQrcode, FaSitemap } from "react-icons/fa6";
import { useLanguage } from "@/contexts/LanguageContext";
import { getExperience } from "@/lib/data-translations";
import { getSkillIcon } from "@/lib/skill-icons";
import { trackSpotlight } from "@/lib/spotlight";
import type { Experience as ExperienceData } from "@/lib/types";

// mismo orden que `achievements` en data-translations
const ACHIEVEMENT_ICONS: readonly IconType[] = [
  FaLaptopCode,
  FaSitemap,
  FaQrcode,
  FaGears,
  FaPlug,
  FaBolt,
];

function Timeline({ stages }: { stages: NonNullable<ExperienceData["stages"]> }) {
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [seen, setSeen] = useState<ReadonlySet<number>>(new Set());

  // cada etapa aparece al entrar en pantalla
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          setSeen((prev) => new Set(prev).add(index));
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [stages.length]);

  // la línea se dibuja a medida que se hace scroll
  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    if (!list || !fill) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = list.getBoundingClientRect();
      const probe = window.innerHeight * 0.6;
      const progress = Math.min(Math.max((probe - rect.top) / rect.height, 0), 1);
      fill.style.height = `${progress * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ol ref={listRef} className="relative space-y-8 sm:space-y-12">
      {/* riel y relleno de la línea */}
      <span
        aria-hidden="true"
        className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 rounded-full bg-white/10"
      >
        <span
          ref={fillRef}
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-emerald-300 to-sky-400"
          style={{ height: "0%" }}
        />
      </span>

      {stages.map((stage, i) => {
        const left = i % 2 === 0; // en escritorio alterna los lados
        const visible = seen.has(i);
        const isLast = i === stages.length - 1;
        return (
          <li
            key={stage.label}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            data-index={i}
            className="relative md:grid md:grid-cols-2 md:gap-14"
          >
            <span
              aria-hidden="true"
              className={`absolute left-4 md:left-1/2 top-6 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 transition-all duration-500 ${
                visible
                  ? "border-emerald-300 bg-emerald-300 shadow-[0_0_0_6px_rgba(110,231,183,0.15)]"
                  : "border-white/20 bg-black"
              } ${isLast && visible ? "animate-pulse" : ""}`}
            />
            <article
              onMouseMove={trackSpotlight}
              className={`group relative ml-10 md:ml-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition-all duration-700 hover:border-white/25 motion-reduce:transition-none ${
                left ? "md:col-start-1 md:text-right" : "md:col-start-2"
              } ${visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--color-white) 7%, transparent), transparent 70%)",
                }}
              />
              <span className="relative inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                {stage.label}
              </span>
              <h4 className="relative mt-3 text-lg sm:text-xl font-semibold text-white">{stage.title}</h4>
              <p className="relative mt-2 text-sm sm:text-base text-zinc-300">{stage.description}</p>
              {stage.techs && (
                <ul className={`relative mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                  {stage.techs.map((tech) => {
                    const brand = getSkillIcon(tech);
                    return (
                      <li
                        key={tech}
                        className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-300"
                      >
                        {brand && (
                          <brand.icon aria-hidden="true" className="h-3.5 w-3.5" style={{ color: brand.color }} />
                        )}
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              )}
            </article>
          </li>
        );
      })}
    </ol>
  );
}

export default function Experience() {
  const { language, t } = useLanguage();
  const experience = getExperience(language);

  return (
    <section
      id="experiencia"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl space-y-10 sm:space-y-14 px-4 sm:px-6">
        <div className="text-center" data-animate>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t("experience.titulo")}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-300 px-4">
            {t("experience.subtitulo")}
          </p>
        </div>

        {experience.map((job) => (
          <div key={job.company} className="space-y-10 sm:space-y-14">
            {/* cabecera del rol */}
            <div
              className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 text-center"
              data-animate="fade-in-up"
            >
              <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                {job.period}
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">{job.role}</h3>
              <p className="mt-1 text-base sm:text-lg text-blue-400">{job.company}</p>
              <p className="mt-4 text-sm sm:text-base text-zinc-300">{job.description}</p>
            </div>

            {job.stages && <Timeline stages={job.stages} />}

            {job.achievements && (
              <div className="space-y-5">
                <h3 className="text-center text-xl sm:text-2xl font-semibold text-white">
                  {t("experience.logros")}
                </h3>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                  {job.achievements.map((achievement, idx) => {
                    const Icon = ACHIEVEMENT_ICONS[idx] ?? FaLaptopCode;
                    return (
                      <li
                        key={achievement}
                        onMouseMove={trackSpotlight}
                        className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-colors hover:border-white/25"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{
                            background:
                              "radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), rgba(110,231,183,0.14), transparent 70%)",
                          }}
                        />
                        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <span className="relative text-sm sm:text-base font-medium text-zinc-200">
                          {achievement}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
