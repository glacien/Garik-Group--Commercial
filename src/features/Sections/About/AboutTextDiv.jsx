import styles from './AboutTextDiv.module.css';

function AboutTextDiv() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {
          'Garik Group je stavební společnost, která se specializuje na realizaci velkých komerčních projektů. Naším hlavním zaměřením jsou komplexní rekonstrukce a stavební práce pro velké prostory, jako jsou kanceláře, sklady, obchody a další objekty. Nabízíme celou řadu služeb, jako jsou interiérové a exteriérové práce, demontáže a opravy na klíč. I přesto, že je naše společnost relativně mladá, náš  tým  se  skládá  z  vysoce  kvalifikovaných  a  zkušených  odborníků,  kteří  mají  dlouholeté zkušenosti'
        }
      </p>
    </div>
  );
}

export default AboutTextDiv;
