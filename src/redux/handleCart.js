import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateProductQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.items.find((item) => item.id === product.id);
      if (existingProduct) {
        if (quantity < 1) {
          state.items = state.items.filter((item) => item.id !== product.id);
        } else {
          existingProduct.quantity = quantity;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateProductQuantity } = cartSlice.actions;

export default cartSlice.reducer;
