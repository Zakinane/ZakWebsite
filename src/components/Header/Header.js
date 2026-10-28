import "./Header.css";
import logo from "../../assets/img/Zak-Logo.png";

function Header() {
  return (
    <header className="Header">
      <div className="header-logo">
        <a href="/#top" aria-label="Home">
          <img src={logo} alt="Zak logo" />
        </a>
      </div>

      <nav className="header-elements" aria-label="Main navigation">
        <ol>
          <li id="li1">
            <a href="/#about">About</a>
          </li>

          <li id="li2">
            <a href="/#experience">Experience</a>
          </li>

          <li id="li3">
            <a href="/#projects">Projects</a>
          </li>

          <li id="li4">
            <a href="/#contact">Contact</a>
          </li>
        </ol>

        <a
          className="resume"
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>
      </nav>
    </header>
  );
}

export default Header;
