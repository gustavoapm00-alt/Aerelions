import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import ProcessTimeline from './components/ProcessTimeline';
import ProofSection from './components/ProofSection';
import PricingSection from './components/PricingSection';
import ICPSection from './components/ICPSection';
import FounderSection from './components/FounderSection';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 btn-primary"
        style={{ zIndex: 9999 }}
      >
        Skip to main content
      </a>

      <NavBar />

      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessTimeline />
        <ProofSection />
        <PricingSection />
        <ICPSection />
        <FounderSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
