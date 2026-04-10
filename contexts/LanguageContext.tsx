"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    // Cargar idioma desde localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en" || savedLanguage === "pt")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    try {
      // Usar import dinámico para cargar las traducciones
      let translations;
      if (language === "en") {
        translations = require("@/translations/en.json");
      } else if (language === "pt") {
        translations = require("@/translations/pt.json");
      } else {
        translations = require("@/translations/es.json");
      }
      
      // Soporte para keys anidadas como "nav.inicio"
      const keys = key.split(".");
      let value: any = translations;
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    } catch (error) {
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

