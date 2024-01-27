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
              active === 'Шаурма'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/shaurma" onClick={() => setActive('Шаурма')}>
                Шаурма
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Тауки'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/tauk" onClick={() => setActive('Тауки')}>
                Тауки
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Хот-Доги'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/hot-dogs" onClick={() => setActive('Хот-Доги')}>
                Хот-Доги
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Сэндвичи'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/sandwich" onClick={() => setActive('Сэндвичи')}>
                Сэндвичи
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Фирменые'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/firmen" onClick={() => setActive('Фирменые')}>
                Фирменые
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
              <Link to="/snack" onClick={() => setActive('Снэки')}>
                Снэки
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Соусы'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/sauce" onClick={() => setActive('Соусы')}>
                Соусы
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Кофе'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/coffee" onClick={() => setActive('Кофе')}>
                Кофе
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'Чаи'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/tea" onClick={() => setActive('Чаи')}>
                Чаи
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
