import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';

// Pages
import MainPage from 'pages/MainPage';
import PizzaPage from 'pages/PizzaPage';
import BurgerPage from 'pages/BurgerPage';
import HotDogPage from 'pages/HotDogPage';
import SnackPage from 'pages/SnackPage';
import CartPage from 'pages/Cart';
import { useSelector } from 'react-redux';

function App() {
  const { items } = useSelector((state) => state.items);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage items={items} />} />
          <Route
            path="/burgers"
            element={
              <BurgerPage
                items={items.filter((item) => item.categories === 0)}
              />
            }
          />
          <Route
            path="/pizzas"
            element={
              <PizzaPage
                items={items.filter((item) => item.categories === 1)}
              />
            }
          />
          <Route path="/hot-dogs" element={<HotDogPage />} />
          <Route path="/snacks" element={<SnackPage />} />
          <Route path="/snacks" element={<SnackPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
