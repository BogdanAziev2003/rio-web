import { createSlice } from '@reduxjs/toolkit';

const deliveryMethodSlice = createSlice({
  name: 'deliveryMethod',
  initialState: {
    delMethod: 'pickup',
  },
  reducers: {
    setDeliveryMethod(state, { payload }) {
      state.delMethod = payload;
    },
  },
});

export const { setDeliveryMethod } = deliveryMethodSlice.actions;

export default deliveryMethodSlice.reducer;
