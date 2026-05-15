import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CaseStudy } from './components/CaseStudy';
import { Dashboards } from './components/Dashboards';
import { Certifications } from './components/Certifications';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CaseStudy />
      <Dashboards />
      <Certifications />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
