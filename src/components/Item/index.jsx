import React, { useEffect, useState } from 'react';
import ModalWindow from 'components/ModalWindow';
import { v4 as uuidv4 } from 'uuid';

import styles from './Item.module.scss';
import itemImage from '../../image/burger.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/itemsSlice';
import ButtonInCart from './Components/ButtonInCart';

const Item = ({ ...item }) => {
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => state.items);
  const inCart = itemsInCart.find((itemInCart) => itemInCart.id === item.id);

  const [countForCart, setCountForCart] = useState(1);
  const [activeItemForCart, setActiveItemForCart] = useState(item);

  // activeItemLogic
  const itemList = itemsInCart.filter(
    (itemInCart) => itemInCart.id === item.id
  );

  // Modal Window Set Up
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setActiveItemForCart(item);
    setOpen(true);
  };

  const addItemInCart = () => {
    for (let i = 0; i < countForCart; i++) {
      const newItem = {
        idInCart: uuidv4(),
        ...activeItemForCart,
      };
      dispatch(addItem(newItem));
    }
  };

  const removeItemInCart = (item) => {
    dispatch(removeItem(item));
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
            <p>{item.price} ₽</p>
          </div>
        </div>
        {inCart ? (
          <ButtonInCart
            addItemInCart={addItemInCart}
            removeItemInCart={removeItemInCart}
            itemList={itemList}
            setOpen={setOpen}
            item={item}
          />
        ) : (
          <div className={styles.item__button} onClick={handleModalOpen}>
            <p>Добавить</p>
          </div>
        )}
      </div>

      {open && (
        <ModalWindow
          open={open}
          setOpen={setOpen}
          addItemInCart={addItemInCart}
          item={item}
          countForCart={countForCart}
          setCountForCart={setCountForCart}
          activeItemForCart={activeItemForCart}
          setActiveItemForCart={setActiveItemForCart}
        />
      )}
    </div>
  );
};

export default Item;
