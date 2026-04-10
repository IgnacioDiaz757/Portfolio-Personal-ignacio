"use client";

import { GITHUB_URL, WHATSAPP_URL, socialLinks } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <section
      id="contacto"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-black/50 p-6 sm:p-8 md:p-12 text-center relative z-10 px-4" data-animate="scale-in">
        <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {t("contact.titulo")}
        </h2>
        <p className="text-base sm:text-lg text-zinc-300">
          {t("contact.descripcion")}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-lg bg-emerald-500 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-black transition-all hover:bg-emerald-400 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={t("contact.enviarWhatsApp") || "Enviar mensaje por WhatsApp"}
          >
            {t("contact.enviarWhatsApp") || "Enviar por WhatsApp"}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-lg border border-white/10 bg-white/5 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={t("contact.verGitHub")}
          >
            {t("contact.verGitHub")}
          </a>
        </div>
        <div className="pt-6 sm:pt-8">
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-zinc-400">{t("contact.tambienEn")}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded text-sm sm:text-base"
                aria-label={`Visitar ${social.name} (se abre en nueva pestaña)`}
              >
                <span className="sr-only">{social.name}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

