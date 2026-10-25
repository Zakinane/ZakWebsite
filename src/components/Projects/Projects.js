
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Heartbeat",
    category: "Creative Development",
    description:
      "An immersive web experience where scrolling drives a heartbeat visualization, combining mathematical graphs, animation, and sound.",
    technologies: ["React", "Canvas", "JavaScript", "CSS"],
    image: "/images/heartbeat-preview.png",
    github: "https://github.com/YOUR_USERNAME/heartbeat",
    demo: "#",
  },
  {
    number: "02",
    title: "The Phantom Afficinado Website",
    category: "Full-Stack Development",
    description:
      "A community platform inspired by the atmosphere of Persona 5, featuring discussions, interactive polls, and a distinctive visual identity.",
    technologies: ["React", "Node.js", "MongoDB", "CSS"],
    image: "../../assets/img/phansite.png",
    github: "https://github.com/Zakinane/Phantom-Aficionado-Website-Front",
    demo: "https://phantom-aficionado-website-nu.vercel.app/",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    category: "Web Design & Development",
    description:
      "A personal website exploring typography, motion, and interactive visual details to showcase my work and development journey.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/images/portfolio-preview.png",
    github: "https://github.com/YOUR_USERNAME/portfolio",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="portfolio-section" class="Projects" id="projects">
      <div className="section-heading">
        <span className="section-number">03.</span>
        <h2>Things I've Built</h2>
      </div>

      <p className="section-intro">
        A selection of projects where I experiment, learn,
        and bring ideas to life.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                loading="lazy"
              />

              <span className="project-number">
                {project.number}
              </span>
            </div>

            <div className="project-content">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <ul className="tag-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} source code`}
                >
                  GitHub ↗
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  Live demo ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
