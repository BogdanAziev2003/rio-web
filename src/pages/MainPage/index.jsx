import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Skeleton } from 'components/Layout/Skeleton';
import styles from './MainPage.module.scss';
import stylesForSkeleton from '../../components/Item/Item.module.scss';
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

  // Skeleton logic
  const { isLoading } = useSelector((state) => state.items);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton className={stylesForSkeleton.skeleton} key={index} />
  ));

  return (
    <div className={styles.main}>
      {isLoading ? (
        <div className={stylesForSkeleton.wrapper}>{skeletons}</div>
      ) : (
        <>
          {categories.map((category) => (
            <div key={category.id} className={styles.main__category}>
              <div
                className={`${styles.main__title} ${
                  category.id !== 0 && styles.marg_bot
                } `}
              >
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
        </>
      )}
    </div>
  );
};

export default MainPage;
