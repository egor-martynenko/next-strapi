import styles from "./Header.module.css"
import Logo from "@/components/elements/Logo/Logo";


export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <Logo/>
        <ul className={styles.contacts}>
          <li>Москва</li>
          <li>info@aissteel.ru</li>
          <li>
            <a href={'tel:+78007007340'}>8 (800) 700-73-40</a></li>
        </ul>
      </div>
      <div className={styles.header_bottom}>
        <ul className={styles.header_btns}>
          <li>Каталог</li>
          <li>Специальные предложения</li>
          <li>О компании</li>
          <li>Контакты</li>
        </ul>

        <span className={styles.cta}>Заказать звонок</span>
      </div>
    </div>
  );
};