import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './handleCart';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
