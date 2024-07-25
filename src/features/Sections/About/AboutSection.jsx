import styles from './AboutSection.module.css';

import AboutTextDiv from './AboutTextDiv';
import Section from '../../General/Section';
import AboutStatisticsDiv from './AboutStatisticsDiv';

function AboutSection() {
  return (
    <Section id="section--about" className={styles.container}>
      <h2>{'O nás'}</h2>
      <div className={styles.content}>
        <AboutTextDiv />
        <AboutStatisticsDiv />
      </div>
    </Section>
  );
}

export default AboutSection;
