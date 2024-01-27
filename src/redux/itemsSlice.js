import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      title: 'Бургер с говядиной',
      price: '200',
      categories: 0,
    },
    {
      id: 2,
      title: 'Чизбургер',
      price: '250',
      categories: 0,
    },
    {
      id: 3,
      title: 'Гамбургер',
      price: '210',
      categories: 0,
    },
    {
      id: 4,
      title: 'Пицца курицей',
      price: 300,
      categories: 1,
    },
  ],
  itemsInCart: [],
  totalPrice: 0,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
});

export default itemsSlice.reducer;
