import React, { useEffect, useState } from 'react';
import styles from '../Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const AddressFalse = ({
  setUserAddress,
  setUserCoordinates,
  addressIsFalse,
}) => {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => state.items);
  const [addressNotFound, setAddressNotFound] = useState(false);

  const optionsAuto = {
    fields: [
      { id: 'js-Field1', levels: ['Region'] },
      { id: 'js-Field2', levels: ['District', 'City', 'Place'] },
      { id: 'js-Field3', levels: ['Site', 'Street', 'House'] },
    ],
  };
  // window.AhunterSuggest.Address.Discrete(optionsAuto);

  const getCoordinats = async () => {
    let inputs = document.querySelectorAll('.input-wrapper input');
    let city = inputs[0].value;
    let streetAndHouse = inputs[1].value;
    if (!city || !streetAndHouse) {
      dispatch(setAddressError(true));
      return;
    }
    const url =
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
    const token = '13d34ee3058d1955e3370bccac7c074a44c49019';
    let query = '';
    let address = `${city} ${streetAndHouse}`;
    query = address;
    var options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + token,
      },
      body: JSON.stringify({ query: query }),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        const { settlement_with_type } = result.suggestions[0]?.data;
        const { city_with_type } = result.suggestions[0]?.data;
        const { street, house } = result.suggestions[0]?.data;

        if (settlement_with_type && !city_with_type) {
          let address = settlement_with_type;
          if (street !== null) {
            address += `, ${street}`;
          }
          if (house !== null) {
            address += `${house}`;
          }
          setUserAddress(address);
          setUserCoordinates(false);
          dispatch(setAddressError(false));
        }

        if (city_with_type && !settlement_with_type) {
          let address = city_with_type;

          if (street !== null) {
            address += `, ${street}`;
          }
          if (house !== null) {
            address += ` ${house}`;
          }
          setUserAddress(address);
          setUserCoordinates({
            latitude: result.suggestions[0].data.geo_lat,
            longitude: result.suggestions[0].data.geo_lon,
          });
          dispatch(setAddressError(false));
        }
      })
      .catch(() => setAddressNotFound(true));
  };

  const haldleInputOnClick = () => {
    dispatch(setAddressError(null));
    setAddressNotFound(false);
  };

  return (
    <div>
      <div className={styles.adress__text}>
        <p>Введите ваш адресс</p>
      </div>
      <div className={styles.adress__list}>
        <div className={styles.adress__input}>
          <input
            className={styles.input}
            id="js-Field2"
            placeholder="Город"
            onClick={haldleInputOnClick}
          />
        </div>
        <div className={styles.adress__input}>
          <input
            className={styles.input}
            id="js-Field3"
            placeholder="Улица, дом"
            onClick={haldleInputOnClick}
          />
        </div>
        <input
          className={styles.visibleFalse}
          id="js-Field1"
          placeholder="Регион, райнон"
          value="Респ Северная Осетия - Алания"
        />
      </div>

      <button
        className={`${styles.adress__button} ${
          totalPrice === 0 ? styles.inactiveButton : ''
        }`}
        onClick={getCoordinats}
        disabled={totalPrice === 0}
      >
        Подтвердить
      </button>

      {addressIsFalse && !addressNotFound && (
        <div className={styles.cart__error}>Введите ваш адресс</div>
      )}
      {addressNotFound && (
        <div className={styles.cart__error}>Введите коректный адресс</div>
      )}
    </div>
  );
};

export default AddressFalse;
