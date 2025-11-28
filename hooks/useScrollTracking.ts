"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { throttle, scrollToSection } from "@/lib/utils";

export function useScrollTracking() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Throttled scroll handler
  const handleScroll = useCallback(
    throttle(() => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 500);

      // Update active section based on scroll position
      const sections = Object.keys(sectionsRef.current);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sectionsRef.current[sections[i]];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href: string, onMenuClose?: () => void) => {
    onMenuClose?.();
    const id = href.replace("#", "");
    scrollToSection(id, 80);
  }, []);

  return {
    scrolled,
    activeSection,
    showScrollTop,
    sectionsRef,
    handleNavClick,
  };
}

