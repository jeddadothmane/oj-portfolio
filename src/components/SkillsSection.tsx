import { motion } from "framer-motion";
import {
  Lightbulb,
  MessageCircle,
  Users,
  RefreshCw,
  UserCheck,
  FileText,
} from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiJest,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useTranslation, useLanguage } from "../shared/LanguageContext";
import { TOOL_ICONS, TOOL_ICON_URLS } from "../shared/toolIcons";
import skillsData from "../data/skills.json";
import SkillBadge from "./SkillBadge";

type Localized = {
  fr: string;
  en: string;
};

type SkillEntry = {
  id: string;
  label: Localized;
};

const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ...TOOL_ICONS,
  react: SiReact,
  ts: SiTypescript,
  tailwind: SiTailwindcss,
  "framer-motion": SiFramer,
  node: SiNodedotjs,
  express: SiExpress,
  "db-sql": SiPostgresql,
  git: SiGit,
  docker: SiDocker,
  testing: SiJest,
};

const SOFT_SKILL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "problem-solving": Lightbulb,
  communication: MessageCircle,
  teamwork: Users,
  adaptability: RefreshCw,
  autonomy: UserCheck,
  documentation: FileText,
};

const getSkillIcon = (
  id: string,
  category: string
): React.ReactNode => {
  if (category === "softSkills") {
    const Icon = SOFT_SKILL_ICONS[id];
    return Icon ? <Icon className="h-3.5 w-3.5" /> : null;
  }
  const IconComponent = SKILL_ICONS[id];
  const iconUrl = TOOL_ICON_URLS[id];
  if (IconComponent) {
    return <IconComponent className="h-3.5 w-3.5" />;
  }
  if (iconUrl) {
    return (
      <img src={iconUrl} alt="" className="h-3.5 w-3.5 object-contain" />
    );
  }
  return null;
};

const SkillsSection = () => {
  const { lang } = useLanguage();
  const { t } = useTranslation();

  const categories = [
    { key: "frontend", labelKey: "labels.skillsFrontend" },
    { key: "backend", labelKey: "labels.skillsBackend" },
    { key: "dataML", labelKey: "labels.skillsDataML" },
    { key: "databases", labelKey: "labels.skillsDatabases" },
    { key: "tools", labelKey: "labels.skillsTools" },
    { key: "softSkills", labelKey: "labels.skillsSoft" },
  ] as const;

  return (
    <div className="glass-panel tech-border rounded-2xl px-4 py-6 sm:px-6 sm:py-7">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="mb-4 flex items-center justify-between gap-2"
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
          &gt; skills
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ key, labelKey }) => {
          const skills = (skillsData as Record<string, SkillEntry[]>)[key] ?? [];
          if (skills.length === 0) return null;
          return (
            <div key={key} className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                {t<string>(labelKey)}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <SkillBadge
                    key={skill.id}
                    icon={getSkillIcon(skill.id, key)}
                  >
                    {skill.label[lang]}
                  </SkillBadge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
