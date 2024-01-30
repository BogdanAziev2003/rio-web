import React from 'react';
const geolib = require('geolib');

const DelPrice = ({ userCoordinates }) => {
  // const myCoordinates = {
  //   latitude: 43.19197240883961,
  //   longitude: 44.528836591854905,
  // };

  const rioArea = [
    { latitude: 43.19190757875255, longitude: 44.52950661611547 },
    { latitude: 43.19406721189098, longitude: 44.5254117456374 },
    { latitude: 43.19532002297593, longitude: 44.523286321685745 },
    { latitude: 43.196162640965554, longitude: 44.520454394925984 },
    { latitude: 43.19804487080769, longitude: 44.51461650056253 },
    { latitude: 43.199440497239586, longitude: 44.50970805353095 },
    { latitude: 43.19580242879589, longitude: 44.508063577632484 },
    { latitude: 43.195027622552985, longitude: 44.506804330515486 },
    { latitude: 43.1915348110463, longitude: 44.506633943461416 },
    { latitude: 43.18971954947681, longitude: 44.506994457201515 },
    { latitude: 43.190334244894, longitude: 44.51470597678218 },
    { latitude: 43.18874599566052, longitude: 44.51853869013183 },
    { latitude: 43.1876712898078, longitude: 44.52051421401958 },
    { latitude: 43.186474169934655, longitude: 44.52347738377953 },
    { latitude: 43.188536690297106, longitude: 44.525658778711986 },
    { latitude: 43.190665369701385, longitude: 44.52808807533642 },
  ];

  // if (geolib.isPointInPolygon(userCoordinates, rioArea)) {
  //   console.log('Район рио');
  // } else {
  //   console.log('Не район рио');
  // }

  return <div>DelPrice</div>;
};

export default DelPrice;
