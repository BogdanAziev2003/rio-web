import { useSelector } from 'react-redux';

export function useTelegram() {
  const { totalPrice } = useSelector((state) => state.items);

  const tg = window.Telegram.WebApp;
  tg.MainButton.textColor = '#fff';
  tg.MainButton.color = '#fe5e00';
  //   try {
  //     tg.backgroundColor = '#f9f9f9';
  //     tg.headerColor = '#f9f9f9';
  //   } catch (error) {}
  tg.setHeaderColor('#f00');

  console.log(tg.SettingsButton);

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
