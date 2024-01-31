import React from 'react';
import styles from './MainPage.module.scss';
import Item from 'components/Item';

const MainPage = ({ items }) => {
  const categories = [
    { id: 0, title: 'Бургеры' },
    { id: 1, title: 'Шаурма' },
    { id: 2, title: 'Тауки' },
    { id: 3, title: 'Хот-Доги' },
    { id: 4, title: 'Сэндвичи' },
    { id: 5, title: 'Фирменные' },
    { id: 6, title: 'Снэки' },
    { id: 7, title: 'Соусы' },
    { id: 8, title: 'Кофе' },
    { id: 9, title: 'Чаи' },
  ];

  return (
    <div className={styles.main}>
      {categories.map((category) => (
        <div key={category.id} className={styles.main__category}>
          <div className={styles.main__title}>
            <p>{category.title}</p>
          </div>
          <div className={styles.main__list}>
            {items
              .filter((item) => item.category === category.id)
              .map((item, id) => (
                <Item key={id} {...item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
