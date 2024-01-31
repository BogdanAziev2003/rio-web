import React, { useEffect, useState } from 'react';
import styles from '../Cart.module.scss';
import DelPrice from './DelPrice';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../../redux/deliverySlice';

const Addres = () => {
  const dispatch = useDispatch();
  const [userAddress, setUserAddress] = useState('');
  const [userCoordinates, setUserCoordinates] = useState({});

  const url =
    'http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  const token = '13d34ee3058d1955e3370bccac7c074a44c49019';
  let query = '';

  const optionsAuto = {
    fields: [
      { id: 'js-Field1', levels: ['Region', 'District'] },
      { id: 'js-Field2', levels: ['City', 'Place'] },
      { id: 'js-Field3', levels: ['Site', 'Street', 'House'] },
    ],
  };

  window.AhunterSuggest.Address.Discrete(optionsAuto);

  const getCoordinats = async () => {
    let inputs = document.querySelectorAll('.input-wrapper input');
    let address = '';
    inputs.forEach((input) => {
      address += input.value + ' ';
    });
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
        setUserAddress(
          `${result.suggestions[0].data.city}, ${result.suggestions[0].data.street}, ${result.suggestions[0].data.house}`
        );
        dispatch(setAddress(userAddress));
        setUserCoordinates({
          latitude: result.suggestions[0].data.geo_lat,
          longitude: result.suggestions[0].data.geo_lon,
        });
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div className="input-wrapper">
      <div className={styles.adress}>
        <div className={styles.adress__text}>
          <p>Выберите город и улицу</p>
        </div>
        <div className={styles.adress__list}>
          <div className={styles.adress__input}>
            <input
              className={styles.input}
              id="js-Field2"
              placeholder="Город"
            />
          </div>
          <div className={styles.adress__input}>
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
            value="Респ Северная Осетия - Алания, р-н Правобережный"
            onChange={() => {}}
          />
        </div>

        <button onClick={getCoordinats} className="get-coordinates">
          Получить координаты
        </button>

        {userAddress && userCoordinates && (
          <DelPrice userCoordinates={userCoordinates} />
        )}
      </div>
    </div>
  );
};

export default Addres;
