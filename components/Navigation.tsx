"use client";

import { navLinks, GITHUB_URL, WHATSAPP_URL } from "@/lib/data";

interface NavigationProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  activeSection: string;
  onMenuToggle: () => void;
  onNavClick: (href: string, onMenuClose?: () => void) => void;
}

export default function Navigation({
  scrolled,
  mobileMenuOpen,
  activeSection,
  onMenuToggle,
  onNavClick,
}: NavigationProps) {
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
            className="rounded-full border border-white/20 bg-white/5 p-2 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Ir al perfil de GitHub"
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
                    : "text-zinc-400 hover:text-white"
                }`}
                aria-current={
                  activeSection === link.href.replace("#", "")
                    ? "page"
                    : undefined
                }
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-500 px-4 lg:px-5 py-2 text-xs lg:text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Trabajá conmigo
          </a>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="xl:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded p-2"
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
                    : "text-zinc-400 hover:text-white"
                }`}
                aria-current={
                  activeSection === link.href.replace("#", "") ? "page" : undefined
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Trabajá conmigo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

