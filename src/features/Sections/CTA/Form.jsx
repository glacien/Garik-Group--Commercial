import ReactTextareaAutosize from 'react-textarea-autosize';

import styles from './Form.module.css';

function Form() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.formElement}>
          <label htmlFor="name">
            <span>{'Jméno'}</span>
          </label>
          <input required type="text" className={styles.input} id="name" />
        </div>
        <div className={styles.formElement}>
          <label htmlFor="telOrEmail">
            <span>{'Telefon nebo pošta'}</span>
          </label>
          <input
            required
            type="text"
            className={styles.input}
            id="telOrEmail"
          />
        </div>
        <div className={styles.formElement}>
          <label htmlFor="problem">
            <span>{'Napište, co vás zajímá'}</span>
          </label>
          <ReactTextareaAutosize
            minRows={5}
            maxRows={10}
            className={styles.textArea}
            id="problem"
          />
        </div>
        <div className={styles.formElement}>
          <button className={styles.btn}>
            <span>{'Poslat'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
