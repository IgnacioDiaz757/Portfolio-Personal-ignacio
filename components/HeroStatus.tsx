"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroStatus() {
  const { t } = useLanguage();

  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-zinc-400">
      <li className="flex items-center gap-2 text-zinc-200">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        {t("hero.disponible")}
      </li>
      <li aria-hidden="true" className="h-3 w-px bg-white/20" />
      <li>{t("hero.ubicacion")}</li>
      <li aria-hidden="true" className="h-3 w-px bg-white/20" />
      <li>{t("hero.remoto")}</li>
    </ul>
  );
}
