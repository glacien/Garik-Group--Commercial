import styles from './AboutStatisticsDiv.module.css';

import StatisticNumberDiv from './StatisticNumberDiv';

function AboutStatisticsDiv() {
  return (
    <div className={styles.container}>
      <figure className={styles.statisticDiv}>
        <StatisticNumberDiv>30</StatisticNumberDiv>
        <figcaption>
          <span className={styles.statisticCaption}>
            {'kvalifikovaných'}
            <br />
            {'pracovníků'}
          </span>
        </figcaption>
      </figure>
      <figure className={styles.statisticDiv}>
        <StatisticNumberDiv>2000</StatisticNumberDiv>
        <figcaption>
          <span className={styles.statisticCaption}>
            {'zrekonstruovaných'}
            <br />
            {'ploch'}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

export default AboutStatisticsDiv;
