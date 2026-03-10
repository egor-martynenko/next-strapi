import styles from './Footer.module.css';
import Logo from '@/components/elements/Logo/Logo';

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li>Главная</li>
          <li>Каталог</li>
          <li>Спец. предложения</li>
          <li>О компании</li>
          <li>Контакты</li>
        </ul>
        <ul className={styles.navigation_contacts}>
          <li>Москва</li>
          <li>info@aissteel.ru</li>
          <li>
            <a href={'tel:+78007007340'}>8 (800) 700-73-40</a>
          </li>
        </ul>
      </div>
      <div className={styles.middle}>
        <Logo color={'#002C52'} />
        <span>Правила пользования сайтом</span>
      </div>
      <p className={styles.text}>©2026 Торговый дом "АИС СТАЛЬ". Все права защищены</p>
      <p className={styles.sec_text}>
        На нашем сайте осуществляется сбор персональных данных и cookies для улучшения работы сайта,
        персонализации контента и анализа посещаемости. Продолжая пользоваться сайтом, вы
        соглашаетесь с использованием cookies и обработкой ваших данных в соответствии с нашей
        Политикой конфиденциальности. Чтобы отказаться от обработки, отключите сохранение cookies в
        настройках вашего браузера.
      </p>
    </div>
  );
};
