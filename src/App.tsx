import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import MainLayout from "./components/layout/MainLayout";
import { useTranslation } from "./shared/LanguageContext";

const App = () => {
  const { t } = useTranslation();

  const sectionEducationExperience = t<string>("sections.educationExperience");
  const sectionExperience = t<string>("sections.experience");
  const sectionProjects = t<string>("sections.projects");
  const sectionSkills = t<string>("sections.skills");

  return (
    <MainLayout>
      <div className="space-y-16">
        <Hero />

        <section id="timeline" className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {sectionEducationExperience}
          </h2>
          <Timeline mode="education" />
        </section>
        <section id="experience" className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {sectionExperience}
          </h2>
          <Timeline mode="experience" />
        </section>

        <section id="projects" className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {sectionProjects}
          </h2>
          <ProjectsSection />
        </section>

        <section id="skills" className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {sectionSkills}
          </h2>
          <SkillsSection />
        </section>
      </div>
    </MainLayout>
  );
};

export default App;


