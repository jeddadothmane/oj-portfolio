import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from "react";
import uiMessages from "../data/i18n.json";

type Language = "fr" | "en";

type UiMessages = (typeof uiMessages)["fr"];

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: <T = string | string[]>(path: string) => T;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const getFromPath = (object: unknown, path: string): unknown => {
  if (!object) return "";
  return path.split(".").reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === "object" && segment in acc) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (acc as any)[segment];
    }
    return "";
  }, object as UiMessages);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>("fr");

  const setLang = (value: Language) => {
    setLangState(value);
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: <T,>(path: string) =>
        getFromPath(uiMessages[lang], path) as unknown as T
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
};

export const useTranslation = () => {
  const { t, lang } = useLanguage();
  return { t, lang };
};


