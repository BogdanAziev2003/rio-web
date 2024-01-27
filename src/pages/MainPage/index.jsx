import React from 'react';

import styles from './MainPage.module.scss';
import Item from 'components/Item';

const MainPage = ({ items }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>
        <p>Бургеры</p>
      </div>
      <div className={styles.main__list}>
        {items.map((item, id) => (
          <Item key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
