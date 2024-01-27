import React from 'react';

import styles from './ModalWindow.module.scss';

const ModalItemSize = () => {
  return (
    <div className={styles.modal__size}>
      <div className={`${styles.size} ${styles.size__active}`}>
        <p>Маленькая</p>
      </div>
      <div className={styles.size}>
        <p>Большая</p>
      </div>
    </div>
  );
};

export default ModalItemSize;
