// App.jsx
import React, { useState, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const SectionFallback = () => null;

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const handleNavigation = (section) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <div className="content">
        <Navbar
          currentSection={currentSection}
          handleNavigation={handleNavigation}
        />

        <div className="sections">
          <section id="home">
            <Home />
          </section>

          <Suspense fallback={<SectionFallback />}>
            <section id="about">
              <About />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="education">
              <Education />
            </section>

            <section id="contact">
              <Contact />
            </section>

            <Footer />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
