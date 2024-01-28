import React from 'react';
import styles from './ModalWindow.module.scss';

const ModalChoice = ({ count, activeItem, setActiveItem, itemList }) => {
  const activeIndex = itemList.findIndex(
    (value) => value.idInCart === activeItem
  );

  const choices = [];

  for (let i = 1; i <= count; i++) {
    choices.push(
      <div
        className={`${i - 1 === activeIndex && styles.choice__active} ${
          styles.choice
        }`}
        onClick={() => setActiveItem(itemList[i - 1].idInCart)}
        key={i}
      >
        <div>
          <p>{i}</p>
        </div>
        <div className={styles.choice__line}></div>
      </div>
    );
  }

  return <div className={styles.modal__choice}>{choices}</div>;
};

export default ModalChoice;
