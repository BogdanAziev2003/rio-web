import React, { useEffect, useState } from 'react';
import styles from './ModalWindow.module.scss';

const ModalItemSize = ({ updateItemForCart, setUpdateItemForCart }) => {
  const [firstOpen, setFirstOpen] = useState(true);
  const sizes = updateItemForCart.sizes;

  useEffect(() => {
    const updatedSizes = sizes.map((size, index) =>
      index === 0 ? { ...size, selected: true } : { ...size, selected: false }
    );
    setUpdateItemForCart({
      ...updateItemForCart,
      sizes: updatedSizes,
    });
    setFirstOpen(false);
  }, [firstOpen]);

  const handleChooseSize = (idx) => {
    const updateSizes = updateItemForCart.sizes.map((size, index) =>
      index === idx ? { ...size, selected: true } : { ...size, selected: false }
    );
    const updatedSize = updateSizes.find((size) => size.selected);

    setUpdateItemForCart({
      ...updateItemForCart,
      sizes: updateSizes,
      price: updatedSize.price + modPrice + (changePrice ? changePrice : 0),
    });
  };

  const modPrice = updateItemForCart?.modifiers?.reduce((total, mod) => {
    if (mod?.selected) {
      total += mod?.price;
    }
    return total;
  }, 0);

  const changePrice = updateItemForCart?.changes?.reduce((total, chs) => {
    const items = chs?.items;
    const sum = items?.reduce((acc, item) => {
      if (item.selected && item.price) {
        return acc + item.price;
      }
      return acc;
    }, 0);
    return total + sum;
  }, 0);

  return (
    <div className={styles.modal__size}>
      {sizes.map((size, index) => (
        <div
          key={index}
          onClick={() => handleChooseSize(index)}
          className={`${styles.size} ${
            size.selected ? styles.size__active : ''
          }`}
        >
          <p>{size.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ModalItemSize;
