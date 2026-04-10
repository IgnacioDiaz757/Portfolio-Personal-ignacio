"use client";

import { useState, useRef, useEffect } from "react";
import { GITHUB_URL, WHATSAPP_URL } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  activeSection: string;
  onMenuToggle: () => void;
  onNavClick: (href: string, onMenuClose?: () => void) => void;
}

const navLinks = [
  { key: "inicio", href: "#inicio" },
  { key: "sobreMi", href: "#sobre-mi" },
  { key: "habilidades", href: "#habilidades" },
  { key: "proyectos", href: "#proyectos" },
  { key: "experiencia", href: "#experiencia" },
  { key: "contacto", href: "#contacto" },
] as const;

export default function Navigation({
  scrolled,
  mobileMenuOpen,
  activeSection,
  onMenuToggle,
  onNavClick,
}: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRefDesktop = useRef<HTMLDivElement>(null);
  const languageMenuRefMobile = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "es" as const, flag: "https://flagcdn.com/w20/es.png", label: "Español" },
    { code: "en" as const, flag: "https://flagcdn.com/w20/us.png", label: "English" },
    { code: "pt" as const, flag: "https://flagcdn.com/w20/pt.png", label: "Português" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  // Cerrar menú de idiomas al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideDesktop = languageMenuRefDesktop.current && 
        !languageMenuRefDesktop.current.contains(target);
      const isOutsideMobile = languageMenuRefMobile.current && 
        !languageMenuRefMobile.current.contains(target);
      
      if (isOutsideDesktop && isOutsideMobile) {
        setLanguageMenuOpen(false);
      }
    };

    if (languageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageMenuOpen]);

  const handleLanguageSelect = (langCode: "es" | "en" | "pt") => {
    setLanguage(langCode);
    setLanguageMenuOpen(false);
  };

  // Keyboard navigation for language menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!languageMenuOpen) return;

      const menuItems = Array.from(
        document.querySelectorAll('[role="menuitem"]')
      ) as HTMLElement[];
      
      if (menuItems.length === 0) return;

      const currentIndex = menuItems.findIndex(
        (item) => item === document.activeElement
      );

      switch (e.key) {
        case "Escape":
          setLanguageMenuOpen(false);
          (document.querySelector('[aria-label*="idioma"]') as HTMLElement)?.focus();
          break;
        case "ArrowDown":
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % menuItems.length;
          menuItems[nextIndex]?.focus();
          break;
        case "ArrowUp":
          e.preventDefault();
          const prevIndex = currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1;
          menuItems[prevIndex]?.focus();
          break;
        case "Home":
          e.preventDefault();
          menuItems[0]?.focus();
          break;
        case "End":
          e.preventDefault();
          menuItems[menuItems.length - 1]?.focus();
          break;
      }
    };

    if (languageMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [languageMenuOpen]);
  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("#inicio");
          }}
          className="text-base sm:text-lg font-bold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
          aria-label="Ir al inicio"
        >
          <span className="hidden sm:inline">Juan Ignacio Díaz</span>
          <span className="sm:hidden">J.I. Díaz</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 lg:gap-6 xl:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-emerald-500 bg-white/5 p-2 text-white transition hover:bg-emerald-500/10 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Ir al perfil de GitHub"
            style={{ borderColor: '#10b981' }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.05-.02-2.07-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.19-3.09-.12-.3-.52-1.5.11-3.12 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.4.98.01 1.97.14 2.89.4 2.21-1.49 3.18-1.18 3.18-1.18.63 1.62.23 2.82.11 3.12.74.81 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56C20.22 21.39 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <div className="flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(link.href);
                }}
                className={`text-xs lg:text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
                aria-current={
                  activeSection === link.href.replace("#", "")
                    ? "page"
                    : undefined
                }
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>
          {/* Language Selector - Desktop */}
          <div className="relative" ref={languageMenuRefDesktop}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLanguageMenuOpen(!languageMenuOpen);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLanguageMenuOpen(!languageMenuOpen);
                }
              }}
              className="rounded-full border-2 border-emerald-500 bg-white/5 p-2 text-white transition hover:bg-emerald-500/10 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
              aria-label={`Idioma actual: ${currentLanguage.label}. Seleccionar idioma`}
              aria-expanded={languageMenuOpen}
              aria-haspopup="true"
              aria-controls="language-menu-desktop"
              type="button"
              style={{ borderColor: '#10b981' }}
            >
              <img 
                src={currentLanguage.flag} 
                alt=""
                className="w-5 h-5 object-cover rounded-sm pointer-events-none"
                aria-hidden="true"
              />
            </button>
            {languageMenuOpen && (
              <div 
                id="language-menu-desktop"
                role="menu"
                className="absolute right-0 mt-2 w-40 rounded-lg border border-white/10 bg-black/95 backdrop-blur-md shadow-lg z-[60]"
                aria-label="Menú de selección de idioma"
              >
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLanguageSelect(lang.code);
                      }}
                      role="menuitem"
                      tabIndex={language === lang.code ? 0 : -1}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors cursor-pointer focus:outline-none focus:bg-white/10 ${
                        language === lang.code
                          ? "bg-white/10 text-white font-semibold"
                          : "text-zinc-300 hover:bg-white/5 hover:text-white"
                      }`}
                      type="button"
                      aria-label={`Cambiar idioma a ${lang.label}`}
                      aria-checked={language === lang.code}
                    >
                      <img 
                        src={lang.flag} 
                        alt=""
                        className="w-5 h-5 object-cover rounded-sm pointer-events-none"
                        aria-hidden="true"
                      />
                      <span>{lang.label}</span>
                      {language === lang.code && (
                        <span className="ml-auto text-blue-400" aria-hidden="true">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-500 px-4 lg:px-5 py-2 text-xs lg:text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            {t("nav.trabajaConmigo")}
          </a>
        </div>

        {/* Mobile/Tablet Actions */}
        <div className="xl:hidden flex items-center gap-2">
          {/* Language Selector - Mobile/Tablet */}
          <div className="relative" ref={languageMenuRefMobile}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLanguageMenuOpen(!languageMenuOpen);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLanguageMenuOpen(!languageMenuOpen);
                }
              }}
              className="rounded-full border-2 border-emerald-500 bg-white/5 p-2 text-white transition hover:bg-emerald-500/10 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
              aria-label={`Idioma actual: ${currentLanguage.label}. Seleccionar idioma`}
              aria-expanded={languageMenuOpen}
              aria-haspopup="true"
              aria-controls="language-menu-mobile"
              type="button"
              style={{ borderColor: '#10b981' }}
            >
              <img 
                src={currentLanguage.flag} 
                alt=""
                className="w-5 h-5 object-cover rounded-sm pointer-events-none"
                aria-hidden="true"
              />
            </button>
            {languageMenuOpen && (
              <div 
                id="language-menu-mobile"
                role="menu"
                className="absolute right-0 mt-2 w-40 rounded-lg border border-white/10 bg-black/95 backdrop-blur-md shadow-lg z-[60]"
                aria-label="Menú de selección de idioma"
              >
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLanguageSelect(lang.code);
                      }}
                      role="menuitem"
                      tabIndex={language === lang.code ? 0 : -1}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors cursor-pointer focus:outline-none focus:bg-white/10 ${
                        language === lang.code
                          ? "bg-white/10 text-white font-semibold"
                          : "text-zinc-300 hover:bg-white/5 hover:text-white"
                      }`}
                      type="button"
                      aria-label={`Cambiar idioma a ${lang.label}`}
                      aria-checked={language === lang.code}
                    >
                      <img 
                        src={lang.flag} 
                        alt=""
                        className="w-5 h-5 object-cover rounded-sm pointer-events-none"
                        aria-hidden="true"
                      />
                      <span>{lang.label}</span>
                      {language === lang.code && (
                        <span className="ml-auto text-blue-400" aria-hidden="true">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded p-2"
            onClick={onMenuToggle}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden border-t border-white/10 bg-black/95 backdrop-blur-md"
        >
          <div className="flex flex-col px-4 sm:px-6 py-4 space-y-3 sm:space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(link.href);
                }}
                className={`text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-zinc-300 hover:text-white"
                }`}
                aria-current={
                  activeSection === link.href.replace("#", "") ? "page" : undefined
                }
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {t("nav.trabajaConmigo")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

