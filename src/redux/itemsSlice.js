import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios';

const initialState = {
  items: [],
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
    addItem(state, action) {
      state.itemsInCart.push(action.payload);
      state.totalPrice += action.payload.sizes[0].price;
    },
    removeItem(state, action) {
      const idToDelete = state.itemsInCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (idToDelete !== -1) {
        state.itemsInCart.splice(idToDelete, 1);
      }
      state.totalPrice -= action.payload.sizes[0].price;
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

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
