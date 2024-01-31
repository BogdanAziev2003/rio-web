import { createSlice } from '@reduxjs/toolkit';

const deliverySlice = createSlice({
  name: 'deliveryMethod',
  initialState: {
    delMethod: 'delivery',
    address: '',
  },
  reducers: {
    setDeliveryMethod(state, { payload }) {
      state.delMethod = payload;
    },
    setAddress(state, { payload }) {
      state.address = payload;
    },
  },
});

export const { setDeliveryMethod, setAddress } = deliverySlice.actions;

export default deliverySlice.reducer;
