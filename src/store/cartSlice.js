import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },
    incrementItem: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (!item) return;

      item.quantity += 1;
      state.total += item.price;
    },
    decrementItem: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
      }

      state.total -= item.price;
    },
    removeItem: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);
      if (!item) return;

      state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
      state.total -= item.price * item.quantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, incrementItem, decrementItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
