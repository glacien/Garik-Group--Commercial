import styles from './FooterSection.module.css';

function FooterSection() {
  return (
    <footer className={styles.content}>
      <div className={styles.copyrightContainer}>
        <div className={styles.logosContainer}>
          <div className={styles.logo}>logo</div>
          <div className={styles.logo}>logo</div>
          <div className={styles.logo}>logo</div>
        </div>
        <div className={styles.copyrightTextContainer}>
          <div className={styles.copyright}>
            <p>Garik Group s.r.o. | Stavební Firma</p>
            <p>
              Copyright &copy; <span>{new Date().getFullYear()}</span> by Garik
              Group
              <br />
              All rights reserved
            </p>
          </div>
          <div className={styles.ico}>
            <p>IČO:&nbsp;&nbsp;17929792</p>
            <p>DIČ:&nbsp;&nbsp;CZ17929792</p>
          </div>
        </div>
      </div>
      <div className={styles.contactsContainer}>
        <article className={styles.addressContainer}>
          <p>{'Kontaktujte nás:'}</p>
          <address className={styles.address}>
            <p>
              <a href="mailto:someemail123@gmail.com">someemail123@gmail.com</a>
            </p>
            <p>
              <a href="tel:+420111222333">+420111222333</a> Олександр
            </p>
            <p>Hronovická 498, 530 02, Pardubice - Zelené Předměstí</p>
          </address>
        </article>
        <aside className={styles.aside}>
          <p>
            Designed by <a href="https://github.com/glacien">glacien</a>
          </p>
          <p>
            Video from <a href="https://freepik.com/">freepik</a>
          </p>
        </aside>
      </div>
    </footer>
  );
}

export default FooterSection;
