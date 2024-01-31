import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function useTelegram() {
  const [pathName, setPathName] = useState('/');
  useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  const { totalPrice } = useSelector((state) => state.items);

  const tg = window.Telegram.WebApp;
  tg.MainButton.textColor = '#fff';
  tg.MainButton.color = '#fe5e00';
  // tg.setHeaderColor('#f9f9f9');
  // tg.setBackgroundColor('#f9f9f9');
  // tg.enableClosingConfirmation();

  const totalPriceButton = () => {
    if (pathName !== '/cart' && totalPrice !== 0) {
      tg.MainButton.show();
      tg.MainButton.setText(`Мой заказ: ${pathName} ₽`);
    }
    if (pathName === '/cart' && totalPrice !== 0) {
      tg.MainButton.setText(`Заказать: ${pathName} ₽`);
    } else if (totalPrice === 0) {
      tg.MainButton.hide();
    }
  };

  return {
    totalPriceButton,
    tg,
  };
}
