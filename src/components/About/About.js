
import "./About.css";

const technologies = [
  "JavaScript (ES6+)",
  "React",
  "HTML & CSS",
  "C",
  "C++",
  "Node.js",
  "Git & GitHub",
  "SQL",
];

function About() {
  return (
    <section className="portfolio-section" class="About">
      <div className="section-heading">
        <span className="section-number">01.</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Zaki, a Software Engineering student
            passionate about building digital experiences that
            combine thoughtful design and clean code.
          </p>

          <p>
            I enjoy exploring the intersection of front-end
            development, interactive experiences, and creative
            programming. I like turning ideas into functional,
            polished projects.
          </p>

          <p>
            My goal is to create interfaces that are not only
            visually engaging, but also intuitive, accessible,
            and enjoyable to use.
          </p>
        </div>

        <div className="about-skills">
          <h3>Technologies I work with</h3>

          <ul className="skills-grid">
            {technologies.map((technology) => (
              <li key={technology}>
                <span className="skill-arrow">▹</span>
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
