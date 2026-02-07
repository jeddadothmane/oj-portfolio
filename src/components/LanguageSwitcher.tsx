import { Languages } from "lucide-react";
import { useLanguage } from "../shared/LanguageContext";
import uiMessages from "../data/i18n.json";

export const LanguageSwitcher = () => {
  const { lang, toggleLang } = useLanguage();
  const labels = uiMessages[lang].language;

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200 shadow-soft-glow transition hover:border-terminal-green hover:text-terminal-green"
      aria-label={labels.switchLabel}
    >
      <Languages className="h-3.5 w-3.5" />
      <span className="tabular-nums">
        {labels.fr}/{labels.en}
      </span>
      <span className="ml-1 rounded-full bg-slate-900/80 px-1.5 py-0.5 text-[0.6rem] uppercase tracking-widest text-terminal-green">
        {lang}
      </span>
    </button>
  );
};

export default LanguageSwitcher;


