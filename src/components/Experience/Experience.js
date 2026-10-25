
import "./Experience.css";

const experiences = [
  {
    period: "Current",
    title: "Software Engineering Student",
    company: "Xiamen University Malaysia",
    description:
      "Developing a strong foundation in programming, software design, algorithms, and computer systems.",
    skills: ["Programming", "Problem Solving", "Software Design"],
  },
  {
    period: "Personal Project",
    title: "Frontend Developer",
    company: "Phorum",
    description:
      "Building a community-oriented web application with interactive components, topic discussions, and a custom interface.",
    skills: ["React", "CSS", "REST APIs", "MongoDB"],
  },
  {
    period: "Personal Project",
    title: "Creative Developer",
    company: "Heartbeat",
    description:
      "Experimenting with mathematical graphics, scroll-driven animations, and immersive visual experiences.",
    skills: ["JavaScript", "Canvas", "Animation", "CSS"],
  },
];

function Experience() {
  return (
    <section className="portfolio-section" class="Experience">
      <div className="section-heading">
        <span className="section-number">02.</span>
        <h2>Experience & Journey</h2>
      </div>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <article className="experience-card" key={item.title}>
            <div className="experience-period">
              {item.period}
            </div>

            <div className="experience-details">
              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

              <ul className="tag-list">
                {item.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <span className="experience-index">
              0{index + 1}
            </span>
          </article>
        ))}
      </div>

      <a
        className="text-link"
        download="Zaki DJABA Resume.pdf"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        View my resume <span>↗</span>
      </a>
    </section>
  );
}

export default Experience;
