import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// import { getItems } from './redux/itemsSlice';

import Layout from 'components/Layout';
import CartPage from 'pages/Cart';

import MainPage from 'pages/MainPage';
import { useTelegram } from 'hooks/useTelegram';
import CategoryPage from 'pages/CartgoryPage';

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
  let { items } = useSelector((state) => state.items);
  // useEffect(() => {
  //   dispatch(getItems());
  // }, [dispatch]);

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

  const categoryesData = [
    { path: '/burgers', category: 0 },
    { path: '/shaurma', category: 1 },
    { path: '/tauk', category: 2 },
    { path: '/hot-dogs', category: 3 },
    { path: '/sandwich', category: 4 },
    { path: '/firmen', category: 5 },
    { path: '/snack', category: 6 },
    { path: '/sauce', category: 7 },
    { path: '/modifiers', category: 8 },
    { path: '/coffee', category: 9 },
    { path: '/tea', category: 10 },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage items={items} />} />
          {categoryesData.map((cat) => (
            <Route
              key={cat.category}
              path={cat.path}
              element={
                <CategoryPage
                  items={items.filter((item) => item.category == cat.category)}
                />
              }
            />
          ))}
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
