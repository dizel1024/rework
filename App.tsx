import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import PeaceOfMind from './components/PeaceOfMind';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import WhatsAppWidget from './components/WhatsAppWidget';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Packages from './pages/Packages';
import ProjectsPage from './pages/ProjectsPage';

const Home = ({ isLoading }: { isLoading: boolean }) => (
  <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
    <header>
      <Navbar />
    </header>

    <main>
      <section id="home" aria-label="Hero Section">
        <Hero />
      </section>

      <div className="h-[10px] bg-white w-full" aria-hidden="true" />

      <section id="logos" aria-label="Client Logos">
        <LogoTicker />
      </section>

      <section id="projects" aria-label="Selected Projects">
        <Projects />
      </section>

      <section id="about" aria-label="About Us">
        <WhyUs />
      </section>

      <section id="services" aria-label="Our Services">
        <Services />
      </section>

      <section id="trust" aria-label="Peace of Mind">
        <PeaceOfMind />
      </section>

      <section id="testimonials" aria-label="Customer Testimonials">
        <Testimonials />
      </section>

      <section id="team" aria-label="Our Team">
        <Team />
      </section>

      <section id="faq" aria-label="Frequently Asked Questions">
        <FAQ />
      </section>
    </main>

    <footer id="contact">
      <Footer />
    </footer>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const reveal = () => setIsLoading(false);
    if (document.readyState === 'complete') {
      reveal();
    } else {
      window.addEventListener('load', reveal, { once: true });
      return () => window.removeEventListener('load', reveal);
    }
  }, []);

  return (
    <>
      <Preloader />
      <div className="min-h-screen relative bg-neutral-50 selection:bg-black selection:text-white overflow-x-hidden w-full max-w-[100vw]">
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <WhatsAppWidget />
        <SpeedInsights />
      </div>
    </>
  );
}

export default App;