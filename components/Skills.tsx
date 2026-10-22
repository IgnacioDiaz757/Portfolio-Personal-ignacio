"use client";

import { useState, type CSSProperties } from "react";
import { skillGroups } from "@/lib/data";
import { SKILL_ICONS } from "@/lib/skill-icons";
import { trackSpotlight } from "@/lib/spotlight";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  const withIcon = group.items.filter((s) => SKILL_ICONS[s]);
  const textOnly = group.items.filter((s) => !SKILL_ICONS[s]);

  return (
    <section
      id="habilidades"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10 px-4 sm:px-6">
        <div className="text-center" data-animate>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {t("skills.titulo")}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-300 px-4">
            {t("skills.subtitulo")}
          </p>
        </div>

        <div
          role="tablist"
          aria-label={t("skills.titulo")}
          className="flex flex-wrap justify-center gap-2"
        >
          {skillGroups.map((g, i) => (
            <button
              key={g.label}
              type="button"
              role="tab"
              id={`skills-tab-${i}`}
              aria-selected={i === active}
              aria-controls="skills-panel"
              onClick={() => setActive(i)}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                i === active
                  ? "border-white/30 bg-white text-black"
                  : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div
          key={active}
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`skills-tab-${active}`}
          className="space-y-6"
        >
          {withIcon.length > 0 && (
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {withIcon.map((skill, i) => {
                const { icon: Icon, color } = SKILL_ICONS[skill];
                return (
                  <li
                    key={skill}
                    onMouseMove={trackSpotlight}
                    style={{ animationDelay: `${i * 60}ms`, "--brand": color } as CSSProperties}
                    className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-6 sm:py-8 animate-fade-in-up [animation-fill-mode:both] transition-colors hover:border-white/25"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(180px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--brand) 22%, transparent), transparent 70%)",
                      }}
                    />
                    <Icon
                      aria-hidden="true"
                      className="relative h-9 w-9 sm:h-11 sm:w-11 text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--brand)] [@media(hover:none)]:text-[var(--brand)]"
                    />
                    <span className="relative text-sm sm:text-base font-medium text-zinc-200">
                      {skill}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

          {textOnly.length > 0 && (
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {textOnly.map((skill, i) => (
                <li
                  key={skill}
                  style={{ animationDelay: `${(withIcon.length + i) * 60}ms` }}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm text-zinc-300 animate-fade-in-up [animation-fill-mode:both]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
