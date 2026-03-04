import {FC} from "react";
import styles from "./Hero.module.css";
import {Button} from "@/components/elements/Button/Button";

type HeroBlockProps = {
  backgroundImageUrl: string;
  HeroText: string;
  HeroDescription: string;
}

export const Hero:FC<HeroBlockProps> = ({backgroundImageUrl, HeroText, HeroDescription}) => {
  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>

      <div
        className={styles.hero}
      >

        <div
          className={styles.hero_data}>

          <div className={styles.hero_texts}>
            <h1 className={styles.hero_text}>{HeroText}</h1>
            <p className={styles.hero_description}>{HeroDescription}</p>
          </div>
          <Button text={'СКАЧАТЬ ПРАЙС-ЛИСТ'} onClick={()=>{}}/>
        </div>

        <div className={styles.advantages}>
          <div>Более 1500 товаров на сайте</div>
          <div>Гарантия качества, подтверждённая сертификатами</div>
          <div>Доставка любым видом транспорта по России и СНГ</div>
        </div>

      </div>

    </div>
  );
};

