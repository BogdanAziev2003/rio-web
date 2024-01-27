import React from 'react';

import styles from './Footer.module.scss';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { totalPrice } = useSelector((state) => state.items);
  return (
    <div className={styles.footer__button}>
      <p>{totalPrice} ₽</p>
    </div>
  );
};

export default Footer;
