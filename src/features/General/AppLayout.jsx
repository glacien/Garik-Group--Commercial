import { useEffect } from 'react';

import styles from './AppLayout.module.css';

import HeroVideo from '../Sections/Hero/HeroVideo';
import MainContentSections from './MainContentSections';

function AppLayout() {
  useEffect(function () {
    const options = {
      root: document.querySelector('body'),
      rootMargin: '-50%',
      threshold: 0,
    };

    const callback = function (e) {
      if (e[0].isIntersecting) {
        e[0].target.classList.add('active');
        observer.unobserve(e[0].target);
      }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(document.getElementById('section--about'));
    observer.observe(document.getElementById('section--services'));
    observer.observe(document.getElementById('section--portfolio'));
    observer.observe(document.getElementById('section--cta'));
  }, []);

  return (
    <div className={`${styles.parallax} main-scroll-cotainer`}>
      <HeroVideo />
      <MainContentSections />
    </div>
  );
}

export default AppLayout;
