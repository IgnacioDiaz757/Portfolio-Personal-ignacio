"use client";

import { useState } from "react";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled, activeSection, showScrollTop, sectionsRef, handleNavClick } =
    useScrollTracking();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-zinc-50">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="skip-to-main"
        aria-label={t("skipToContent") || "Saltar al contenido principal"}
      >
        {t("skipToContent") || "Saltar al contenido principal"}
      </a>
      
      <BackgroundEffects />

      <Navigation
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        activeSection={activeSection}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onNavClick={(href) => handleNavClick(href, () => setMobileMenuOpen(false))}
      />

      <main id="main-content" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24" role="main" aria-label="Contenido principal">
        <section
          id="inicio"
          ref={(el) => {
            sectionsRef.current.inicio = el;
          }}
        >
          <Hero onNavClick={handleNavClick} />
        </section>

        <section
          id="sobre-mi"
          ref={(el) => {
            sectionsRef.current["sobre-mi"] = el;
          }}
        >
          <About />
        </section>

        <section
          id="habilidades"
          ref={(el) => {
            sectionsRef.current.habilidades = el;
          }}
        >
          <Skills />
        </section>

        <section
          id="proyectos"
          ref={(el) => {
            sectionsRef.current.proyectos = el;
          }}
        >
          <Projects />
        </section>

        <section
          id="experiencia"
          ref={(el) => {
            sectionsRef.current.experiencia = el;
          }}
        >
          <Experience />
        </section>

        <section
          id="contacto"
          ref={(el) => {
            sectionsRef.current.contacto = el;
          }}
        >
          <Contact />
        </section>

        <section
          id="formulario-contacto"
          ref={(el) => {
            sectionsRef.current["formulario-contacto"] = el;
          }}
        >
          <ContactForm />
        </section>

        <Footer />
      </main>

      <ScrollToTop show={showScrollTop} />
    </div>
  );
}
