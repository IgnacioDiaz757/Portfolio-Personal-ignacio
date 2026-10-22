"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import es from "@/translations/es.json";
import en from "@/translations/en.json";
import pt from "@/translations/pt.json";

type Language = "es" | "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const DICTIONARIES: Record<Language, unknown> = { es, en, pt };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// soporta keys anidadas como "nav.inicio"
function lookup(dictionary: unknown, key: string): string {
  let value: unknown = dictionary;
  for (const k of key.split(".")) {
    value = (value as Record<string, unknown> | undefined)?.[k];
  }
  return typeof value === "string" && value ? value : key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("language");
      // se lee tras montar (no en el useState inicial) para no romper la hidratación del HTML estático
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved === "es" || saved === "en" || saved === "pt") setLanguageState(saved);
    } catch {
      // almacenamiento bloqueado: se queda el idioma por defecto
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("language", lang);
    } catch {
      // idem
    }
  }, []);

  const t = useCallback((key: string) => lookup(DICTIONARIES[language], key), [language]);

  // valor estable: los consumidores solo se re-renderizan al cambiar de idioma
  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
