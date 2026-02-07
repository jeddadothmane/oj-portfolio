import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { useTranslation, useLanguage } from "../shared/LanguageContext";
import { TOOL_ICONS, TOOL_ICON_URLS } from "../shared/toolIcons";
import educationData from "../data/education.json";
import experienceData from "../data/experience.json";

type Localized = {
  fr: string;
  en: string;
};

type ToolEntry = {
  id: string;
  label: Localized;
};

type TimelineItemData = {
  id: string;
  type: "education" | "experience";
  institution?: Localized;
  company?: Localized;
  logo?: string;
  title: Localized;
  location?: Localized;
  period: string;
  description: Localized;
  highlights?: Localized & { fr: string[]; en: string[] };
  tools?: ToolEntry[];
};


const combinedTimeline: TimelineItemData[] = [
  ...(educationData as TimelineItemData[]),
  ...(experienceData as TimelineItemData[])
].sort((a, b) => a.id.localeCompare(b.id));

type TimelineMode = "education" | "experience" | "all";

interface TimelineProps {
  mode?: TimelineMode;
}

const Timeline = ({ mode = "all" }: TimelineProps) => {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const labelEducation = t<string>("labels.timelineEducation");
  const labelExperience = t<string>("labels.timelineExperience");

  const items =
    mode === "education"
      ? combinedTimeline.filter((item) => item.type === "education")
      : mode === "experience"
      ? combinedTimeline.filter((item) => item.type === "experience")
      : combinedTimeline;

  return (
    <div className="glass-panel tech-border relative overflow-hidden rounded-2xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="absolute inset-y-0 left-8 hidden w-px bg-gradient-to-b from-transparent via-slate-600/80 to-transparent md:block" />

      <div className="space-y-6">
        {items.map((item, index) => {
          const isEducation = item.type === "education";
          const Icon = isEducation ? GraduationCap : Briefcase;
          const label = isEducation ? labelEducation : labelExperience;

          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative flex gap-4 md:gap-6"
            >
              <div className="mt-1 flex flex-col items-center">
                <div className="hidden h-full w-px bg-gradient-to-b from-slate-700/70 to-transparent md:block" />
                <div className="md:absolute md:left-6 md:top-3">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-slate-700 bg-slate-900">
                    <span className="h-2 w-2 rounded-full bg-terminal-green shadow-[0_0_10px_rgba(0,255,65,0.9)]" />
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-1 rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm shadow-soft-glow sm:px-4 sm:py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/90 px-2 py-0.5 text-[0.7rem] uppercase tracking-[0.16em] text-slate-300">
                    <Icon className="h-3 w-3 text-terminal-green" />
                    <span>{label}</span>
                  </span>
                  <span className="text-[0.7rem] text-slate-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-[0.95rem] font-semibold text-slate-50">
                  {item.title[lang]}
                </h3>

                <div className="flex items-center gap-2">
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt=""
                      className="h-8 w-8 shrink-0 rounded-lg border border-slate-700/70 bg-slate-800/50 object-contain p-0.5"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}
                  <p className="text-[0.8rem] text-slate-300">
                    {item.institution?.[lang] ?? item.company?.[lang]}
                  </p>
                </div>

                {item.location && (
                  <p className="text-[0.75rem] text-slate-400">
                    {item.location[lang]}
                  </p>
                )}

                <p className="mt-1 text-[0.8rem] leading-relaxed text-slate-300">
                  {item.description[lang]}
                </p>

                {item.highlights && item.highlights[lang]?.length > 0 && (
                  <ul className="mt-2 space-y-1 text-[0.8rem] leading-relaxed text-slate-300">
                    {item.highlights[lang].map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-terminal-green" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tools && item.tools.length > 0 && (
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-[0.7rem] text-slate-400">
                      {t<string>("labels.tools")}:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.tools.map((tool) => {
                        const IconComponent = TOOL_ICONS[tool.id];
                        const iconUrl = TOOL_ICON_URLS[tool.id];
                        return (
                          <span
                            key={tool.id}
                            className="inline-flex items-center gap-1 rounded-md border border-slate-700/70 bg-slate-800/70 px-1.5 py-0.5"
                            title={tool.label[lang]}
                          >
                            {IconComponent ? (
                              <IconComponent className="h-3.5 w-3.5 text-slate-300" />
                            ) : iconUrl ? (
                              <img
                                src={iconUrl}
                                alt=""
                                className="h-3.5 w-3.5 object-contain"
                              />
                            ) : null}
                            <span className="text-[0.7rem] text-slate-300">
                              {tool.label[lang]}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;


