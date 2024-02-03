import React, { useEffect, useState } from 'react';
import styles from './ModalWindow.module.scss';

const ModalItemSize = ({ item, updateItemForCart, setUpdateItemForCart }) => {
  const sizes = item.sizes;
  const currentSizes = [];

  const [isFirstOpen, setIsFirstOpen] = useState(true);

  useEffect(() => {
    if (sizes.length > 0 && !sizes[0].selected) {
      const updatedSizes = sizes.map((size, index) =>
        index === 0 ? { ...size, selected: true } : size
      );
      setUpdateItemForCart({
        ...updateItemForCart,
        sizes: updatedSizes,
      });
    }
    setIsFirstOpen(false);
  }, [isFirstOpen]);

  const handleChooseSize = (idx) => {
    const updateSizes = updateItemForCart.sizes.map((size) =>
      size.title === sizes[idx].title
        ? { ...size, selected: true }
        : { ...size, selected: undefined }
    );

    setUpdateItemForCart({
      ...updateItemForCart,
      sizes: updateSizes,
      price: updateItemForCart.sizes[idx].price + modPrice,
    });
  };

  const modPrice = updateItemForCart?.modifiers.reduce((total, mod) => {
    if (mod?.selected) {
      total += mod?.price;
    }
    return total;
  }, 0);

  for (let i = 1; i <= sizes.length; i++) {
    currentSizes.push(
      <div
        onClick={() => handleChooseSize(i - 1)}
        className={`${
          updateItemForCart &&
          updateItemForCart.price ===
            updateItemForCart.sizes[i - 1].price + modPrice &&
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
