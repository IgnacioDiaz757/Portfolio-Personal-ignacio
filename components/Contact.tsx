"use client";

import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiCopy, FiDownload, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";
import { EMAIL, WHATSAPP_NUMBER, cvUrl, socialLinks } from "@/lib/data";
import { trackSpotlight } from "@/lib/spotlight";
import { useLanguage } from "@/contexts/LanguageContext";

const SOCIAL_ICONS: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

const EMPTY_FORM = {
  nombre: "",
  apellido: "",
  telefono: "",
  email: "",
  descripcion: "",
};

const FIELD_CLASS =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-zinc-500 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500";

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mensaje = `*Nuevo contacto desde el portafolio*

*Nombre:* ${formData.nombre}
*Apellido:* ${formData.apellido}
*Teléfono:* ${formData.telefono}
*Email:* ${formData.email}

*Descripción:*
${formData.descripcion}`;

    // wa.me abre WhatsApp o WhatsApp Business según lo instalado
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }

    setTimeout(() => {
      setFormData(EMPTY_FORM);
      setIsSubmitting(false);
    }, 1000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // sin permiso de portapapeles: el enlace mailto sigue disponible
    }
  };

  const fields: {
    name: keyof typeof EMPTY_FORM;
    type: string;
    label: string;
    placeholder: string;
    autoComplete: string;
  }[] = [
    { name: "nombre", type: "text", label: t("contactForm.nombre"), placeholder: t("contactForm.nombrePlaceholder"), autoComplete: "given-name" },
    { name: "apellido", type: "text", label: t("contactForm.apellido"), placeholder: t("contactForm.apellidoPlaceholder"), autoComplete: "family-name" },
    { name: "telefono", type: "tel", label: t("contactForm.telefono"), placeholder: t("contactForm.telefonoPlaceholder"), autoComplete: "tel" },
    { name: "email", type: "email", label: t("contactForm.email"), placeholder: t("contactForm.emailPlaceholder"), autoComplete: "email" },
  ];

  return (
    <section
      id="contacto"
      className="py-16 pb-28 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:gap-12">
        <div className="space-y-6 sm:space-y-8 lg:col-span-2" data-animate>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs sm:text-sm text-emerald-400">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t("contact.disponible")}
          </div>

          <div className="space-y-4">
            <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {t("contact.titulo")}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300">{t("contact.descripcion")}</p>
            <p className="text-sm text-zinc-400">{t("contact.respuesta")}</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
              {t("contact.enviarWhatsApp")}
            </a>
            <div className="flex gap-2">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <FiMail aria-hidden="true" className="h-4 w-4" />
                {t("contact.escribirEmail")}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={t("contact.copiarEmail")}
                title={t("contact.copiarEmail")}
                className="inline-flex min-w-14 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-white transition-colors hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {copied ? (
                  <>
                    <FiCheck aria-hidden="true" className="h-4 w-4 text-emerald-400" />
                    <span role="status" className="text-xs">{t("contact.copiado")}</span>
                  </>
                ) : (
                  <FiCopy aria-hidden="true" className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <a
            href={cvUrl(language)}
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-1 py-1 text-sm font-medium text-zinc-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <FiDownload aria-hidden="true" className="h-4 w-4" />
            {t("contact.descargarCV")}
          </a>

          <div>
            <p className="mb-3 text-xs sm:text-sm text-zinc-400">{t("contact.tambienEn")}</p>
            <ul className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = SOCIAL_ICONS[social.icon];
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.name} (${t("contact.nuevaPestana")})`}
                      title={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      {Icon ? <Icon aria-hidden="true" className="h-5 w-5" /> : social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          onMouseMove={trackSpotlight}
          aria-labelledby="contact-form-heading"
          data-animate
          className="group relative space-y-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 lg:col-span-3"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(16,185,129,0.12), transparent 70%)",
            }}
          />
          <h3 id="contact-form-heading" className="relative text-xl font-semibold text-white">
            {t("contact.formTitulo")}
          </h3>

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.name}>
                <label htmlFor={f.name} className="mb-2 block text-sm font-medium text-zinc-300">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  id={f.name}
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  required
                  className={FIELD_CLASS}
                  placeholder={f.placeholder}
                  autoComplete={f.autoComplete}
                />
              </div>
            ))}
          </div>

          <div className="relative">
            <label htmlFor="descripcion" className="mb-2 block text-sm font-medium text-zinc-300">
              {t("contactForm.descripcion")}
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
              rows={4}
              autoComplete="off"
              className={`${FIELD_CLASS} resize-none`}
              placeholder={t("contactForm.descripcionPlaceholder")}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full rounded-lg bg-emerald-500 px-6 py-3.5 text-base sm:text-sm font-semibold text-black transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? t("contactForm.enviando") : t("contactForm.enviar")}
          </button>
          <p className="relative text-center text-xs text-zinc-400">{t("contact.formNota")}</p>
        </form>
      </div>
    </section>
  );
}
