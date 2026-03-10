import styles from './ShortCatalog.module.css'
import {SectionHeader} from "@/components/ui/SectionHeader/SectionHeader";
import Image from "next/image";
import {Input} from "@/components/elements/Input/Input";
import {Button} from "@/components/elements/Button/Button";
import {Checkbox} from "@/components/elements/Checkbox/Checkbox";

const data = [
  {
    id: 1,
    name: 'ТРУБА',
    quantity: "12 типов",
    link: "pipe",
    image: "pipe.png",
  },
  {
    id: 2,
    name: 'лист',
    quantity: "24 вида профиля",
    link: "sheet",
    image: "sheet.png",
  },
  {
    id: 3,
    name: 'круг',
    quantity: "любые радиусы",
    link: "circle",
    image: "сircle1.png",
  },
  {
    id: 4,
    name: 'шестигранник',
    quantity: "12 типов",
    link: "pipe",
    image: "hexagon1.png",
  },
  {
    id: 5,
    name: 'проволока',
    quantity: "12 типов",
    link: "pipe",
    image: "wire.png",
  },
  {
    id: 6,
    name: 'ПРЕЦИЗИОННЫЕ СПЛАВЫ',
    quantity: "более 15 марок",
    link: "pipe",
    image: "alloys.png",
  },
]

export const ShortCatalog = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader title={'каталог'} linkText={'Весь каталог'} link={''}/>
      <div className={styles.table}>
        {data.map(item => (
          <div key={item.id} className={styles.catalog_card}>
            <span className={styles.quantity}>{item.quantity}</span>
            <span className={styles.card_title}>{item.name}</span>
            <div className={styles.image}>
              <Image
                src={`/${item.image}`}
                alt={item.image}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

          </div>
        ))}
        <div className={styles.form}>
          <div className={styles.form_head}>
            <span className={styles.head_title}>Оставьте свои контактные данные,<br></br> чтобы получить прайс-лист и скидку</span>
            <span className={styles.sale}>-5%</span>
          </div>
          <form className={styles.form_inputs}>
            <Input placeholder={'Имя'}/>
            <Input placeholder={'Email'}/>
          </form>
          <div className={styles.form_bottom}>
            <div className={styles.agreement}>
              <Checkbox/>
              <span>Согласие на обработку персональных данных</span>
            </div>
            <Button text={"Оставить заявку"}/>
          </div>

        </div>
      </div>

    </div>
  );
};