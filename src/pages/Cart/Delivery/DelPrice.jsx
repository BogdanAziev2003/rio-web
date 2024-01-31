import React, { useState, useEffect } from 'react';
const geolib = require('geolib');

const DelPrice = ({
  userAddress,
  userCoordinates,
  deliveryPrice,
  setDeliveryPrice,
}) => {
  const [curentArea, setCurentArea] = useState(null);

  const areas = [
    {
      title: 'Район Рио',
      coordinates: [
        { latitude: 43, longitude: 44 },
        { latitude: 43, longitude: 44 },
        { latitude: 43, longitude: 44 },
        { latitude: 43, longitude: 44 },
        { latitude: 43, longitude: 44 },
        { latitude: 43, longitude: 44 },
        { latitude: 43, longitude: 44 },
        { latitude: 43, longitude: 44 },
      ],
      price: 100,
    },
  ];

  useEffect(() => {
    if (userAddress && !userCoordinates) {
      if (userAddress.includes('село Хумалаг')) setDeliveryPrice(250);

      if (
        userAddress.includes('село Новый Батако') ||
        userAddress.includes('село Зильги') ||
        userAddress.includes('село Фарн')
      )
        setDeliveryPrice(200);

      if (userAddress.includes('село Заманкул')) setDeliveryPrice(500);
      if (userAddress.includes('село Цалык')) setDeliveryPrice(400);
    } else if (userCoordinates && userAddress) {
      const currentArea = areas.find((area) =>
        geolib.isPointInPolygon(userCoordinates, area.coordinates)
      );
      if (currentArea) {
        console.log(curentArea);
        setCurentArea(currentArea);
        setDeliveryPrice(currentArea.price);
      } else {
        console.log('Не район рио');
      }
    }
  }, [userAddress, userCoordinates]);

  return <div>{deliveryPrice} ₽</div>;
};

export default DelPrice;
