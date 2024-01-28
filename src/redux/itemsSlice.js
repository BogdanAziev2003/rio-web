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
    clearCart(state) {
      state.itemsInCart = [];
      state.totalPrice = 0;
    },
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
      const { activeItem, id } = action.payload;

      const modPrice = activeItem.modifiers.reduce((total, mod) => {
        if (mod.selected) {
          total += mod.price;
        }
        return total;
      }, 0);

      const updateItemPrice = activeItem.sizes[id].price;

      const updatedItemsInCart = state.itemsInCart.map((item) => {
        console.log(item);
        if (item.idInCart === activeItem.idInCart) {
          return {
            ...item,
            price: updateItemPrice + modPrice,
            activeSize: item.sizes.find((siz) => siz.id === id)?.title,
          };
        }
        return item;
      });

      const totalPriceDifference =
        updateItemPrice + modPrice - activeItem.price;

      return {
        ...state,
        itemsInCart: updatedItemsInCart,
        totalPrice: state.totalPrice + totalPriceDifference,
      };
    },

    addModifier(state, action) {
      const { activeItem, name, modPrice } = action.payload;

      const updatedModifiers = activeItem.modifiers.map((mod) =>
        mod.name === name ? { ...mod, selected: true } : mod
      );

      const updatedItem = {
        ...activeItem,
        modifiers: updatedModifiers,
        price: activeItem.price + modPrice,
      };

      const updatedItemsInCart = state.itemsInCart.map((item) =>
        item.idInCart === activeItem.idInCart ? updatedItem : item
      );

      return {
        ...state,
        itemsInCart: updatedItemsInCart,
        totalPrice: state.totalPrice + modPrice,
      };
    },
    removeModifier(state, action) {
      const { activeItem, name, modPrice } = action.payload;

      const updatedModifiers = activeItem.modifiers.map((mod) =>
        mod.name === name ? { ...mod, selected: undefined } : mod
      );

      const updatedItem = {
        ...activeItem,
        modifiers: updatedModifiers,
        price: activeItem.price - modPrice,
      };

      const updatedItemsInCart = state.itemsInCart.map((item) =>
        item.idInCart === activeItem.idInCart ? updatedItem : item
      );

      const updatedTotalPrice = state.totalPrice - modPrice;

      return {
        ...state,
        itemsInCart: updatedItemsInCart,
        totalPrice: updatedTotalPrice,
      };
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
} = itemsSlice.actions;

export default itemsSlice.reducer;
