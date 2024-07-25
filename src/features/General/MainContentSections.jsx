import styles from './MainContentSections.module.css';

import AboutSection from '../Sections/About/AboutSection';
import HeroSection from '../Sections/Hero/HeroSection';
import ServicesSection from '../Sections/Services/ServicesSection';
import PortfolioSection from '../Sections/Portfolio/PortfolioSection';
import CtaSection from '../Sections/CTA/CtaSection';
import FooterSection from '../Sections/Footer/FooterSection';

function MainContentSections() {
  return (
    <main className={styles.container}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

export default MainContentSections;
