import React from 'react';
import styles from './Cart.module.scss';

const EmptyCart = ({ cartImage }) => {
  return (
    <div className={styles.empty}>
      <img src={cartImage} alt="empty-cart" className={styles.empty__image} />
    </div>
  );
};

export default EmptyCart;
