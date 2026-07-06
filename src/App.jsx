import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-200">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
