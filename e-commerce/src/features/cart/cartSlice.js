import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cart.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      state.cart = state.cart.filter(
        (item) => !(item.id === id && item.size === size)
      );
    },
    updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      const item = state.cart.find(
        (item) => item.id === id && item.size === size
      );
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
