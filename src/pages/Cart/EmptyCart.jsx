import React from 'react';
import cartImage from '../../image/empty-cart.png';
import styles from './Cart.module.scss';

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <img src={cartImage} alt="empty-cart" className={styles.empty__image} />
      <h3 className={styles.empty__title}>Корзина пуста </h3>
    </div>
  );
};

export default EmptyCart;
