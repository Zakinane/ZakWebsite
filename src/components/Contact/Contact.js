
import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="get-in-touch" id="contact">
        <p className="contact-overline">
          <span>04.</span> What's Next?
        </p>

        <h2>Get In Touch</h2>

        <p className="contact-description">
          I'm always open to new opportunities, interesting projects,
          and conversations. Whether you have a question or just want
          to say hello, my inbox is always open.
        </p>

        <a
          className="contact-button"
          href="mailto:djabazaki@gmail.com"
        >
          Say Hello
        </a>
      </section>

      <footer className="portfolio-footer">
        <a
          href="https://github.com/Zakinane"
          target="_blank"
          rel="noreferrer"
          aria-label="Built by Zak, inspired by Brittany Chiang — GitHub"
        >
          <span>Built by Zak</span>
          <span>Inspired by Brittany Chiang</span>
        </a>
      </footer>
    </>
  );
}

export default Contact;
