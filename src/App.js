import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skill from './components/Skill.jsx'
import Project from './components/Project.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Project />
      <About />
      <Contact />

    </div>
  );
}

export default App;
