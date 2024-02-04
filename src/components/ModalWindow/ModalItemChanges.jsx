import React, { useEffect, useState } from 'react';
import styles from './ModalWindow.module.scss';

const ModalItemChanges = ({
  updateItemForCart,
  setUpdateItemForCart,
  changeItems,
  changeName,
  id,
  item,
}) => {
  // чтобы молоко было полюбому выбрано
  useEffect(() => {
    if (changeName === 'Выберите молоко') {
      const updateChange = changeItems.map((ch, index) =>
        index === 3 ? { ...ch, selected: true } : ch
      );
      const updatedChanges = [
        {
          ...updateItemForCart.changes[0],
          items: updateChange,
        },
        ...updateItemForCart.changes.slice(1),
      ];
      setUpdateItemForCart({
        ...updateItemForCart,
        changes: updatedChanges,
      });
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const handleMilkSelection = (changeName) => {
    const { price } = updateItemForCart.sizes.find((size) => size.selected);
    const updateChange = changeItems.map((change) =>
      change.name === changeName
        ? { ...change, selected: true }
        : { ...change, selected: false }
    );

    const updatedChanges = [...updateItemForCart.changes];
    updatedChanges[id] = {
      ...updateItemForCart.changes[id],
      items: updateChange,
    };

    const updateItem = updateChange.find((ch) => ch.selected === true);
    setUpdateItemForCart({
      ...updateItemForCart,
      changes: updatedChanges,
      price:
        updateItem.name === 'Без сиропа'
          ? price
          : updateItemForCart.price + updateItem.price >=
            price + updateItem.price
          ? price + updateItem.price
          : price,
    });
    setSelected(changeName);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.modal__changes}>
      <div className={styles.changes__title}>{changeName}</div>
      <div className={styles.changes__block} onClick={handleToggleDropdown}>
        <div className={styles.name}>{selected ? selected : 'Выбрать'}</div>

        {isOpen && (
          <div className={styles.dropdown__menu}>
            {changeItems.map((change, idx) => (
              <div
                key={idx}
                className={styles.dropdown__item}
                onClick={() => handleMilkSelection(change.name)}
              >
                {change.name}
                <div className={styles.dropdown__item__price}>
                  {change.price !== 0 && <>+ {change.price} ₽</>}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.img}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M18.3335 9.99996C18.3335 14.5958 14.5951 18.3333 10.0001 18.3333C5.40514 18.3333 1.66681 14.5958 1.66681 9.99996C1.66681 5.40496 5.40514 1.66663 10.0001 1.66663C14.5951 1.66663 18.3335 5.40496 18.3335 9.99996Z"
              fill="#FE5E00"
            />
            <path
              d="M13.5174 8.79794C13.5174 8.95711 13.4565 9.11711 13.3349 9.23878L10.4432 12.1446C10.3257 12.2621 10.1665 12.3279 9.99988 12.3279C9.83404 12.3279 9.67488 12.2621 9.55738 12.1446L6.66404 9.23878C6.42071 8.99461 6.42071 8.59961 6.66571 8.35544C6.91071 8.11211 7.30654 8.11294 7.54988 8.35711L9.99988 10.8179L12.4499 8.35711C12.6932 8.11294 13.0882 8.11211 13.3332 8.35544C13.4565 8.47711 13.5174 8.63794 13.5174 8.79794Z"
              fill="#FE5E00"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ModalItemChanges;
