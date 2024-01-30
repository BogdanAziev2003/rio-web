import React, { useEffect } from 'react';
import styles from './ModalWindow.module.scss';

const ModalItemSize = ({ activeItemForCart, setActiveItemForCart }) => {
  const sizes = activeItemForCart.sizes;
  const currentSizes = [];

  useEffect(() => {
    if (sizes.length > 0 && !sizes[0].selected) {
      const updatedSizes = sizes.map((size, index) =>
        index === 0 ? { ...size, selected: true } : size
      );
      setActiveItemForCart({
        ...activeItemForCart,
        sizes: updatedSizes,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChooseSize = (idx) => {
    const updateSizes = activeItemForCart.sizes.map((size) =>
      size.title === sizes[idx].title
        ? { ...size, selected: true }
        : { ...size, selected: undefined }
    );

    setActiveItemForCart({
      ...activeItemForCart,
      sizes: updateSizes,
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
