import { useState } from 'react';

import styles from './FeatureBox.module.css';

import PlusButton from './PlusButton';

function FeatureBox({ caption, children }) {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <figure
      className={`${styles.featureBox} ${isActive ? 'active' : ''}`}
      onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <figcaption>
        <span className={`${styles.featureBoxSpan} ${isHover ? 'hover' : ''}`}>
          {caption}
          <PlusButton
            color={
              isHover
                ? 'var(--color-text-black--3)'
                : 'var(--color-text-black--1)'
            }
            size="2.4rem"
            boldness="0.4rem"
            isActive={isActive}
          />
        </span>
      </figcaption>
      <p className={styles.featureBoxText}>{children}</p>
    </figure>
  );
}

export default FeatureBox;
