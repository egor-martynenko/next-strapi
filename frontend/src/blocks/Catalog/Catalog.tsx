import styles from './Catalog.module.css';

const data = [
  {
    category: 'Металлопрокат',
    groups: [
      {
        id: 1,
        title: 'Сортовой прокат',
        items: ['Арматура', 'Полоса', 'Квадрат', 'Круг', 'Шестигранник'],
      },
      {
        id: 2,
        title: 'Листовой прокат',
        items: [
          'Лист горячекатаный',
          'Лист холоднокатаный',
          'Оцинкованный лист',
          'Профнастил',
          'Рифленый лист',
        ],
      },
      {
        id: 3,
        title: 'Фасонный прокат',
        items: ['Балка двутавровая', 'Швеллер', 'Уголок равнополочный', 'Уголок неравнополочный'],
      },
      {
        id: 4,
        title: 'Трубный прокат',
        items: [
          'Труба профильная',
          'Труба водогазопроводная',
          'Труба электросварная',
          'Труба нержавеющая',
          'Труба оцинкованная',
        ],
      },
      {
        id: 5,
        title: 'Нержавеющий прокат',
        items: [
          'Лист нержавеющий',
          'Труба нержавеющая',
          'Круг нержавеющий',
          'Шестигранник нержавеющий',
          'Проволока нержавеющая',
        ],
      },
    ],
  },
];

export const Catalog = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((category, index) => (
        <div key={index} className={styles.catalog_block}>
          <h3 className={styles.block_title}>{category.category}</h3>
          <ul className={styles.block_list}>
            {category.groups.map((group) => (
              <li key={group.id} className={styles.group_wrapper}>
                <h4 className={styles.group_title}>{group.title}</h4>
                <ul className={styles.items_list}>
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
