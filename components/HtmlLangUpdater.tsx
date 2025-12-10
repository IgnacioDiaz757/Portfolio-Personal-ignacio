"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HtmlLangUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    if (language === "en") {
      document.documentElement.lang = "en";
    } else if (language === "pt") {
      document.documentElement.lang = "pt";
    } else {
      document.documentElement.lang = "es";
    }
  }, [language]);

  return null;
}

