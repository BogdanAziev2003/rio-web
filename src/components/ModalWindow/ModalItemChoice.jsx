import React from 'react';

import styles from './ModalWindow.module.scss';

const ModalChoice = () => {
  return (
    <div className={styles.modal__choice}>
      <div className={`${styles.choice} ${styles.choice__active}`}>
        <div>
          <p>1</p>
        </div>
        <div className={styles.choice__line}></div>
      </div>
      <div className={styles.choice}>
        <div>
          <p>2</p>
        </div>
        <div className={styles.choice__line}></div>
      </div>
      <div className={styles.choice}>
        <div>
          <p>3</p>
        </div>
        <div className={styles.choice__line}></div>
      </div>
    </div>
  );
};

export default ModalChoice;
