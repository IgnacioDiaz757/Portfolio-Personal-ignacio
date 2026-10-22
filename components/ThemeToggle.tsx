"use client";

import { useSyncExternalStore } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getServerTheme, getTheme, setTheme, subscribeTheme } from "@/lib/theme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`rounded-full border border-white/15 bg-white/5 p-2 text-white transition hover:bg-emerald-500/10 hover:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black cursor-pointer ${className}`}
      aria-label={isDark ? t("nav.temaClaro") : t("nav.temaOscuro")}
      title={isDark ? t("nav.temaClaro") : t("nav.temaOscuro")}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {isDark ? (
          // sol: al tocarlo pasa a claro
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        ) : (
          // luna: al tocarla pasa a oscuro
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        )}
      </svg>
    </button>
  );
}
