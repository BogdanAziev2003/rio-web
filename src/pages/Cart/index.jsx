import React from 'react';
import styles from './Cart.module.scss';

import image from '../../image/burger.jpg';

const CartPage = () => {
  return (
    <div className={styles.wrapper}>
      {/* Кнопка отчистить корзину */}
      <div className={styles.clear}>
        <div className={styles.clear__inner}>
          <div className="clear__ico">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M19.6433 9.87653C19.6433 9.94479 19.1104 16.7113 18.806 19.5591C18.6154 21.3067 17.493 22.3667 15.8095 22.3968C14.516 22.4259 13.2498 22.4359 12.0039 22.4359C10.6813 22.4359 9.38778 22.4259 8.13221 22.3968C6.50513 22.3576 5.38183 21.2766 5.20094 19.5591C4.88778 16.7013 4.36454 9.94479 4.35482 9.87653C4.34509 9.67075 4.41123 9.47501 4.54544 9.31641C4.67771 9.16986 4.86833 9.08153 5.06867 9.08153H18.9392C19.1386 9.08153 19.3195 9.16986 19.4624 9.31641C19.5957 9.47501 19.6628 9.67075 19.6433 9.87653Z"
                fill="#FE5E00"
              />
              <path
                d="M21 6.35153C21 5.93897 20.6761 5.61575 20.2871 5.61575H17.3714C16.7781 5.61575 16.2627 5.19215 16.1304 4.5949L15.967 3.86313C15.7385 2.9788 14.9498 2.35946 14.0647 2.35946H9.93624C9.0415 2.35946 8.26054 2.9788 8.02323 3.91132L7.87054 4.5959C7.7373 5.19215 7.22185 5.61575 6.62957 5.61575H3.71385C3.32386 5.61575 3 5.93897 3 6.35153V6.73297C3 7.13549 3.32386 7.46874 3.71385 7.46874H20.2871C20.6761 7.46874 21 7.13549 21 6.73297V6.35153Z"
                fill="#FE5E00"
              />
            </svg>
          </div>
          <div className="clear__text">
            <p>Очистить корзину</p>
          </div>
        </div>
      </div>

      <div className={styles.cart}>
        <div className={styles.cart__inner}>
          <div className={styles.item}>
            <div className={styles.item__image}>
              <img src={image} alt="" />
            </div>
            <div className={styles.item__wrapper}>
              <div className={styles.item__info}>
                <div className={styles.item__name}>
                  <p>Бургер с говядиной</p>
                </div>
                <div className={styles.item__description}>
                  <p>большой, доп. сыр</p>
                </div>
                <div className={styles.item__price}>
                  <p>
                    Цена: <span className={styles.price}>900</span> ₽
                  </p>
                </div>
              </div>
              <div className={styles.item__amount}>
                <svg
                  width="16"
                  height="4"
                  viewBox="0 0 16 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.85046 0H6.14581H14.1471C15.1693 0 16 0.896644 16 2C16 3.10336 15.1693 4 14.1471 4H9.84921H6.14581H1.85046C0.828229 4 0 3.10336 0 2C0 0.896644 0.828229 0 1.85046 0Z"
                    fill="#FE5E00"
                  />
                </svg>

                <div className="item__amount__count">
                  <p>3</p>
                </div>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1471 6.1483H9.84921V1.85295C9.84921 0.830717 9.02099 0 7.99876 0C6.97653 0 6.14581 0.830717 6.14581 1.85295V6.1483H1.85046C0.828229 6.1483 0 6.97901 0 8.00124C0 9.02347 0.828229 9.85419 1.85046 9.85419H6.14581V14.1471C6.14581 15.1693 6.97653 16 7.99876 16C9.02099 16 9.84921 15.1693 9.84921 14.1471V9.85419H14.1471C15.1693 9.85419 16 9.02347 16 8.00124C16 6.97901 15.1693 6.1483 14.1471 6.1483Z"
                    fill="#FE5E00"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.item__delete}>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.68654 6.17408L5.51247 4.00107L7.68532 1.82806C8.10326 1.4113 8.10326 0.732995 7.68532 0.316236C7.26737 -0.104189 6.59156 -0.102967 6.17361 0.315014L3.99954 2.48803L1.82547 0.31257C1.40752 -0.105411 0.730495 -0.102967 0.312545 0.31257C-0.104182 0.730551 -0.104182 1.40885 0.312545 1.82561L2.48784 4.00107L0.317434 6.17042C-0.100516 6.5884 -0.100516 7.2667 0.317434 7.68224C0.526408 7.89245 0.798931 7.99633 1.07268 7.99633C1.34764 7.99633 1.62016 7.89245 1.82914 7.68346L3.99954 5.51289L6.17483 7.68712C6.38381 7.89612 6.65633 8 6.93007 8C7.20382 8 7.47756 7.89489 7.68654 7.68712C8.10449 7.26914 8.10449 6.59206 7.68654 6.17408Z"
                  fill="#372013"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bill}>
        <div className={styles.bill__text}>
          <p>
            Корзина: <span>1800</span> ₽
          </p>
        </div>
      </div>

      <div className={styles.order__text}>
        <p>Оформление заказа</p>
      </div>

      {/* Номер телефона */}
      <div className={styles.order}>
        <div className={styles.order__inner}>
          <div className={styles.phone}>
            <div className={styles.phone__text}>
              <p>Введите номер телефона</p>
            </div>
            <div className={styles.phone__input}>
              <input
                type="text"
                name=""
                id=""
                className={styles.input}
                placeholder="+7 (988) 833 33 33"
              />

              <div className={styles.phone__icon}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.20734 7.79524C9.70052 10.2877 10.2661 7.4042 11.8535 8.99051C13.3839 10.5205 14.2635 10.827 12.3245 12.7655C12.0816 12.9606 10.5385 15.3089 5.11538 9.88729C-0.308424 4.465 2.03849 2.92028 2.23373 2.67747C4.17742 0.733654 4.47866 1.61836 6.00906 3.14833C7.59648 4.73531 4.71416 5.30276 7.20734 7.79524Z"
                    fill="#FE5E01"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Способ Оплаты */}
      <div className={styles.method}>
        <div className={styles.method__text}>
          <p>Способ оплаты</p>
        </div>

        <div className={styles.method__list}>
          <div className={styles.method__el}>
            <div
              className={`${styles.method__button} ${styles.method__button__pressed}`}
            >
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.81295 7.24815C3.58895 7.24815 3.36495 7.16315 3.19395 6.99215L0.820953 4.61915C0.478953 4.27715 0.478953 3.72315 0.820953 3.38215C1.16295 3.04015 1.71595 3.03915 2.05795 3.38115L3.81295 5.13615L7.94095 1.00815C8.28295 0.666148 8.83595 0.666148 9.17795 1.00815C9.51995 1.35015 9.51995 1.90415 9.17795 2.24615L4.43195 6.99215C4.26095 7.16315 4.03695 7.24815 3.81295 7.24815Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p>Наличными</p>
            </div>
          </div>
          <div className={styles.method__el}>
            <div className={styles.method__button}></div>
            <div>
              <p>Переводом</p>
            </div>
          </div>
        </div>
      </div>

      {/* Способ получения */}
      <div className={styles.method}>
        <div className={styles.method__text}>
          <p>Способ получения</p>
        </div>

        <div className={styles.method__list}>
          <div className={styles.method__el}>
            <div
              className={`${styles.method__button} ${styles.method__button__pressed}`}
            >
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.81295 7.24815C3.58895 7.24815 3.36495 7.16315 3.19395 6.99215L0.820953 4.61915C0.478953 4.27715 0.478953 3.72315 0.820953 3.38215C1.16295 3.04015 1.71595 3.03915 2.05795 3.38115L3.81295 5.13615L7.94095 1.00815C8.28295 0.666148 8.83595 0.666148 9.17795 1.00815C9.51995 1.35015 9.51995 1.90415 9.17795 2.24615L4.43195 6.99215C4.26095 7.16315 4.03695 7.24815 3.81295 7.24815Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p>Самовывоз</p>
            </div>
          </div>
          <div className={styles.method__el}>
            <div className={styles.method__button}></div>
            <div>
              <p>Доставка</p>
            </div>
          </div>
        </div>
      </div>

      {/* Адресс  */}
      <div className={styles.adress}>
        <div className={styles.adress__text}>
          <p>Выберите город и улицу</p>
        </div>

        <div className={styles.adress__list}>
          <div className={styles.adress__input}>
            <input type="text" className={styles.input} placeholder="Город" />
          </div>
          <div className={styles.adress__input}>
            <input type="text" className={styles.input} placeholder="Улица" />
          </div>
        </div>
      </div>

      {/* Комментарий */}
      <div class={styles.comment}>
        <div class="comment__text">
          <p>Введите коментарий к заказу</p>
        </div>
        <textarea name="" placeholder="Ваш коментарий"></textarea>
      </div>
    </div>
  );
};

export default CartPage;
