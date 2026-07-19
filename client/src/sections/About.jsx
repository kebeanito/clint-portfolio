import { motion } from "framer-motion";

import {
  GraduationCap,
  BriefcaseBusiness,
  FolderGit2,
  Code2,
} from "lucide-react";

import StatCard from "../components/StatCard";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-semibold tracking-widest mb-3">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Building Modern
            <br />
            Web Experiences.
          </h2>

          <p className="text-slate-400 text-lg leading-8">
            A fresh graduate holding a degree of Bachelor of Science in Information Technology.

            <br /><br />

            I enjoy building modern, responsive web applications using
            React, JavaScript, Node.js, Spring Boot, and PostgreSQL.

            <br /><br />

            During my internship at People's Television Network (PTV),
            I gained practical experience in IT support,
            networking, troubleshooting, and system maintenance while
            continuing to improve my full-stack development skills.
          </p>
        </motion.div>

        {/* Right Side */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <StatCard
          icon={<GraduationCap size={30} />}
          value={2026}
          title="BSIT Graduate"
          description="Full Stack Developer"
          delay={0}
          />

        <StatCard
        icon={<BriefcaseBusiness size={30} />}
        value={486}
        title="PTV Internship"
        description="Hours Completed"
        delay={0.1}
        />

        <StatCard
        icon={<FolderGit2 size={30} />}
        value={3}
        suffix="+"
        title="Projects"
        description="Academic & Personal"
        delay={0.2}
        />

        <StatCard
        icon={<Code2 size={30} />}
        value="∞"
        title="Always Learning"
        description="Modern Technologies"
        delay={0.3}
        />

        </div>

      </div>
    </section>
  );
}

export default About;