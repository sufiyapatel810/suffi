import { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { SkillsMarquee } from './components/sections/SkillsMarquee';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { JourneySection } from './components/sections/JourneySection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <main
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA]"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection onOpenContact={openContact} />
      <SkillsMarquee />
      <AboutSection onOpenContact={openContact} />
      <ServicesSection />
      <ProjectsSection />
      <JourneySection />
      <Footer onOpenContact={openContact} />

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}
