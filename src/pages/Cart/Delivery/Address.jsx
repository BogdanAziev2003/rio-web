import React from 'react';
import styles from '../Cart.module.scss';

const Addres = () => {
  return (
    <div className={styles.adress}>
      <div className={styles.adress__text}>
        <p>Выберите город и улицу</p>
      </div>

      <div className={styles.adress__list}>
        <div className={styles.adress__input}>
          <input type="text" className={styles.input} placeholder="Город" />
        </div>
        <div className={styles.adress__input}>
          <input type="text" className={styles.input} placeholder="Улица" />
        </div>
      </div>
    </div>
  );
};

export default Addres;
