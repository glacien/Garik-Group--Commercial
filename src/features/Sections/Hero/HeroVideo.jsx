import { useEffect } from 'react';

import styles from './HeroVideo.module.css';

function HeroVideo() {
  useEffect(function () {
    const options = {
      root: document.querySelector('body'),
      rootMargin: '400px',
      threshold: 0,
    };

    const callback = function (e) {
      if (e[0].isIntersecting) {
        document.querySelector(`.${styles.video}`).pause();
      }
      if (!e[0].isIntersecting) {
        document.querySelector(`.${styles.video}`).play();
      }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(document.getElementById('section--services'));
  }, []);

  return (
    <>
      <video
        poster="construction-site-first-frame.jpg"
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        controls="false"
        role="video"
        aria-label="two people discussing on construction site"
      >
        <source src="construction-site.mp4" type="video/mp4" />
        <source src="construction-site.webm" type="video/webm" />
      </video>
    </>
  );
}

export default HeroVideo;
