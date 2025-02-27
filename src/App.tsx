import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MultipleServices from './components/MultipleServices';
import Values from './components/Values';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Habilitar scroll suave
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <MultipleServices />
      <Values />
      <AboutUs />
      <WhyChooseUs />
      <Projects />
      <Clients />
      <Footer />
    </main>
  );
}

export default App;
