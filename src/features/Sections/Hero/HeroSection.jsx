import styles from './HeroSection.module.css';

import Header from './Header';
import Section from '../../General/Section';

function HeroSection() {
  const onClickHandle = function (e) {
    e.preventDefault();

    const section = document.getElementById(
      e.target.closest('a').getAttribute('href').slice(1)
    );

    section.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'center',
    });
  };

  return (
    <Section className={styles.container}>
      <Header onClickHandle={onClickHandle} />
      <div className={styles.content}>
        <div className={styles.textBox}>
          <h1>{'Váš partner při vytváření dokonalého komerčního prostoru'}</h1>

          <div>
            <a
              onClick={onClickHandle}
              className="btn btn--cta"
              href="#section--cta"
            >
              {'Kontakt'}
            </a>
            <a
              onClick={onClickHandle}
              className={`btn ${styles.btn}`}
              href="#section--about"
            >
              {'O nás'}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
