import React, { useEffect, useState } from 'react';
import styles from '../Cart.module.scss';

const Addres = () => {
  var options = {
    fields: [
      { id: 'js-Field1', levels: ['Region', 'District'] },
      { id: 'js-Field2', levels: ['City', 'Place'] },
      { id: 'js-Field3', levels: ['Site', 'Street', 'House'] },
    ],
  };

  let url =
    'https://ahunter.ru/site/cleanse/address?user=BogdanAzievnPfqPINLnk9jt6yTgS1ls4&output=json&query=';

  window.AhunterSuggest.Address.Discrete(options);

  const getCoordinats = async () => {
    let inputs = document.querySelectorAll('.input-wrapper input');
    let address = '';
    inputs.forEach((input) => {
      address += input.value + ' ';
    });
    address = encodeURI(address.trim());

    await fetch(url + address)
      .then((res) => {
        let json = res.json();
        return json;
      })
      .then((data) => {
        console.log(data);
        console.log(data.addresses[0].geo_data.mid.lat);
        console.log(data.addresses[0].geo_data.mid.lon);
      });
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
              placeholder="Город    "
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
      </div>
    </div>
  );
};

export default Addres;
