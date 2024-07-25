import styles from './PortfolioSection.module.css';

import Section from '../../General/Section';
import AdvantagesContainer from './AdvantagesContainer';
import GalleryContainer from './GalleryContainer';

function PortfolioSection() {
  return (
    <Section id="section--portfolio" className={styles.container}>
      <div className={styles.content}>
        <AdvantagesContainer />
        <GalleryContainer />
      </div>
    </Section>
  );
}

export default PortfolioSection;
