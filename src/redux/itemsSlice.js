import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios';

const initialState = {
  items: [
    {
      id: 2,
      name: 'Бургер',
      category: 0,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 280, discount_price: null }],
    },
    {
      id: 3,
      name: 'Чизбургер',
      category: 0,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 330, discount_price: null }],
    },
    {
      id: 4,
      name: 'Двойной чизбургер',
      category: 0,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 390, discount_price: null }],
    },
    {
      id: 5,
      name: 'Чизбургер с яйцом',
      category: 0,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 330, discount_price: null }],
    },
    {
      id: 6,
      name: 'Чикенбургер',
      category: 0,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 290, discount_price: null }],
    },
    {
      id: 7,
      name: 'Биг-тейсти',
      category: 0,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 360, discount_price: null }],
    },
    {
      id: 8,
      name: 'Шаурма',
      category: 1,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [
        { title: 'Стандарт', price: 310, discount_price: null },
        { title: 'Экстра', price: 360, discount_price: null },
      ],
    },
    {
      id: 9,
      name: 'Шаурма на тарелке',
      category: 1,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 370, discount_price: null }],
    },
    {
      id: 10,
      name: 'Шаурма веганская',
      category: 1,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [
        { title: 'Стандарт', price: 310, discount_price: null },
        { title: 'Экстра', price: 360, discount_price: null },
      ],
    },
    {
      id: 11,
      name: 'Таук',
      category: 2,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [
        { title: 'Стандарт', price: 300, discount_price: null },
        { title: 'Экстра', price: 330, discount_price: null },
      ],
    },
    {
      id: 12,
      name: 'Таук на тарелке',
      category: 2,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 350, discount_price: null }],
    },
    {
      id: 13,
      name: 'Смешанная',
      category: 2,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [
        { title: 'Стандарт', price: 310, discount_price: null },
        { title: 'Экстра', price: 360, discount_price: null },
      ],
    },
    {
      id: 14,
      name: 'Смешанная на тарелке',
      category: 2,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 370, discount_price: null }],
    },
    {
      id: 15,
      name: 'Хот-дог',
      category: 3,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [
        { title: 'Стандарт', price: 150, discount_price: null },
        { title: 'Экстра', price: 200, discount_price: null },
      ],
    },
    {
      id: 16,
      name: 'Хот-дог в булочке',
      category: 3,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [
        { title: 'Стандарт', price: 160, discount_price: null },
        { title: 'Экстра', price: 210, discount_price: null },
      ],
    },
    {
      id: 17,
      name: 'Сэндвич куриный',
      category: 4,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 200, discount_price: null }],
    },
    {
      id: 18,
      name: 'Сэндвич говяжий',
      category: 4,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 200, discount_price: null }],
    },
    {
      id: 19,
      name: 'Сэндвич из индейки',
      category: 4,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 200, discount_price: null }],
    },
    {
      id: 20,
      name: 'Клаб говяжий',
      category: 4,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 340, discount_price: null }],
    },
    {
      id: 21,
      name: 'Клаб куриный',
      category: 4,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 320, discount_price: null }],
    },
    {
      id: 22,
      name: 'Сэндвич Германия',
      category: 5,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 300, discount_price: null }],
    },
    {
      id: 23,
      name: 'Сэндвич Италия',
      category: 5,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 300, discount_price: null }],
    },
    {
      id: 24,
      name: 'Сэндвич Америка',
      category: 5,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Халапенье', price: 30 },
        { name: 'Сыр', price: 30 },
      ],
      sizes: [{ title: 'one size', price: 300, discount_price: null }],
    },
    {
      id: 25,
      name: 'Сэндвич Чили',
      category: 5,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 300, discount_price: null }],
    },
    {
      id: 26,
      name: 'Картошка фри (100гр.)',
      category: 6,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 140, discount_price: null }],
    },
    {
      id: 27,
      name: 'Картошка по-деревенски (100гр.)',
      category: 6,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 150, discount_price: null }],
    },
    {
      id: 28,
      name: 'Наггетсы (5 шт.)',
      category: 6,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 150, discount_price: null }],
    },
    {
      id: 29,
      name: 'Луковые кольца (5 шт.)',
      category: 6,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 150, discount_price: null }],
    },
    {
      id: 30,
      name: 'Стрипсы (5 шт.)',
      category: 6,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 200, discount_price: null }],
    },
    {
      id: 31,
      name: 'Сырные шарики (5 шт.)',
      category: 6,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 150, discount_price: null }],
    },
    {
      id: 32,
      name: 'Сырный соус',
      category: 7,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 30, discount_price: null }],
    },
    {
      id: 33,
      name: 'Кетчуп',
      category: 7,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 30, discount_price: null }],
    },
    {
      id: 34,
      name: 'Фирменный соус',
      category: 7,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 30, discount_price: null }],
    },
    {
      id: 35,
      name: 'Халапеньо',
      category: 8,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 30, discount_price: null }],
    },
    {
      id: 36,
      name: 'Пири-пири',
      category: 8,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 30, discount_price: null }],
    },
    {
      id: 37,
      name: 'Американо',
      category: 9,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 80, discount_price: null }],
    },
    {
      id: 38,
      name: 'Эспрессо',
      category: 9,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [{ title: 'one size', price: 80, discount_price: null }],
    },
    {
      id: 40,
      name: 'Капучино',
      category: 9,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Сироп ванильный', price: 20 },
        { name: 'Сироп ореховый', price: 20 },
        { name: 'Сироп шоколадный', price: 20 },
        { name: 'Сироп соленая карамель', price: 20 },
        { name: 'Сироп мятный', price: 20 },
        { name: 'Сироп кокосовый', price: 20 },
      ],
      sizes: [
        { title: 'Маленький', price: 120, discount_price: null },
        { title: 'Средний', price: 140, discount_price: null },
        { title: 'Большой', price: 170, discount_price: null },
      ],
    },
    {
      id: 41,
      name: 'Латте',
      category: 9,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Сироп ванильный', price: 20 },
        { name: 'Сироп ореховый', price: 20 },
        { name: 'Сироп шоколадный', price: 20 },
        { name: 'Сироп соленая карамель', price: 20 },
        { name: 'Сироп мятный', price: 20 },
        { name: 'Сироп кокосовый', price: 20 },
      ],
      sizes: [
        { title: 'Маленький', price: 120, discount_price: null },
        { title: 'Средний', price: 140, discount_price: null },
        { title: 'Большой', price: 170, discount_price: null },
      ],
    },
    {
      id: 42,
      name: 'Моккачино',
      category: 9,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Сироп ванильный', price: 20 },
        { name: 'Сироп ореховый', price: 20 },
        { name: 'Сироп шоколадный', price: 20 },
        { name: 'Сироп соленая карамель', price: 20 },
        { name: 'Сироп мятный', price: 20 },
        { name: 'Сироп кокосовый', price: 20 },
      ],
      sizes: [
        { title: 'Маленький', price: 130, discount_price: null },
        { title: 'Средний', price: 150, discount_price: null },
        { title: 'Большой', price: 180, discount_price: null },
      ],
    },
    {
      id: 43,
      name: 'Флэт-уайт',
      category: 9,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Сироп ванильный', price: 20 },
        { name: 'Сироп ореховый', price: 20 },
        { name: 'Сироп шоколадный', price: 20 },
        { name: 'Сироп соленая карамель', price: 20 },
        { name: 'Сироп мятный', price: 20 },
        { name: 'Сироп кокосовый', price: 20 },
      ],
      sizes: [
        { title: 'Маленький', price: 160, discount_price: null },
        { title: 'Средний', price: 200, discount_price: null },
      ],
    },
    {
      id: 44,
      name: 'Раф',
      category: 9,
      image: '',
      stock: true,
      modifiers: [
        { name: 'Сироп ванильный', price: 20 },
        { name: 'Сироп ореховый', price: 20 },
        { name: 'Сироп шоколадный', price: 20 },
        { name: 'Сироп соленая карамель', price: 20 },
        { name: 'Сироп мятный', price: 20 },
        { name: 'Сироп кокосовый', price: 20 },
      ],
      sizes: [
        { title: 'Маленький', price: 150, discount_price: null },
        { title: 'Средний', price: 170, discount_price: null },
        { title: 'Большой', price: 200, discount_price: null },
      ],
    },
    {
      id: 45,
      name: 'Горячий шоколад',
      category: 9,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [
        { title: 'Маленький', price: 130, discount_price: null },
        { title: 'Средний', price: 170, discount_price: null },
        { title: 'Большой', price: 200, discount_price: null },
      ],
    },
    {
      id: 46,
      name: 'Какао',
      category: 9,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [
        { title: 'Маленький', price: 120, discount_price: null },
        { title: 'Средний', price: 140, discount_price: null },
        { title: 'Большой', price: 170, discount_price: null },
      ],
    },
    {
      id: 47,
      name: 'Чай черный',
      category: 10,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [
        { title: 'Маленький', price: 60, discount_price: null },
        { title: 'Средний', price: 70, discount_price: null },
        { title: 'Большой', price: 80, discount_price: null },
      ],
    },
    {
      id: 48,
      name: 'Чай зеленый',
      category: 10,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [
        { title: 'Маленький', price: 60, discount_price: null },
        { title: 'Средний', price: 70, discount_price: null },
        { title: 'Большой', price: 80, discount_price: null },
      ],
    },
    {
      id: 49,
      name: 'Чай горный',
      category: 10,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [
        { title: 'Маленький', price: 60, discount_price: null },
        { title: 'Средний', price: 70, discount_price: null },
        { title: 'Большой', price: 80, discount_price: null },
      ],
    },
    {
      id: 50,
      name: 'Чай мятный',
      category: 10,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [
        { title: 'Маленький', price: 60, discount_price: null },
        { title: 'Средний', price: 70, discount_price: null },
        { title: 'Большой', price: 80, discount_price: null },
      ],
    },
    {
      id: 51,
      name: 'Чай наглый фрукт',
      category: 10,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [
        { title: 'Маленький', price: 60, discount_price: null },
        { title: 'Средний', price: 70, discount_price: null },
        { title: 'Большой', price: 80, discount_price: null },
      ],
    },
    {
      id: 52,
      name: 'Чай с вареньем',
      category: 10,
      image: '',
      stock: true,
      modifiers: [null],
      sizes: [
        { title: 'Маленький', price: 70, discount_price: null },
        { title: 'Средний', price: 90, discount_price: null },
        { title: 'Большой', price: 110, discount_price: null },
      ],
    },
  ],
  itemsInCart: [],
  totalPrice: 0,
  isLoading: false,
};

export const getItems = createAsyncThunk('items/getItems', async () => {
  try {
    const { data } = await axios.get('/get-menu');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearCart(state) {
      state.itemsInCart = [];
      state.totalPrice = 0;
    },
    addItem(state, action) {
      const items = action.payload;
      state.itemsInCart.push(items);
      state.totalPrice += items.price;
    },
    removeItem(state, action) {
      const item = action.payload;
      const index = state.itemsInCart
        .reverse()
        .findIndex((i) => i.id === item.id);

      if (index !== -1) {
        const deleteItem = state.itemsInCart.splice(index, 1)[0];
        state.itemsInCart = state.itemsInCart.reverse();
        state.totalPrice -= deleteItem.price;
      }
    },
    removeItemsByCompound(state, { payload }) {
      const item = payload;
      state.itemsInCart = state.itemsInCart.filter((i) => {
        if (
          i.id === item.id &&
          i.price === item.price &&
          JSON.stringify(i.modifiers) === JSON.stringify(item.modifiers) &&
          JSON.stringify(i.sizes) === JSON.stringify(item.sizes)
        ) {
          state.totalPrice -= i.price;
          return false;
        }
        return true;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(getItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  addItem,
  removeItem,
  chooseSize,
  addModifier,
  removeModifier,
  clearCart,
  removeItemsByCompound,
} = itemsSlice.actions;

export default itemsSlice.reducer;
