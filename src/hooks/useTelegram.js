import { useSelector } from 'react-redux';

export function useTelegram() {
  const { totalPrice } = useSelector((state) => state.items);

  const tg = window.Telegram.WebApp;
  tg.MainButton.textColor = '#fff';
  tg.MainButton.color = '#fe5e00';
  tg.setHeaderColor('#f9f9f9');
  tg.setBackgroundColor('#f9f9f9');

  const totalPriceButton = () => {
    if (window.location.pathname !== '/cart' && totalPrice !== 0) {
      tg.MainButton.show();
      tg.MainButton.setText(`Мой заказ: ${totalPrice} ₽`);
    }
    if (window.location.pathname === '/cart' && totalPrice !== 0) {
      tg.MainButton.setText(`Заказать: ${totalPrice} ₽`);
    } else if (totalPrice === 0) {
      tg.MainButton.hide();
    }
  };

  return {
    totalPriceButton,
    tg,
  };
}
