import React, { useState } from 'react';
import ModalWindow from 'components/ModalWindow';
import styles from './Item.module.scss';

import itemImage from '../../image/burger.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/itemsSlice';
import ButtonInCart from './Components/ButtonInCart';

const Item = ({ ...item }) => {
  const dispatch = useDispatch();
  const price = item.sizes[0].price;
  const { itemsInCart } = useSelector((state) => state.items);
  const inCart = itemsInCart.find((itemInCart) => itemInCart.id === item.id);

  // count Item
  const count = itemsInCart.reduce((count, cartItem) => {
    if (cartItem.id === item.id) {
      count++;
    }
    return count;
  }, 0);

  // Modal Window Set Up
  const [open, setOpen] = useState(false);

  const addItemInCart = () => {
    dispatch(addItem(item));
    setOpen(true);
  };
  const removeItemInCart = () => {
    dispatch(removeItem(item));
    setOpen(true);
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={itemImage} alt="" />
      </div>
      <div className={styles.item__wrapper}>
        <div className={styles.item__info}>
          <div className={styles.item__title}>
            <p>{item.name}</p>
          </div>
          <div className={styles.item__price}>
            <p>{price} ₽</p>
          </div>
        </div>
        {inCart ? (
          <ButtonInCart
            addItemInCart={addItemInCart}
            removeItemInCart={removeItemInCart}
            count={count}
          />
        ) : (
          <div className={styles.item__button} onClick={addItemInCart}>
            <p>Добавить</p>
          </div>
        )}
      </div>

      {open && (
        <ModalWindow
          open={open}
          setOpen={setOpen}
          name={item.name}
          price={price}
          count={count}
          addItemInCart={addItemInCart}
          removeItemInCart={removeItemInCart}
        />
      )}
    </div>
  );
};

export default Item;
