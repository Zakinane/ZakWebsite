
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="header-logo">
        <a href="/" aria-label="Home">Logo</a>
      </div>

      <div className="header-elements">
        <ol>
          <li id="li1">
            <a href="/#About">About</a>
          </li>
          <li id="li2">
            <a href="/#studies">Studies</a>
          </li>
          <li id="li3">
            <a href="/#projects">Projects</a>
          </li>
          <li id="li4">
            <a href="/#contact">Contact</a>
          </li>
        </ol>

        <a className="resume" href="../../assets/resume" download="Zaki DJABA Resume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Header;
 