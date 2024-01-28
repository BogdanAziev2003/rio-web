import React from 'react';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';

import Phone from './Phone';
import PaymentMethod from './PaymentMethod';
import DeliveryMethod from './DeliveryMethod';
import Addres from './Delivery/Address';
import Comment from './Comment';
import ClearCart from './ClearCart';
import ItemsInCart from './ItemsInCart';

const CartPage = () => {
  const { totalPrice } = useSelector((state) => state.items);
  return (
    <div className={styles.wrapper}>
      <ClearCart />

      {/* items в корзине */}
      <ItemsInCart />

      <div className={styles.bill}>
        <div className={styles.bill__text}>
          <p>
            Корзина: <span>{totalPrice}</span> ₽
          </p>
        </div>
      </div>

      <div className={styles.order__text}>
        <p>Оформление заказа</p>
      </div>

      {/* Номер телефона */}
      <Phone />

      {/* Способ Оплаты */}
      <PaymentMethod />

      {/* Способ получения */}
      <DeliveryMethod />

      {/* Адресс  */}
      <Addres />

      {/* Комментарий */}
      <Comment />
    </div>
  );
};

export default CartPage;
