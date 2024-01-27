import React from 'react';
import styles from './ModalWindow.module.scss';

const ModalItemModifier = () => {
  return (
    <div class={styles.modal__modifier}>
      <div class={styles.modal__modifier__text}>
        <p>Добавить дополнительно</p>
      </div>
      <div class={styles.modifier__list}>
        <div class={styles.modifier}>
          <div class={styles.modifier__title}>
            <p>Лук</p>
          </div>
          <div class="modifier__button">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12.5"
                cy="12.5"
                r="12.5"
                fill="url(#paint0_linear_15_740)"
              />
              <path
                d="M16.7261 11.227H13.7713V8.2739C13.7713 7.57112 13.2019 7 12.4991 7C11.7964 7 11.2252 7.57112 11.2252 8.2739V11.227H8.27219C7.56941 11.227 7 11.7981 7 12.5009C7 13.2036 7.56941 13.7748 8.27219 13.7748H11.2252V16.7261C11.2252 17.4289 11.7964 18 12.4991 18C13.2019 18 13.7713 17.4289 13.7713 16.7261V13.7748H16.7261C17.4289 13.7748 18 13.2036 18 12.5009C18 11.7981 17.4289 11.227 16.7261 11.227Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_15_740"
                  x1="20.4167"
                  y1="2.5"
                  x2="1.31461e-06"
                  y2="23.3333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FE5E00" />
                  <stop offset="1" stop-color="#FC9255" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class={styles.modifier}>
          <div class={styles.modifier__title}>
            <p>Сыр</p>
          </div>

          <div class="modifier__button">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12.5"
                cy="12.5"
                r="12.5"
                fill="url(#paint0_linear_15_740)"
              />
              <path
                d="M16.7261 11.227H13.7713V8.2739C13.7713 7.57112 13.2019 7 12.4991 7C11.7964 7 11.2252 7.57112 11.2252 8.2739V11.227H8.27219C7.56941 11.227 7 11.7981 7 12.5009C7 13.2036 7.56941 13.7748 8.27219 13.7748H11.2252V16.7261C11.2252 17.4289 11.7964 18 12.4991 18C13.2019 18 13.7713 17.4289 13.7713 16.7261V13.7748H16.7261C17.4289 13.7748 18 13.2036 18 12.5009C18 11.7981 17.4289 11.227 16.7261 11.227Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_15_740"
                  x1="20.4167"
                  y1="2.5"
                  x2="1.31461e-06"
                  y2="23.3333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FE5E00" />
                  <stop offset="1" stop-color="#FC9255" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalItemModifier;
