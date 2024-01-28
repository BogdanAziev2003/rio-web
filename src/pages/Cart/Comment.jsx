import React from 'react';
import styles from './Cart.module.scss';

const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className="comment__text">
        <p>Введите коментарий к заказу</p>
      </div>
      <textarea name="" placeholder="Ваш коментарий"></textarea>
    </div>
  );
};

export default Comment;
