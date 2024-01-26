import React from 'react';

import styles from './MainPage.module.scss';
import Item from 'components/Item';

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>
        <p>Бургеры</p>
      </div>
      <div className={styles.main__list}>
        <Item title="Бургер с говядиной" price="200" />
        <Item title="Чизбургер" price="250" />
      </div>
    </div>
  );
};

export default MainPage;
