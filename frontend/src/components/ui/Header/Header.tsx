'use client';
import styles from './Header.module.css';
import Logo from '@/components/elements/Logo/Logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      <div className={styles.header_top}>
        <Logo color={'white'} />
        <ul className={styles.contacts}>
          <li>Москва</li>
          <li>info@aissteel.ru</li>
          <li>
            <a href={'tel:+78007007340'}>8 (800) 700-73-40</a>
          </li>
        </ul>
      </div>
      <div className={styles.header_bottom}>
        <ul className={styles.header_btns}>
          <li className={pathname === '/catalog' ? styles.active : ''}>
            <Link href={'/catalog'}>Каталог</Link>
          </li>
          <li className={pathname === '/offer' ? styles.active : ''}>
            <Link href={'/offer'}>Специальные предложения</Link>
          </li>
          <li className={pathname === '/about' ? styles.active : ''}>
            <Link href={'/about'}>О компании</Link>
          </li>
          <li className={pathname === '/contacts' ? styles.active : ''}>
            <Link href={'/contacts'}>Контакты</Link>
          </li>
        </ul>
        <span className={styles.cta}>Заказать звонок</span>
      </div>
    </div>
  );
};
