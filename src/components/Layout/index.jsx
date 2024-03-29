import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useTelegram } from 'hooks/useTelegram';
import Header from 'components/Header';

const Layout = () => {
  const { totalPrice } = useSelector((state) => state.items);
  const navigate = useNavigate();
  const { tg } = useTelegram();

  const mainButtonClick = () => {
    if (tg.MainButton.text === `Мой заказ: ${totalPrice} ₽`) navigate('/cart');
  };
  Telegram.WebApp.onEvent('mainButtonClicked', mainButtonClick);

  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
