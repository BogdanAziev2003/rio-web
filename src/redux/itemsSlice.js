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
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action) {
      const index = state.itemsInCart.findIndex(
        (item) => item.idInCart === action.payload
      );

      if (index !== -1) {
        const deleteItem = state.itemsInCart.splice(index, 1)[0];
        state.totalPrice -= deleteItem.price;
      }
    },
    chooseSize(state, action) {
      const activeItem = action.payload.activeItem;
      const id = action.payload.id;

      const updateItemPrice = activeItem.sizes[id].price;

      state.itemsInCart = state.itemsInCart.map((item) => {
        if (item.idInCart === activeItem.idInCart) {
          state.totalPrice -= activeItem.price;
          state.totalPrice += updateItemPrice;
          return {
            ...activeItem,
            price: updateItemPrice,
          };
        }
        return item;
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

export const { addItem, removeItem, chooseSize } = itemsSlice.actions;

export default itemsSlice.reducer;
