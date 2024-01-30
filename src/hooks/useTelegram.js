import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';

export function useTelegram() {
  const { totalPrice } = useSelector((state) => state.items);

  const tg = window.Telegram.WebApp;
  tg.expand();
  tg.MainButton.textColor = '#fff';
  tg.MainButton.color = '#fe5e00';

  //   const mainButtonClick = () => {
  //     if (tg.MainButton.text === `Мой заказ: ${totalPrice} ₽`) redirect('/cart');
  //   };

  Telegram.WebApp.onEvent('mainButtonClicked', () => {
    redirect('/cart');
  });

  const totalPriceButton = () => {
    if (window.location.pathname !== '/cart' && totalPrice !== 0) {
      tg.MainButton.show();
      tg.MainButton.setText(`Мой заказ: ${totalPrice} ₽`);
    }
    if (window.location.pathname === '/cart' && totalPrice !== 0) {
      tg.MainButton.setText('`Заказать: ${totalPrice} ₽`');
    } else if (totalPrice === 0) {
      tg.MainButton.hide();
    }
  };

  return {
    totalPriceButton,
    tg,
  };
}
