import styles from './CtaSection.module.css';

import Section from '../../General/Section';
import Form from './Form';
import Contacts from './Contacts';

function CtaSection() {
  return (
    <Section id="section--cta" className={styles.container}>
      <h2 className={styles.h2}>
        {'Kontaktujte nás pro bezplatnou konzultaci'}
      </h2>
      <div className={styles.content}>
        <Form />
        <Contacts />
      </div>
    </Section>
  );
}

export default CtaSection;
