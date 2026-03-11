import styles from './ProductsList.module.css';
import Image from 'next/image';
const data = [
  {
    id: 1,
    title: 'Труба',
    img: 'truba.png',
  },
  {
    id: 2,
    title: 'Лист',
    img: 'list.png',
  },
  {
    id: 3,
    title: 'Круг',
    img: 'kroog.png',
  },
  {
    id: 4,
    title: 'Шестигранник',
    img: 'shesti.png',
  },
  {
    id: 5,
    title: 'Проволока',
    img: 'provoloka.png',
  },
  {
    id: 6,
    title: 'Сетка',
    img: 'setka.png',
  },
  {
    id: 7,
    title: 'Лента',
    img: 'lenta.png',
  },
  {
    id: 8,
    title: 'Квадрат',
    img: 'square.png',
  },
  {
    id: 9,
    title: 'Отвод',
    img: 'otvod.png',
  },
  {
    id: 10,
    title: 'Фланец',
    img: 'flanec.png',
  },
  {
    id: 11,
    title: 'Швеллер',
    img: 'shveller.png',
  },
  {
    id: 12,
    title: 'Уголок',
    img: 'ygolok.png',
  },
];
export const ProductsList = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Нержавеющий металлопрокат</h3>
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id} className={styles.card}>
            <span className={styles.card_title}>{item.title}</span>
            <div className={styles.image}>
              <Image src={`/${item.img}`} alt={''} fill />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
