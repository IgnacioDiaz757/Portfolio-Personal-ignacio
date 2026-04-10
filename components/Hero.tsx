"use client";

import { GITHUB_URL, WHATSAPP_URL } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  onNavClick: (href: string, onMenuClose?: () => void) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  const { t } = useLanguage();
  
  return (
    <section
      id="inicio"
      className="flex min-h-[85vh] sm:min-h-[90vh] flex-col items-center justify-center space-y-6 sm:space-y-8 text-center px-4"
      aria-labelledby="hero-heading"
    >
      <div className="space-y-4 sm:space-y-6 w-full">
        <div className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-zinc-300 animate-scale-in">
          {t("hero.saludo")}
        </div>
        <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white px-4 animate-fade-in-up animate-delay-100">
          {t("hero.titulo")}
        </h1>
        <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 px-4 animate-fade-in-up animate-delay-200">
          {t("hero.descripcion")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 animate-fade-in-up animate-delay-300">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/5 p-2.5 sm:p-3 text-white transition-all hover:bg-white/10 hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Ver repositorios en GitHub (se abre en nueva pestaña)"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.05-.02-2.07-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.09-.12-.3-.52-1.5.11-3.12 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.4.98.01 1.97.14 2.89.4 2.21-1.49 3.18-1.18 3.18-1.18.63 1.62.23 2.82.11 3.12.74.81 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56C20.22 21.39 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("#contacto");
            }}
            className="rounded-lg bg-blue-600 px-5 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            {t("hero.contactame")}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold text-black transition-all hover:bg-emerald-400 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            {t("hero.trabajaConmigo")}
          </a>
          <a
            href="#proyectos"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("#proyectos");
            }}
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            {t("hero.verProyectos")}
          </a>
        </div>
      </div>
      <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-400 px-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          <span>{t("hero.disponible")}</span>
        </div>
        <span aria-hidden="true">•</span>
        <span>{t("hero.ubicacion")}</span>
        <span aria-hidden="true">•</span>
        <span>{t("hero.remoto")}</span>
      </div>
    </section>
  );
}

