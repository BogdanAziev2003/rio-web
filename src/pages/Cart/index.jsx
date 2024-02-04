import React, { useCallback, useEffect } from 'react';
import styles from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import Phone from './Phone';
import PaymentMethod from './PaymentMethod';
import DeliveryMethod from './DeliveryMethod';
import Addres from './Delivery/Address';
import Comment from './Comment';
import ItemsInCart from './ItemsInCart';
import { useTelegram } from 'hooks/useTelegram';
import { setPhoneError, setAddressError } from '../../redux/errorsSlice';
import EmptyCart from './EmptyCart';

const CartPage = () => {
  const { itemsInCart } = useSelector((state) => {
    const itemsCount = state.items.itemsInCart.reduce((acc, item) => {
      const existingItem = acc.find(
        (i) =>
          i.id === item.id &&
          i.price === item.price &&
          JSON.stringify(i.modifiers) === JSON.stringify(item.modifiers) &&
          JSON.stringify(i.modifiers) === JSON.stringify(item.modifiers) &&
          JSON.stringify(i?.changes) === JSON.stringify(item?.changes)
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({ ...item, count: 1 });
      }
      return acc;
    }, []);

    return { itemsInCart: itemsCount };
  });

  // errors logic
  const dispatch = useDispatch();
  const { phoneIsFalse, addressIsFalse } = useSelector((state) => state.errors);

  // Telegram Send Data logic
  const { tg } = useTelegram();
  const { address, delMethod, delPrice } = useSelector(
    (state) => state.delmethod
  );
  const { phone } = useSelector((state) => state.phone);
  const { totalPrice } = useSelector((state) => state.items);
  const { payMethod } = useSelector((state) => state.paymethod);
  const { comment } = useSelector((state) => state.comment);

  const onSendData = useCallback(() => {
    // Errors
    if (
      phoneIsFalse === null ||
      phoneIsFalse === true ||
      (delMethod === 'delivery' &&
        (addressIsFalse === null || addressIsFalse === true))
    ) {
      if (phoneIsFalse === null || phoneIsFalse === true) {
        dispatch(setPhoneError(true));
      }
      if (
        delMethod === 'delivery' &&
        (addressIsFalse === null || addressIsFalse === true)
      ) {
        dispatch(setAddressError(true));
      }
      return;
    }

    const data = {
      totalPrice: totalPrice + delPrice,
      delPrice,
      cartPrice: totalPrice,
      address: address,
      phone,
      delMethod,
      payMethod,
      comment,
      itemsInCart: itemsInCart.map((item) => {
        const newItem = {
          name: item.name,
          price: item.price,
          count: item.count,
        };
        if (item.modifiers.length > 1) {
          newItem.modifiers = item.modifiers
            .filter((modifier) => modifier.selected)
            .map((modifier) => ({
              name: modifier.name,
            }));
        } else if (
          item.modifiers.length === 1 &&
          item.modifiers[0] &&
          item.modifier[0].selected
        ) {
          newItem = item.modifiers[0].name;
        } else {
          delete item.modifiers;
        }
        if (item.sizes.length) {
          newItem.sizes = item.sizes
            .filter((size) => size.selected)
            .map((size) => ({
              title: size.title,
            }));
        }
        return newItem;
      }),
    };

    tg.sendData(JSON.stringify(data));
  }, [totalPrice, address, phone, delMethod, payMethod, comment, itemsInCart]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);
    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [onSendData, tg]);

  return (
    <div className={styles.wrapper}>
      {/* items в корзине */}
      {totalPrice === 0 ? (
        <EmptyCart />
      ) : (
        <ItemsInCart itemsInCart={itemsInCart} totalPrice={totalPrice} />
      )}

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
      {delMethod === 'delivery' && <Addres delMethod={delMethod} />}

      {/* Комментарий */}
      <Comment />
    </div>
  );
};

export default CartPage;
