"use client";

import { useEffect, useRef } from "react";
import { FaLock, FaXmark } from "react-icons/fa6";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCaseStudy } from "@/lib/case-studies";
import type { Project } from "@/lib/types";
import TechChips from "./TechChips";

interface CaseStudyDialogProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyDialog({ project, onClose }: CaseStudyDialogProps) {
  const { language, t } = useLanguage();
  const ref = useRef<HTMLDialogElement>(null);

  // el <dialog> nativo da foco atrapado, Esc y rol accesible sin código extra
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const study = project ? getCaseStudy(project.links.live, language) : undefined;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        // un clic sobre el fondo oscuro (el propio <dialog>) lo cierra
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="case-title"
      className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[var(--background)] p-0 text-white shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      {project && study && (
        <div className="space-y-6 p-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h3 id="case-title" className="text-xl font-semibold text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="text-sm text-emerald-300">
                {t("caso.rol")}: {study.role}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={t("caso.cerrar")}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FaXmark aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>

          {project.hideLinks && (
            <p className="flex items-center gap-2 text-xs text-zinc-400">
              <FaLock aria-hidden="true" className="h-3 w-3" />
              {t("caso.privado")}
            </p>
          )}

          <section className="space-y-2">
            <h4 className="text-sm font-semibold text-zinc-400">{t("caso.desafio")}</h4>
            <p className="text-base text-zinc-300">{study.challenge}</p>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-semibold text-zinc-400">{t("caso.solucion")}</h4>
            <ul className="list-disc space-y-2 pl-5 text-base text-zinc-300 marker:text-emerald-400">
              {study.solution.map((item) => (
                <li key={item}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-semibold text-zinc-400">{t("caso.resultado")}</h4>
            <ul className="space-y-2">
              {study.result.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3 text-base text-zinc-200"
                >
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h4 className="text-sm font-semibold text-zinc-400">{t("caso.stack")}</h4>
            <TechChips stack={project.stack} />
          </section>
        </div>
      )}
    </dialog>
  );
}
