"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { scrollToSection } from "@/lib/utils";

const ANIMATION_CLASSES: Record<string, string> = {
  "fade-in": "animate-fade-in",
  "fade-in-up": "animate-fade-in-up",
  "fade-in-down": "animate-fade-in-down",
  "fade-in-left": "animate-fade-in-left",
  "fade-in-right": "animate-fade-in-right",
  "scale-in": "animate-scale-in",
  "slide-in-up": "animate-slide-in-up",
};

export function useScrollTracking() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // scroll: un cálculo por frame y solo se actualiza el estado si el valor cambia
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowScrollTop(y > 500);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // sección activa: una franja en el tercio superior de la pantalla, sin leer layout en cada scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.getAttribute("data-section") ?? "inicio");
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // animaciones de entrada: se disparan una sola vez por elemento
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const type = element.getAttribute("data-animate") || "fade-in";
          element.classList.remove(...Object.values(ANIMATION_CLASSES));
          element.classList.add(ANIMATION_CLASSES[type] ?? ANIMATION_CLASSES["fade-in"]);
          observer.unobserve(element);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href: string, onMenuClose?: () => void) => {
    onMenuClose?.();
    scrollToSection(href.replace("#", ""), 80);
  }, []);

  return {
    scrolled,
    activeSection,
    showScrollTop,
    sectionsRef,
    handleNavClick,
  };
}
