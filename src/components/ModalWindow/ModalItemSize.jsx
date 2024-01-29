import React from 'react';
import styles from './ModalWindow.module.scss';

const ModalItemSize = ({ activeItemForCart, setActiveItemForCart }) => {
  const sizes = activeItemForCart.sizes;
  const currentSizes = [];

  const handleChooseSize = (idx) => {
    setActiveItemForCart({
      ...activeItemForCart,
      price: activeItemForCart.sizes[idx].price + modPrice,
    });
  };

  const modPrice = activeItemForCart?.modifiers.reduce((total, mod) => {
    if (mod?.selected) {
      total += mod.price;
    }
    return total;
  }, 0);

  for (let i = 1; i <= sizes.length; i++) {
    currentSizes.push(
      <div
        onClick={() => handleChooseSize(i - 1)}
        className={`${
          activeItemForCart &&
          activeItemForCart.price ===
            activeItemForCart.sizes[i - 1].price + modPrice &&
          styles.size__active
        } ${styles.size}`}
        key={i}
      >
        <p>{sizes[i - 1].title}</p>
      </div>
    );
  }

  return <div className={styles.modal__size}>{currentSizes}</div>;
};

export default ModalItemSize;

// <div className={`${styles.size} ${styles.size__active}`} key={i}>
