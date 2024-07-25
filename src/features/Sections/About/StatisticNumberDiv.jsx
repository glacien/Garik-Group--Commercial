import AnimatedNumber from 'react-animated-numbers';

import styles from './StatisticNumberDiv.module.css';

function StatisticNumberDiv({ children }) {
  return (
    <div
      style={{ width: `${children == 30 ? '14rem' : '20rem'}` }}
      className={styles.numberDiv}
    >
      <div className={styles.borderLeft}></div>
      <div className={styles.borderBottom}></div>
      <AnimatedNumber
        fontStyle={{ fontSize: '5.2rem', fontWeight: 600 }}
        animateToNumber={children}
        transitions={(index) => ({
          type: 'tween',
          duration: index + 1,
        })}
      />
      <span className={styles.plus}>+</span>
    </div>
  );
}

export default StatisticNumberDiv;
