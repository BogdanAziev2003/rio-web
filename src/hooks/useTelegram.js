import { useSelector } from 'react-redux';

export function useTelegram() {
  const { totalPrice } = useSelector((state) => state.items);

  const tg = window.Telegram.WebApp;
  tg.expand();
  tg.MainButton.textColor = '#fff';
  tg.MainButton.color = '#fe5e00';

  Telegram.WebApp.onEvent('mainButtonClicked', () => {
    if (tg.MainButton.text === `Мой заказ: ${totalPrice} ₽`)
      window.location.href = '/cart';
  });

  // BackButton setings
  if (window.location.pathname === '/') {
    tg.BackButton.hide();
  }
  if (window.location.pathname === '/') {
    tg.BackButton.hide();
  } else if (window.location.pathname === '/cart') {
    tg.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', () => {
      window.location.href = '/';
    });
  } else {
    tg.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', () => {
      window.history.back();
    });
  }

  const totalPriceButton = () => {
    if (window.location.pathname !== '/cart' && totalPrice !== 0) {
      tg.MainButton.show();
      tg.MainButton.text = `Мой заказ: ${totalPrice} ₽`;
    }
    if (window.location.pathname === '/cart' && totalPrice !== 0) {
      tg.MainButton.text = `Заказать: ${totalPrice} ₽`;
    } else if (totalPrice === 0) {
      tg.MainButton.hide();
    }
  };

  return {
    totalPriceButton,
    tg,
  };
}
