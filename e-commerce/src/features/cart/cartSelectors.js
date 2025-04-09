export const selectCartItems = (state) => state.cart.cart;

export const selectCartTotal = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
