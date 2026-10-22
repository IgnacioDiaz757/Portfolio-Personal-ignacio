"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import BackgroundEffects from "@/components/BackgroundEffects";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { useLanguage } from "@/contexts/LanguageContext";

// secciones bajo el pliegue: siguen en el HTML del servidor, pero su JS se descarga aparte
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled, activeSection, showScrollTop, sectionsRef, handleNavClick } =
    useScrollTracking();
  const { t } = useLanguage();

  // los id reales (#sobre-mi, #proyectos...) viven en cada sección; el wrapper solo sirve para rastrear la activa
  const track = (key: string) => ({
    "data-section": key,
    ref: (el: HTMLDivElement | null) => {
      sectionsRef.current[key] = el;
    },
  });

  return (
    <div className="min-h-screen bg-background text-zinc-50">
      <a href="#main-content" className="skip-to-main">
        {t("skipToContent")}
      </a>

      <BackgroundEffects />

      <Navigation
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        activeSection={activeSection}
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onNavClick={(href) => handleNavClick(href, () => setMobileMenuOpen(false))}
      />

      <main
        id="main-content"
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-24"
      >
        <div id="inicio" {...track("inicio")}>
          <Hero onNavClick={handleNavClick} />
        </div>
        <div {...track("sobre-mi")}>
          <About />
        </div>
        <div {...track("habilidades")}>
          <Skills />
        </div>
        <div {...track("proyectos")}>
          <Projects />
        </div>
        <div {...track("experiencia")}>
          <Experience />
        </div>
        <div {...track("contacto")}>
          <Contact />
        </div>

        <Footer />
      </main>

      <ScrollToTop show={showScrollTop} />
      <FloatingWhatsApp />
    </div>
  );
}
