import { createSlice } from '@reduxjs/toolkit';

const errorsSlice = createSlice({
  name: 'errors',
  initialState: {
    itemsIsFalse: true,
    phoneIsFalse: true,
    addressIsFalse: true,
  },
  reducers: {
    setItemsError(state, { payload }) {
      state.itemsIsFalse = payload;
    },
    setPhoneError(state, { payload }) {
      state.phoneIsFalse = payload;
    },
    setAddressError(state, { payload }) {
      state.phoneIsFalse = payload;
    },
  },
});

export const { setItemsError, setPhoneError, setAddressError } =
  errorsSlice.actions;

export default errorsSlice.reducer;
