import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTranslation, useLanguage } from "../shared/LanguageContext";
import { TOOL_ICONS, TOOL_ICON_URLS } from "../shared/toolIcons";

type Localized = {
  fr: string;
  en: string;
};

type ToolEntry = {
  id: string;
  label: Localized;
};

export interface ProjectCardProps {
  title: Localized;
  description: Localized;
  year?: string;
  highlights?: Localized & { fr: string[]; en: string[] };
  tools?: ToolEntry[];
  technologies?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

const ProjectCard = ({
  title,
  description,
  year,
  highlights,
  tools,
  technologies,
  links
}: ProjectCardProps) => {
  const { lang } = useLanguage();
  const { t } = useTranslation();

  const githubLabel = t<string>("projects.github");
  const demoLabel = t<string>("projects.demo");

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="glass-panel tech-border flex h-full flex-col justify-between rounded-2xl p-4 text-sm"
    >
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[0.95rem] font-semibold text-slate-50">
            {title[lang]}
          </h3>
          {year && (
            <span className="text-[0.7rem] text-slate-400">{year}</span>
          )}
        </div>
        <p className="text-[0.8rem] leading-relaxed text-slate-300">
          {description[lang]}
        </p>

        {highlights && highlights[lang]?.length > 0 && (
          <ul className="mt-2 space-y-1 text-[0.75rem] leading-relaxed text-slate-300">
            {highlights[lang].map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-terminal-green" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 space-y-3">
        {tools && tools.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {tools.map((tool) => {
              const IconComponent = TOOL_ICONS[tool.id];
              const iconUrl = TOOL_ICON_URLS[tool.id];
              return (
                <span
                  key={tool.id}
                  className="inline-flex items-center gap-1 rounded-md border border-slate-700/70 bg-slate-800/70 px-1.5 py-0.5"
                  title={tool.label[lang]}
                >
                  {IconComponent ? (
                    <IconComponent className="h-3 w-3 text-slate-300" />
                  ) : iconUrl ? (
                    <img
                      src={iconUrl}
                      alt=""
                      className="h-3 w-3 object-contain"
                    />
                  ) : null}
                  <span className="text-[0.65rem] text-slate-300">
                    {tool.label[lang]}
                  </span>
                </span>
              );
            })}
          </div>
        )}

        {!tools && technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[0.7rem] text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(links?.github || links?.demo) && (
          <div className="flex flex-wrap gap-2 text-[0.75rem]">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-slate-200 transition hover:border-terminal-green hover:text-terminal-green"
              >
                <Github className="h-3.5 w-3.5" />
                <span>{githubLabel}</span>
              </a>
            )}
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>{demoLabel}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;


