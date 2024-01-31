import { createSlice } from '@reduxjs/toolkit';

const errorsSlice = createSlice({
  name: 'errors',
  initialState: {
    itemsIsFalse: true,
    phoneIsFalse: true,
    addressIsFalse: true,
  },
});
