import React, { useEffect, useState } from 'react';

import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ pathname }) => {
  const [active, setActive] = useState('Все');

  useEffect(() => {
    pathname === '/' && setActive('Все');
  }, [pathname]);

  return (
    <div className={styles.nav}>
      <div className={styles.nav__inner}>
        <div className={styles.nav__list}>
          <div
            className={
              active === 'Все'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/" onClick={() => setActive('Все')}>
                Все
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Пицца'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/pizzas" onClick={() => setActive('Пицца')}>
                Пицца
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Бургеры'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/burgers" onClick={() => setActive('Бургеры')}>
                Бургеры
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Хот-доги'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/hot-dogs" onClick={() => setActive('Хот-доги')}>
                Хот-доги
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Снэки'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/snacks" onClick={() => setActive('Снэки')}>
                Снэки
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
