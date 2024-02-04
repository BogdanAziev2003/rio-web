import React from 'react';
import styles from './ModalWindow.module.scss';

const ModalItemModifier = ({ updateItemForCart, setUpdateItemForCart }) => {
  const handleAddModifier = (name, modPrice) => {
    const updatedModifiers = updateItemForCart.modifiers.map((mod) =>
      mod.name === name ? { ...mod, selected: true } : mod
    );
    setUpdateItemForCart({
      ...updateItemForCart,
      modifiers: updatedModifiers,
      price: updateItemForCart.price + modPrice,
    });
  };

  const handleRemoveModifier = (name, modPrice) => {
    const updatedModifiers = updateItemForCart.modifiers.map((mod) =>
      mod.name === name ? { ...mod, selected: false } : mod
    );

    setUpdateItemForCart({
      ...updateItemForCart,
      modifiers: updatedModifiers,
      price: updateItemForCart.price - modPrice,
    });
  };

  return (
    <div className={styles.modal__modifier}>
      <div className={styles.modal__modifier__text}>
        <p>Добавить дополнительно</p>
      </div>
      <div className={styles.modifier__list}>
        {updateItemForCart?.modifiers.map((mod, idx) => (
          <div key={idx} className={styles.modifier}>
            <div className={styles.modifier__title}>
              <p>
                {mod.name} {mod.price} ₽
              </p>
            </div>
            <div className="modifier__button">
              {mod.selected ? (
                <div onClick={() => handleRemoveModifier(mod.name, mod.price)}>
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
                      fill="url(#paint0_linear_1_54)"
                    />
                    <rect
                      x="7"
                      y="11"
                      width="11"
                      height="3"
                      rx="1.5"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_54"
                        x1="20.4167"
                        y1="2.5"
                        x2="1.31461e-06"
                        y2="23.3333"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FE5E00" />
                        <stop offset="1" stopColor="#FC9255" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              ) : (
                <div onClick={() => handleAddModifier(mod.name, mod.price)}>
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
                        <stop stopColor="#FE5E00" />
                        <stop offset="1" stopColor="#FC9255" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalItemModifier;
