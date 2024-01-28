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
  const price = item.sizes[0].price;
  const { itemsInCart } = useSelector((state) => state.items);
  const inCart = itemsInCart.find((itemInCart) => itemInCart.id === item.id);

  // activeItemLogic
  const [activeItem, setActiveItem] = useState('');
  const itemList = itemsInCart.filter(
    (itemInCart) => itemInCart.id === item.id
  );
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
    const newItem = {
      idInCart: uuidv4(),
      ...item,
    };
    setActiveItem(newItem.idInCart);
    dispatch(addItem(newItem));
    setOpen(true);
  };
  const removeItemInCart = () => {
    dispatch(removeItem(activeItem));
    const updatedCartItems = itemsInCart.filter(
      (item) => item.idInCart !== activeItem
    );

    const newActiveItem = updatedCartItems
      .reverse()
      .find((itemInCart) => item.id === itemInCart.id);
    try {
      setActiveItem(newActiveItem.idInCart);
    } catch (err) {
      setActiveItem('');
    }
    setOpen(true);
  };

  useEffect(() => {
    console.log(itemsInCart);
  }, [itemsInCart]);

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
          sizes={item.sizes}
          activeItem={activeItem}
          item={item}
          setActiveItem={setActiveItem}
          itemList={itemList}
        />
      )}
    </div>
  );
};

export default Item;
