import styles from './AdvantagesContainer.module.css';
import CzechSVG from './CzechSVG';
import QualitySVG from './QualitySVG';
import TimeSVG from './TimeSVG';
import TransparencySVG from './TransparencySVG';

function AdvantagesContainer() {
  return (
    <div className={styles.container}>
      <h2>{'Naše výhody'}</h2>
      <div className={styles.content}>
        <figure className={`${styles.featureBox} ${styles.featureBoxQuality}`}>
          <div className={styles.svgContainer}>
            <QualitySVG />
          </div>
          <figcaption>
            <span className={styles.caption}>{'Kvalita práce'}</span>
          </figcaption>
          <p className={styles.text}>
            {
              'Garantujeme  vysokou  úroveň  provedení  všech  prací  díky  použití  moderních  technologií  a materiálů'
            }
          </p>
        </figure>
        <figure className={`${styles.featureBox} ${styles.featureBoxTime}`}>
          <div className={styles.svgContainer}>
            <TimeSVG />
          </div>
          <figcaption>
            <span className={styles.caption}>{'Dodržování termínů'}</span>
          </figcaption>
          <p className={styles.text}>
            {'Vážíme si vašeho času a vždy dodržujeme dohodnuté termíny'}
          </p>
        </figure>
        <figure className={`${styles.featureBox} ${styles.featureBoxCzech}`}>
          <div className={styles.svgContainer} style={{ width: '6.7rem' }}>
            <CzechSVG />
          </div>
          <figcaption>
            <span className={styles.caption} style={{ marginTop: '0.2rem' }}>
              {'Český výrobek'}
            </span>
          </figcaption>
          <p className={styles.text}>
            {
              'Jsme česká firma a používáme kvalitní materiály a technologie z České republiky'
            }
          </p>
        </figure>
        <figure
          className={`${styles.featureBox} ${styles.featureBoxTransparency}`}
        >
          <div className={styles.svgContainer}>
            <TransparencySVG />
          </div>
          <figcaption>
            <span className={styles.caption}>{'Transparentnost a důvěra'}</span>
          </figcaption>
          <p className={styles.text}>
            {
              'Máme otevřenou politiku týkající se nákladů a rozsahu práce, která klientům poskytuje plnou transparentnost ve všech fázích projektu'
            }
          </p>
        </figure>
      </div>
    </div>
  );
}

export default AdvantagesContainer;
