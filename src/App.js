import "./App.css";
import Introduction from "./components/Introduction";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <a href="#intro">GG</a>
        </div>
        <nav className="headerLinks">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#profile">Profile</a>
          <a href="#contact" id="contactLink">
            Hire me!
          </a>
        </nav>
      </header>
      <Introduction />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
