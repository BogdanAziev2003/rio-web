import React from 'react';

import styles from '../../pages/MainPage/MainPage.module.scss';
import Item from 'components/Item';

const BurgerPage = ({ items }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__list}>
        {items.map((item, id) => (
          <Item key={id} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default BurgerPage;
