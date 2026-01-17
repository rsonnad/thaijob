import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, th } from "../translations";

type Language = "en" | "th";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const isThai = navigator.language.toLowerCase().includes("th");
    setLang(isThai ? "th" : "en");
  }, []);

  const t = lang === "en" ? en : th;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
