import styles from './Section.module.css';

function Section({ id, className, children }) {
  return (
    <section id={id} className={`${styles.container} ${className}`}>
      {children}
    </section>
  );
}

export default Section;
