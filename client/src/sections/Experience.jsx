import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import { experiences } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          title="Experience"
          subtitle="Education, projects, and professional experience."
        />

        <div className="mt-20">
          {experiences.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;