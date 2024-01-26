import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';

// Pages
import MainPage from 'pages/MainPage';
import PizzaPage from 'pages/PizzaPage';
import BurgerPage from 'pages/BurgerPage';
import HotDogPage from 'pages/HotDogPage';
import SnackPage from 'pages/SnackPage';
import CartPage from 'pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/pizzas" element={<PizzaPage />} />
          <Route path="/burgers" element={<BurgerPage />} />
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
