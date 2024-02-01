import React from 'react';
import styles from '../Cart.module.scss';
import { setResetAddress } from '../../../redux/deliverySlice';
import { useDispatch } from 'react-redux';
import { setAddressError } from '../../../redux/errorsSlice';

const AddressTrue = ({ address }) => {
  const dispatch = useDispatch();
  const handleResetAddress = () => {
    dispatch(setResetAddress());
    dispatch(setAddressError(null));
  };

  return (
    <div>
      <div className={styles.adress__text}>
        <p>ваш адресс: </p>
        <p>{address}</p>
      </div>
      <div className={styles.adress__list}>
        <div className={styles.visibleFalse}>
          <input className={styles.input} id="js-Field2" placeholder="Город" />
        </div>
        <div className={styles.visibleFalse}>
          <input
            className={styles.input}
            id="js-Field3"
            placeholder="Улица, дом"
          />
        </div>
        <input
          className={styles.visibleFalse}
          id="js-Field1"
          placeholder="Регион, райнон"
          value="Респ Северная Осетия - Алания"
          onChange={() => {}}
        />
      </div>
      <button className={styles.adress__button} onClick={handleResetAddress}>
        Изменить
      </button>
    </div>
  );
};

export default AddressTrue;
