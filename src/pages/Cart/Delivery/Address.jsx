import React, { useEffect, useState } from 'react';
import styles from '../Cart.module.scss';
import DelPrice from './DelPrice';
import { useSelector } from 'react-redux';
import AddressTrue from './AddressTrue';
import AddressFalse from './AddressFalse';

const Addres = () => {
  const { address, delPrice } = useSelector((state) => state.delmethod);
  const [userAddress, setUserAddress] = useState('');
  const [userCoordinates, setUserCoordinates] = useState(false);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  return (
    <div className="input-wrapper">
      <div className={styles.adress}>
        {address ? (
          <AddressTrue address={address} />
        ) : (
          <AddressFalse
            setUserAddress={setUserAddress}
            setUserCoordinates={setUserCoordinates}
          />
        )}

        {userAddress && (
          <DelPrice
            userAddress={userAddress}
            userCoordinates={userCoordinates}
            deliveryPrice={deliveryPrice}
            delPrice={delPrice}
            setDeliveryPrice={setDeliveryPrice}
          />
        )}
      </div>
    </div>
  );
};

export default Addres;
