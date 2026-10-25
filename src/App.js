import "./App.css";

import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import About from "./components/About/About.js";
import Experience from "./components/Experience/Experience.js";
import Projects from "./components/Projects/Projects.js";
import Contacts from "./components/Contacts/Contacts.js";
import Contact from "./components/Contact/Contact.js";

function App() {
  return (
    <>
      <Header />
      <Main />
      <div id="top" />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Contact />
    </>
  );
}

export default App;
