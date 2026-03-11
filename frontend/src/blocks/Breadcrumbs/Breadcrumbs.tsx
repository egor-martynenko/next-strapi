import styles from './Breadcrumbs.module.css';
export const Breadcrumbs = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.crumb}>Нержавеющий металлопрокат</li>
        &#9658;
        <li className={styles.crumb}>Труба нержавеющая</li>
        &#9658;
        <li className={styles.crumb}>Труба 12Х18Н10Т</li>
        &#9658;
        <li className={styles.crumb}>12x1,5 мм</li>
      </ul>
    </div>
  );
};
