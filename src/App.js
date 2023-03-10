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
          <a href="#">GG</a>
        </div>
        <nav className="headerLinks">
          <a href="#skills" className="hover">
            Skills
          </a>
          <a href="#projects" className="hover">
            Projects
          </a>
          <a href="#profile" className="hover">
            Profile
          </a>
          <a href="#contact" id="contactLink" className="hover2">
            Contact Me!
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
