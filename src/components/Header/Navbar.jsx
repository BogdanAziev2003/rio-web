import React, { useEffect, useState } from 'react';

import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ pathname }) => {
  const [active, setActive] = useState(`${pathname}`);

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
              active === '/burgers'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/burgers" onClick={() => setActive('/burgers')}>
                Бургеры
              </Link>
            </p>
          </div>
          <div
            className={
              active === '/shaurma'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/shaurma" onClick={() => setActive('/shaurma')}>
                Шаурма
              </Link>
            </p>
          </div>
          <div
            className={
              active === '/tauk'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/tauk" onClick={() => setActive('/tauk')}>
                Тауки
              </Link>
            </p>
          </div>
          <div
            className={
              active === '/hot-dogs'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/hot-dogs" onClick={() => setActive('/hot-dogs')}>
                Хот-Доги
              </Link>
            </p>
          </div>
          <div
            className={
              active === '/sandwich'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/sandwich" onClick={() => setActive('/sandwich')}>
                Сэндвичи
              </Link>
            </p>
          </div>
          <div
            className={
              active === '/firmen'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/firmen" onClick={() => setActive('/firmen')}>
                Фирменые
              </Link>
            </p>
          </div>
          <div
            className={
              active === '/snack'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/snack" onClick={() => setActive('/snack')}>
                Снэки
              </Link>
            </p>
          </div>
          <div
            className={
              active === '/sauce'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/sauce" onClick={() => setActive('/sauce')}>
                Соусы
              </Link>
            </p>
          </div>
          <div
            className={
              active === '/coffee'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/coffee" onClick={() => setActive('/coffee')}>
                Кофе
              </Link>
            </p>
          </div>
          <div
            className={
              active === 'tea'
                ? `${styles.nav__el} ${styles.nav__el_active}`
                : styles.nav__el
            }
          >
            <p>
              <Link to="/tea" onClick={() => setActive('tea')}>
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
