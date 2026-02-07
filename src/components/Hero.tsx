import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "../shared/LanguageContext";
import { useTypewriter } from "../shared/useTypewriter";
import profile from "../data/profile.json";

const Hero = () => {
  const { t } = useTranslation();

  const greeting = t<string>("hero.greeting");
  const name = t<string>("hero.name");
  const role = t<string>("hero.role");
  const typingLines = t<string[]>("hero.typingLines");
  const ctaPrimary = t<string>("hero.ctaPrimary");
  //const ctaSecondary = t<string>("hero.ctaSecondary");

  const currentLine = useTypewriter(typingLines);

  return (
    <section className="glass-panel tech-border relative overflow-hidden rounded-2xl px-4 py-6 sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,255,65,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_55%)] opacity-70" />

      <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-300">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-terminal-green shadow-[0_0_12px_rgba(0,255,65,0.9)]" />
            </span>
            <span>Fullstack · React · TypeScript</span>
          </div> */}

          <div className="space-y-1">
            <p className="text-sm text-slate-300">{greeting}</p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              {name}
            </h1>
            <p className="text-lg font-medium text-terminal-green sm:text-xl">
              {role}
            </p>
          </div>

          <div className="code-caret mt-3 text-[0.9rem] text-slate-300">
            <span className="text-terminal-green">const</span>{" "}
            <span className="text-sky-300">focus</span>{" "}
            <span className="text-slate-400">=</span>{" "}
            <span className="text-sky-300">"</span>
            <span className="text-slate-100">{currentLine}</span>
            <span className="text-sky-300">"</span>;
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center gap-2 rounded-full bg-terminal-green px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-soft-glow transition hover:bg-terminal-green/90"
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>{ctaPrimary}</span>
            </motion.a>

            {/*<motion.a
              href="#"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-terminal-green hover:text-terminal-green"
            >
              <ExternalLink className="h-3.5 w-3.5" />
               <span>{ctaSecondary}</span> 
            </motion.a>*/}

            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-300 transition hover:border-terminal-green hover:text-terminal-green"
            >
              <Github className="h-3.5 w-3.5" />
              <span className="font-medium">GitHub</span>
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-300 transition hover:border-terminal-green hover:text-terminal-green"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span className="font-medium">LinkedIn</span>
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/70 px-3 py-1 text-[0.7rem] text-slate-300 transition hover:border-terminal-green hover:text-terminal-green"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="font-medium">Email</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="mt-4 flex w-full justify-center md:mt-0 md:w-auto md:flex-1 md:items-center md:justify-center"
        >
          <div className="glass-panel tech-border relative flex w-full max-w-xs flex-col overflow-hidden rounded-2xl px-4 py-4 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                &gt; status
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-semibold text-terminal-green">
                online
              </span>
            </div>

            <div className="mt-3 space-y-1.5 font-mono text-[0.75rem] leading-relaxed">
              <p>
                <span className="text-terminal-green">focus</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-violet-300">
                  Software Engineering · Data Engineering · Artificial Intelligence
                </span>
              </p>
              <p>
                <span className="text-terminal-green">location</span>
                <span className="text-slate-500">:</span>{" "}
                <span className="text-sky-300">France</span>
              </p>
            </div>

            {/* <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-600/60 to-transparent" /> */}

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


