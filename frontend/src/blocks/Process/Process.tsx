import styles from './Process.module.css';
import { SectionHeader } from '@/components/ui/SectionHeader/SectionHeader';
import { Button } from '@/components/elements/Button/Button';

const data = [
  {
    title: 'Вы делаете запрос по e-mail или по телефону',
    description: `Вы можете заказать нужные товары на сайте или оформить заявку через менеджера по телефону +7(800)700-73-40 или по почте info@aissteel.ru`,
  },
  {
    title: 'Мы готовим смету',
    description:
      'Менеджеры отдела продаж свяжутся с вами для уточнения деталей заявки, рассчитают стоимость товаров и сроки оказания всех услуг.',
  },
  {
    title: 'Согласовываем стоимость, заключаем договор',
    description:
      'Заключение договора - это важный этап в любом бизнесе. Это не только официальное подтверждение согласованной стоимости, но и гарантия выполнения обязательств для обеих сторон.',
  },
  {
    title: 'Оплата и согласование логистики',
    description:
      'Мы понимаем важность своевременной доставки, поэтому используем различные виды транспорта, чтобы ваши товары доходили до вас точно в срок.',
  },
  {
    title: 'Мы выполняем отгрузку и доставку продукции',
    description:
      'Наша компания предоставляет профессиональные услуги по отгрузке и доставке продукции в сроки и с соблюдением всех необходимых требований.',
  },
];

export const Process = () => {
  return (
    <div className={styles.wrapper}>
      <SectionHeader title={'как мы работаем'} />
      <div className={styles.list}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.circle} data-fill={index + 1}>
              {index + 1}
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Button text={'Связаться с нами'} />
    </div>
  );
};
