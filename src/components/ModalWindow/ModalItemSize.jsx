import React from 'react';
import styles from './ModalWindow.module.scss';
import { useDispatch } from 'react-redux';
import { chooseSize } from '../../redux/itemsSlice';

const ModalItemSize = ({ sizes, activeItemId, item, itemList }) => {
  const dispatch = useDispatch();
  const currentSizes = [];
  const activeItem = itemList.find((item) => item.idInCart === activeItemId);

  const handleChooseSize = (id) => {
    dispatch(chooseSize({ activeItem, id }));
  };

  for (let i = 1; i <= sizes.length; i++) {
    currentSizes.push(
      <div
        onClick={() => handleChooseSize(i - 1)}
        className={`${
          activeItem &&
          activeItem.sizes &&
          activeItem.sizes[i - 1] &&
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
