import React, { useEffect, useState } from 'react';
import styles from '../Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setAddressError } from '../../../redux/errorsSlice';
import { setDelPrice } from '../../../redux/deliverySlice';
import DelPrice from './DelPrice';

const Addres = () => {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => state.items);
  const { addressIsFalse } = useSelector((state) => state.errors);
  const { delPrice, address } = useSelector((state) => state.delmethod);
  const [addressNotFound, setAddressNotFound] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userCoordinates, setUserCoordinates] = useState(false);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [deliveryPriceNotFound, setDeliveryPriceNotFound] = useState(false);

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
      dispatch(setDelPrice(0));
      setDeliveryPrice(0);
      setAddressNotFound(!city ? 'Введите ваш город' : 'Введите улицу и дом');
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
        if (!house) {
          setAddressNotFound('Введите номер дома');
          return;
        }
        // Если село
        if (settlement_with_type) {
          let address = settlement_with_type;
          if (street !== null && house !== null) {
            address += `, ${street} ${house}`;
            setUserAddress(address);
            setUserCoordinates(false);
            dispatch(setAddressError(false));
          }
        }

        // Если город
        if (city_with_type) {
          let address = city_with_type;

          if (street && house) {
            address += `, ${street} ${house}`;
            setUserAddress(address);
            setUserCoordinates({
              latitude: result.suggestions[0].data.geo_lat,
              longitude: result.suggestions[0].data.geo_lon,
            });
            dispatch(setAddressError(false));
          }
        }
      })
      .catch(() => {
        dispatch(setAddressError(true));
        setDeliveryPrice(0);
        setDeliveryPriceNotFound(false);
        setAddressNotFound('Введите коректный адресс');
      });
  };

  const haldleInputOnClick = () => {
    dispatch(setAddressError(null));
    setAddressNotFound(false);
  };

  return (
    <div className="input-wrapper">
      <div className={styles.adress}>
        <div className={styles.adress__text}>
          <p>Введите ваш адресс</p>
        </div>
        <div className={styles.adress__list}>
          <div className={styles.adress__input}>
            <input
              className={styles.input}
              id="js-Field2"
              placeholder="Беслан"
              onClick={haldleInputOnClick}
            />
          </div>
          <div className={styles.adress__input}>
            <input
              className={styles.input}
              id="js-Field3"
              placeholder="Суворова 12"
              onClick={haldleInputOnClick}
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

        <div className={styles.adress__info}>
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
            <div className={styles.cart__error}>{addressNotFound}</div>
          )}
          {deliveryPriceNotFound && (
            <div className={styles.cart__delprice_notFound}>
              Мы свяжемся с вами для уточнения стоимости доставки.
            </div>
          )}

          {userAddress && (
            <DelPrice
              userAddress={userAddress}
              userCoordinates={userCoordinates}
              deliveryPrice={deliveryPrice}
              delPrice={delPrice}
              setDeliveryPrice={setDeliveryPrice}
              setDeliveryPriceNotFound={setDeliveryPriceNotFound}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Addres;
