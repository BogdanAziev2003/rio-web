import React from 'react';
import styles from '../Cart.module.scss';

const AddressFalse = ({ setUserAddress, setUserCoordinates }) => {
  const optionsAuto = {
    fields: [
      { id: 'js-Field1', levels: ['Region'] },
      { id: 'js-Field2', levels: ['District', 'City', 'Place'] },
      { id: 'js-Field3', levels: ['Site', 'Street', 'House'] },
    ],
  };
  window.AhunterSuggest.Address.Discrete(optionsAuto);

  const getCoordinats = async () => {
    const url =
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
    const token = '13d34ee3058d1955e3370bccac7c074a44c49019';
    let query = '';
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
        const { settlement_with_type } = result.suggestions[0]?.data;
        const { city_with_type } = result.suggestions[0]?.data;
        const { street, house } = result.suggestions[0]?.data;

        if (settlement_with_type && !city_with_type) {
          let address = settlement_with_type;
          if (street !== null) {
            address += `, ${street} `;
          }
          if (house !== null) {
            address += `${house}`;
          }
          console.log(address);
          setUserAddress(address);
          setUserCoordinates(false);
        }

        if (city_with_type && !settlement_with_type) {
          let address = city_with_type;

          if (street !== null) {
            address += `, ${street} `;
          }
          if (house !== null) {
            address += `${house}`;
          }
          setUserAddress(address);
          setUserCoordinates({
            latitude: result.suggestions[0].data.geo_lat,
            longitude: result.suggestions[0].data.geo_lon,
          });
        }
      })
      .catch(() =>
        console.log(
          'Тут моя ошибка что адресс веден неправильно (в базе нет его)'
        )
      );
  };

  return (
    <div>
      <div className={styles.adress__text}>
        <p>Введите ваш адресс</p>
      </div>
      <div className={styles.adress__list}>
        <div className={styles.adress__input}>
          <input className={styles.input} id="js-Field2" placeholder="Город" />
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
          value="Респ Северная Осетия - Алания"
          onChange={() => {}}
        />
      </div>

      <button onClick={getCoordinats}>Подтвердить</button>
    </div>
  );
};

export default AddressFalse;
