import React from 'react';

import styles from '../../pages/MainPage/MainPage.module.scss';
import Item from 'components/Item';

const SandwichPage = ({ items }) => {
  return (
    <div className={styles.main}>
      <div className={styles.main__list}>
        {items.map((item, id) => (
          <Item key={id} title={item.name} price={100} />
        ))}
      </div>
    </div>
  );
};

export default SandwichPage;
