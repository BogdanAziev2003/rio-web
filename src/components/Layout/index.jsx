// import Footer from 'components/Footer';
import Header from 'components/Header';
import { useTelegram } from 'hooks/useTelegram';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const { totalPrice } = useSelector((state) => state.items);
  const navigate = useNavigate();
  const { totalPriceButton, tg } = useTelegram();

  const mainButtonClick = () => {
    if (tg.MainButton.text === `Мой заказ: ${totalPrice} ₽`) navigate('/cart');
  };

  Telegram.WebApp.onEvent('mainButtonClicked', mainButtonClick);

  return (
    <main>
      <div className="wrapper">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default Layout;
