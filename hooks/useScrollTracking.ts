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

  // Enhanced Intersection Observer for animations with different types
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animationType = element.getAttribute("data-animate") || "fade-in";
            
            // Remove existing animation classes
            element.classList.remove(
              "animate-fade-in",
              "animate-fade-in-up",
              "animate-fade-in-down",
              "animate-fade-in-left",
              "animate-fade-in-right",
              "animate-scale-in",
              "animate-slide-in-up"
            );
            
            // Add appropriate animation based on data-animate value
            switch (animationType) {
              case "fade-in-up":
                element.classList.add("animate-fade-in-up");
                break;
              case "fade-in-down":
                element.classList.add("animate-fade-in-down");
                break;
              case "fade-in-left":
                element.classList.add("animate-fade-in-left");
                break;
              case "fade-in-right":
                element.classList.add("animate-fade-in-right");
                break;
              case "scale-in":
                element.classList.add("animate-scale-in");
                break;
              case "slide-in-up":
                element.classList.add("animate-slide-in-up");
                break;
              default:
                element.classList.add("animate-fade-in");
            }
            
            // Stop observing once animated
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Parallax effect for background elements
  useEffect(() => {
    const handleParallax = throttle(() => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll(".parallax-slow");
      
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
        const yPos = -(scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    }, 16);

    window.addEventListener("scroll", handleParallax, { passive: true });
    return () => window.removeEventListener("scroll", handleParallax);
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


