import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="header-logo">Logo</div>
      <div className="header-elements">
        <ol>
          <li id="li1">
            <a href="/#About"></a>
          </li>
          <li id="li2">
            <a href="/#studies"></a>
          </li>
          <li id="li3">
            <a href="/#projects"></a>
          </li>
          <li id="li4">
            <a href="/#contact"></a>
          </li>
        </ol>
        <div>Resume</div>
      </div>
    </header>
  );
}
export default Header;
