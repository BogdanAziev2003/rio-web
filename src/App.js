import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getItems } from './redux/itemsSlice';

import Layout from 'components/Layout';
import CartPage from 'pages/Cart';

import MainPage from 'pages/MainPage';
import BurgerPage from 'pages/BurgerPage';
import ShaurmaPage from 'pages/ShaurmaPage';
import TaukPage from 'pages/TaukPage';
import SandwichPage from 'pages/SandwichPage';
import FirmenPage from 'pages/FirmenPage';
import SnackPage from 'pages/SnackPage';
import SaucePage from 'pages/SaucePage';
import TeaPage from 'pages/TeaPage';
import CoffePage from 'pages/CoffePage';
import HotdogPage from 'pages/HotDogPage';
import { useTelegram } from 'hooks/useTelegram';

function App() {
  const { totalPrice } = useSelector((state) => state.items);
  // useTelegram setings //
  const { totalPriceButton, tg } = useTelegram();
  useEffect(() => {
    tg.ready();
    tg.expand();
    tg.viewportChanged = {
      isStateStable: true,
    };
  }, []);
  useEffect(() => {
    totalPriceButton();
  }, [totalPrice, window.location.pathname]);

  useEffect(() => {
    Telegram.WebApp.onEvent('mainButtonClicked', () => {
      ('/cart');
    });
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  let { items } = useSelector((state) => state.items);

  items = items.map((item) => {
    let minPrice = item.sizes[0].price;
    for (let i = 1; i < item.sizes.length; i++) {
      if (item.sizes[i].price < minPrice) {
        minPrice = item.sizes[i].price;
      }
    }
    return {
      ...item,
      price: minPrice,
    };
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage items={items} />} />
          <Route
            path="/burgers"
            element={
              <BurgerPage items={items.filter((item) => item.category === 0)} />
            }
          />
          <Route
            path="/shaurma"
            element={
              <ShaurmaPage
                items={items.filter((item) => item.category === 1)}
              />
            }
          />
          <Route
            path="/tauk"
            element={
              <TaukPage items={items.filter((item) => item.category === 2)} />
            }
          />
          <Route
            path="/hot-dogs"
            element={
              <HotdogPage items={items.filter((item) => item.category === 3)} />
            }
          />
          <Route
            path="/sandwich"
            element={
              <SandwichPage
                items={items.filter((item) => item.category === 4)}
              />
            }
          />
          <Route
            path="/firmen"
            element={
              <FirmenPage items={items.filter((item) => item.category === 5)} />
            }
          />
          <Route
            path="/snack"
            element={
              <SnackPage items={items.filter((item) => item.category === 6)} />
            }
          />
          <Route
            path="/sauce"
            element={
              <SaucePage items={items.filter((item) => item.category === 7)} />
            }
          />
          <Route
            path="/coffee"
            element={
              <CoffePage items={items.filter((item) => item.category === 9)} />
            }
          />
          <Route
            path="/tea"
            element={
              <TeaPage items={items.filter((item) => item.category === 10)} />
            }
          />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
