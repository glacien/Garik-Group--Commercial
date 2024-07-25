import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.description}>{'Kontaktujte nás:'}</span>
        <p>
          {'Telefon:'}&nbsp;&nbsp;&nbsp;
          <a className={styles.link} href="tel:+420111222333">
            +420111222333
          </a>
          &nbsp;&nbsp;Олександр
        </p>
        <p>
          {'Email:'}&nbsp;&nbsp;&nbsp;
          <a className={styles.link} href="mailto:someemail123@gmail.com">
            someemail123@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contacts;
