"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section
      id="sobre-mi"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6">
        <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white" data-animate="fade-in-up">
          {t("about.titulo")}
        </h2>
        <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-zinc-300" data-animate="fade-in-up" style={{ animationDelay: "200ms" }}>
          <p>
            {t("about.parrafo1")} <strong className="text-white">{t("about.parrafo1Bold")}</strong> {t("about.parrafo1Cont")}
          </p>
          <p>
            {t("about.parrafo2")}
          </p>
          <p>
            {t("about.parrafo3")}{" "}
            <strong className="text-white">{t("about.parrafo3Bold")}</strong> {t("about.parrafo3Cont")}
          </p>
        </div>
      </div>
    </section>
  );
}

