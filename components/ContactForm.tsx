"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    descripcion: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formatear mensaje para WhatsApp (compatible con WhatsApp normal y Business)
    const mensaje = `*Nuevo contacto desde el portafolio*

*Nombre:* ${formData.nombre}
*Apellido:* ${formData.apellido}
*Teléfono:* ${formData.telefono}
*Email:* ${formData.email}

*Descripción:*
${formData.descripcion}`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Número de WhatsApp (sin el código de país inicial si ya está en la URL base)
    // Usar wa.me que funciona tanto para WhatsApp normal como Business
    const numeroWhatsApp = "5493512606190"; // Número sin el + y sin espacios
    
    // Crear URL de WhatsApp compatible con ambos tipos
    // wa.me funciona para WhatsApp normal y Business
    const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Detectar si es móvil o desktop para mejor experiencia
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // En móvil, abrir directamente en la app de WhatsApp
      window.location.href = whatsappUrl;
    } else {
      // En desktop, abrir en nueva pestaña (abrirá WhatsApp Web o la app según configuración)
      window.open(whatsappUrl, "_blank");
    }

    // Resetear formulario después de un breve delay
    setTimeout(() => {
      setFormData({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        descripcion: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="formulario-contacto"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      aria-labelledby="contact-form-heading"
    >
      <div className="mx-auto max-w-2xl space-y-6 sm:space-y-8 px-4 sm:px-6">
        <div className="text-center" data-animate>
          <h2
            id="contact-form-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            {t("contactForm.titulo") || "Contáctame"}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-300 px-4">
            {t("contactForm.subtitulo") ||
              "Completa el formulario y te contactaré por WhatsApp"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm"
          data-animate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                {t("contactForm.nombre") || "Nombre"}
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder={t("contactForm.nombrePlaceholder") || "Tu nombre"}
              />
            </div>

            <div>
              <label
                htmlFor="apellido"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                {t("contactForm.apellido") || "Apellido"}
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder={
                  t("contactForm.apellidoPlaceholder") || "Tu apellido"
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="telefono"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                {t("contactForm.telefono") || "Teléfono"}
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder={
                  t("contactForm.telefonoPlaceholder") || "+54 9 11 1234-5678"
                }
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                {t("contactForm.email") || "Email"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder={
                  t("contactForm.emailPlaceholder") || "tu@email.com"
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="descripcion"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              {t("contactForm.descripcion") || "Breve descripción"}
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 sm:py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
              placeholder={
                t("contactForm.descripcionPlaceholder") ||
                "Cuéntame sobre tu proyecto..."
              }
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-emerald-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition-all hover:bg-emerald-400 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={t("contactForm.enviar") || "Enviar formulario"}
          >
            {isSubmitting
              ? t("contactForm.enviando") || "Enviando..."
              : t("contactForm.enviar") || "Enviar por WhatsApp"}
          </button>
        </form>
      </div>
    </section>
  );
}

