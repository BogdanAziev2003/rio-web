import { createSlice } from '@reduxjs/toolkit';

const deliverySlice = createSlice({
  name: 'deliveryMethod',
  initialState: {
    delMethod: 'delivery',
    address: '',
    delPrice: 0,
  },
  reducers: {
    setDeliveryMethod(state, { payload }) {
      state.delMethod = payload;
    },
    setAddress(state, { payload }) {
      state.address = payload;
    },
    setDelPrice(state, { payload }) {
      state.delPrice = payload;
    },
  },
});

export const { setDeliveryMethod, setAddress, setDelPrice } =
  deliverySlice.actions;

export default deliverySlice.reducer;
