import SectionTitle from "../components/SectionTitle";
import ContactCard from "../components/ContactCard";
import { contacts } from "../data/contact";
import resume from "../assets/resume/Clint-Kevin-Diesta-Resume.pdf";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          title="Let's Connect"
          subtitle=""
        />

        <div className="max-w-3xl mt-8 mb-14">
          <p className="text-slate-400 leading-8 text-lg">
            I'm currently seeking entry-level opportunities in
            Information Technology where I can contribute,
            continue learning, and grow professionally.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-6">
            If you have an opportunity or would like to
            connect, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.title}
              {...contact}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;