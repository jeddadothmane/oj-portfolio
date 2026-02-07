import { motion } from "framer-motion";
import projectsData from "../data/projects.json";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-between gap-2"
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
          &gt; projects
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="grid gap-4 md:grid-cols-2"
      >
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            year={project.year}
            highlights={project.highlights}
            tools={project.tools}
            technologies={project.technologies}
            links={project.links}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;


