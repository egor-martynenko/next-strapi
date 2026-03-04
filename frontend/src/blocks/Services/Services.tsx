import styles from "./Services.module.css";
import {SectionHeader} from "@/components/ui/SectionHeader/SectionHeader";
import Image from "next/image";

const data = [
  {
    id: 1,
    name: 'Резка металлопроката',
    link: "cutting",
    image: "cutting1.png",
  },
  {
    id: 2,
    name: 'доставка',
    link: "delivery",
    image: "delivery.png",
  },
  {
    id: 3,
    name: 'Экспресс химический анализ',
    link: "analiz",
    image: "analiz.png",
  },
  {
    id: 4,
    name: 'Ответственное хранение',
    link: "storage",
    image: "storage.png",
  },
  {
    id: 5,
    name: 'Рубка',
    link: "cutting2.",
    image: "cutting2.png",
  },
  {
    id: 6,
    name: 'Гибка',
    quantity: "более 15 марок",
    link: "pipe",
    image: "Bending.png",
  },
  {
    id: 7,
    name: 'Токарные и фрезеровочные работы',
    quantity: "12 типов",
    link: "work",
    image: "work.png",
  },
  {
    id: 8,
    name: 'Порошковая окраска',
    quantity: "более 15 марок",
    link: "coloring",
    image: "coloring.png",
  },
]

export const Services = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader title={'Услуги'} linkText={'Все услуги'} link={''}/>
      <div className={styles.services_list}>
        {data.map((item) => (
          <div className={styles.cart} key={item.id}>
            <div className={styles.image}>
              <Image alt={item.name} src={`/${item.image}`} fill/>
            </div>
            <p className={styles.description}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

