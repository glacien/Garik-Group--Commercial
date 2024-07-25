import styles from './ServicesSection.module.css';

import Section from '../../General/Section';
import FeatureBoxUnderKey from './FeatureBoxUnderKey';
import FeatureBoxDestructionWorks from './FeatureBoxDestructionWorks';
import FeatureBoxInsideWorks from './FeatureBoxInsideWorks';
import FeatureBoxOutsideWorks from './FeatureBoxOutsideWorks';
import FeatureBoxCleaning from './FeatureBoxCleaning';
import FeatureBoxOtherWorks from './FeatureBoxOtherWorks';

function ServicesSection() {
  return (
    <Section id="section--services" className={styles.container}>
      <h2 className={styles.h2}>{'Naše služby'}</h2>
      <div className={styles.content}>
        <div className={styles.leftItem}>
          <FeatureBoxUnderKey />
          <FeatureBoxDestructionWorks />
          <FeatureBoxInsideWorks />
        </div>
        <div className={styles.rightItem}>
          <FeatureBoxOutsideWorks />
          <FeatureBoxCleaning />
          <FeatureBoxOtherWorks />
        </div>
      </div>
    </Section>
  );
}

export default ServicesSection;
