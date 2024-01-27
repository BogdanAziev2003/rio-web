import React from 'react';
import styles from './ModalWindow.module.scss';

const ModalItemSize = ({ sizes }) => {
  const currentSizes = [];

  for (let i = 1; i <= sizes.length; i++) {
    currentSizes.push(
      <div className={`${styles.size}`} key={i}>
        <p>{sizes[i - 1].title}</p>
      </div>
    );
  }

  return <div className={styles.modal__size}>{currentSizes}</div>;
};

export default ModalItemSize;

// <div className={`${styles.size} ${styles.size__active}`} key={i}>
