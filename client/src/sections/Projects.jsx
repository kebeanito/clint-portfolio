import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="MY WORK"
          title="Featured Projects"
          description="Here are some of the projects I've worked on during my academic journey, internship, and personal learning."
        />

        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;