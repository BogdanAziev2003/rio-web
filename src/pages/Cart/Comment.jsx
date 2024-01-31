import React from 'react';
import styles from './Cart.module.scss';
import { useDispatch } from 'react-redux';
import { setComment } from '../../redux/commentSlice';

const Comment = () => {
  const dispatch = useDispatch();
  const handlerCommentChange = (event) => {
    dispatch(setComment(event.target.value));
  };

  return (
    <div className={styles.comment}>
      <div className="comment__text">
        <p>Введите коментарий к заказу</p>
      </div>
      <textarea
        name=""
        onChange={handlerCommentChange}
        placeholder="Ваш коментарий"
        maxLength="200"
      ></textarea>
    </div>
  );
};

export default Comment;
