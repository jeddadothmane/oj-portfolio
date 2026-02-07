import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SkillBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
}

const SkillBadge = ({ children, icon }: SkillBadgeProps) => {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.03 }}
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[0.75rem] text-slate-200 shadow-sm"
    >
      {icon ? (
        <span className="flex h-4 w-4 items-center justify-center text-slate-100">
          {icon}
        </span>
      ) : (
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-terminal-green shadow-[0_0_9px_rgba(0,255,65,0.9)]" />
      )}
      {children}
    </motion.span>
  );
};

export default SkillBadge;

