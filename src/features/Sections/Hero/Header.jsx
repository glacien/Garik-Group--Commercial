import { useState } from 'react';

import styles from './Header.module.css';

import MainLogo from '../../../assets/main-logo.svg';

function Header({ onClickHandle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenuHandle = function () {
    if (!isMenuOpen) {
      document.querySelector('.main-scroll-cotainer').style.overflowY =
        'hidden';
      setIsMenuOpen(true);
    }
    if (isMenuOpen) {
      document.querySelector('.main-scroll-cotainer').style.overflowY = 'unset';
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={styles.container}>
      {/* <img
          class="logo"
          src="src/img/main-logo.png"
          alt="Garik Group company main logo"
        /> */}
      <img src={MainLogo} />

      <nav className={`${styles.nav} ${styles.pcNav}`}>
        <ul className={`list ${styles.navLinks}`}>
          <li>
            <a onClick={onClickHandle} className="btn" href="#section--about">
              {'O nás'}
            </a>
          </li>
          <li>
            <a
              onClick={onClickHandle}
              className="btn"
              href="#section--services"
            >
              {'Naše služby'}
            </a>
          </li>

          <li>
            <a
              onClick={onClickHandle}
              className="btn"
              href="#section--portfolio"
            >
              {'Portfolio'}
            </a>
          </li>
          <li>
            <a
              onClick={onClickHandle}
              className="btn btn--cta"
              href="#section--cta"
            >
              {'Kontakt'}
            </a>
          </li>
        </ul>
      </nav>
      <div className={`${styles.menu} ${isMenuOpen ? 'open' : ''}`}>
        <button
          onClick={onClickMenuHandle}
          className={`${styles.menuIcon} ${isMenuOpen ? 'open' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={styles.nav}>
          <ul className={`list ${styles.navLinks}`}>
            <li>
              <a
                onClick={(e) => {
                  onClickMenuHandle();
                  onClickHandle(e);
                }}
                className="btn"
                href="#section--about"
              >
                {'O nás'}
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  onClickMenuHandle();
                  onClickHandle(e);
                }}
                className="btn"
                href="#section--services"
              >
                {'Naše služby'}
              </a>
            </li>

            <li>
              <a
                onClick={(e) => {
                  onClickMenuHandle();
                  onClickHandle(e);
                }}
                className="btn"
                href="#section--portfolio"
              >
                {'Portfolio'}
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  onClickMenuHandle();
                  onClickHandle(e);
                }}
                className="btn btn--cta"
                href="#section--cta"
              >
                {'Kontakt'}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
