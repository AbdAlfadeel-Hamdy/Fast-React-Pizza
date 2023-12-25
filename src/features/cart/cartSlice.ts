import { createSlice } from "@reduxjs/toolkit";
import { CartPizza } from "../../utils/types";

// Initial State
const initialState = {
  cart: [] as CartPizza[],
};
// Actions Types
type AddItemAction = {
  payload: CartPizza;
};
type UpdateCartAction = {
  payload: number;
};
// Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: AddItemAction) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action: UpdateCartAction) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action: UpdateCartAction) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      if (!item) return;

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action: UpdateCartAction) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      if (!item) return;

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0)
        state.cart = state.cart.filter(
          (pizza) => pizza.pizzaId !== item.pizzaId,
        );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
