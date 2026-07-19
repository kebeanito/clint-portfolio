import TechCard from "../components/TechCard";
import SectionTitle from "../components/SectionTitle";

import {
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolSkills,
} from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="MY TECH STACK"
          title="Skills & Technologies"
        />

        {/* Frontend */}
        <h3 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
        <span className="w-2 h-8 rounded-full bg-cyan-400"></span>
          Frontend
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {frontendSkills.map((skill, index) => (
            <TechCard
              key={skill.name}
              {...skill}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Backend */}
        <h3 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
        <span className="w-2 h-8 rounded-full bg-cyan-400"></span>
        Backend
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {backendSkills.map((skill, index) => (
            <TechCard
              key={skill.name}
              {...skill}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Database */}
        <h3 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
        <span className="w-2 h-8 rounded-full bg-cyan-400"></span>
        Database
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {databaseSkills.map((skill, index) => (
            <TechCard
              key={skill.name}
              {...skill}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Tools */}
        <h3 className="flex items-center gap-3 text-3xl font-bold mt-16 mb-8">
        <span className="w-2 h-8 rounded-full bg-cyan-400"></span>
        Tools
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {toolSkills.map((skill, index) => (
            <TechCard
              key={skill.name}
              {...skill}
              delay={index * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;