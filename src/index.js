import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import items from './redux/itemsSlice';
import phone from './redux/phoneSlice';
import paymethod from './redux/paymentMethod';

const store = configureStore({
  reducer: {
    items,
    phone,
    paymethod,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
