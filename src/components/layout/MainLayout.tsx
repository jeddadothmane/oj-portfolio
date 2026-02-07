import type { ReactNode } from "react";
import { useTranslation } from "../../shared/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { t } = useTranslation();
  const footerText = t<string>("footer.madeWith");

  return (
    <div className="min-h-screen text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,65,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.14),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(15,23,42,0.9),_rgba(15,23,42,1))]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-terminal-green">
            <span className="inline-flex h-2 w-2 rounded-full bg-terminal-green shadow-[0_0_18px_rgba(0,255,65,0.9)]" />
            <span>{`<portfolio />`}</span>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </header>

        <main className="flex-1 space-y-20 pb-10">{children}</main>

        <footer className="border-t border-slate-800/80 pt-4 text-xs text-slate-500">
          <p>{footerText}</p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;


