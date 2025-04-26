import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume /> 
      <Skills />
      <Projects /> 
      <Contact /> 
      <Footer />
     
    </>
  );
}

export default App;
