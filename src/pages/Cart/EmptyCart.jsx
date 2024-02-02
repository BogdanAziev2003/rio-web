import React from 'react';
import cartImage from '../../image/empty-cart.png';
import styles from './Cart.module.scss';

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <img src={cartImage} alt="empty-cart" className={styles.empty__image} />
    </div>
  );
};

export default EmptyCart;
