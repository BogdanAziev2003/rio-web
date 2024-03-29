import React, { useEffect, useState } from 'react';
import ModalWindow from 'components/ModalWindow';
import { v4 as uuidv4 } from 'uuid';
import styles from './Item.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/itemsSlice';
import ButtonInCart from './Components/ButtonInCart';

const Item = ({ ...item }) => {
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => state.items);

  // useEffect(() => {
  //   console.log(itemsInCart);
  // }, [itemsInCart]);

  const inCart = itemsInCart.find((itemInCart) => itemInCart.id === item.id);
  const [updateItemForCart, setUpdateItemForCart] = useState(item);
  const [countForCart, setCountForCart] = useState(1);

  // activeItemLogic
  const itemList = itemsInCart.filter(
    (itemInCart) => itemInCart.id === item.id
  );

  const [open, setOpen] = useState(false);
  const handleModalOpen = (itemToCart) => {
    setUpdateItemForCart(itemToCart);
    if (
      itemToCart.modifiers.length === 1 &&
      itemToCart.sizes.length === 1 &&
      !item.changes[0].name
    ) {
      setOpen(false);
      addItemInCart(itemToCart);
      return;
    }
    setOpen(true);
  };

  const addItemInCart = (itemToCart) => {
    if (
      itemToCart.modifiers.length === 1 &&
      itemToCart.sizes.length === 1 &&
      !item.changes[0].name
    ) {
      setOpen(false);
      const newItem = {
        idInCart: uuidv4(),
        ...itemToCart,
      };
      dispatch(addItem(newItem));
      return;
    }

    for (let i = 0; i < countForCart; i++) {
      const newItem = {
        idInCart: uuidv4(),
        ...updateItemForCart,
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
        <img src={item.image} alt="" />
      </div>
      <div className={styles.item__wrapper}>
        <div className={styles.item__info}>
          <div className={styles.item__title}>
            <p>{item.name}</p>
          </div>
          <div className={styles.item__price}>
            <p>
              {item.sizes.length > 1 && <span>от </span>}
              {item.price} ₽
            </p>
          </div>
        </div>
        {inCart ? (
          <ButtonInCart
            handleModalOpen={handleModalOpen}
            removeItemInCart={removeItemInCart}
            itemList={itemList}
            setOpen={setOpen}
            item={item}
          />
        ) : (
          <div
            className={styles.item__button}
            onClick={() => handleModalOpen(item)}
          >
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
          updateItemForCart={updateItemForCart}
          setUpdateItemForCart={setUpdateItemForCart}
        />
      )}
    </div>
  );
};

export default Item;
