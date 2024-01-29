import { createSlice } from '@reduxjs/toolkit';

const deliverySlice = createSlice({
  name: 'deliveryMethod',
  initialState: {
    delMethod: 'pickup',
    city: '',
    street: '',
  },
  reducers: {
    setDeliveryMethod(state, { payload }) {
      state.delMethod = payload;
    },
  },
});

export const { setDeliveryMethod } = deliverySlice.actions;

export default deliverySlice.reducer;
