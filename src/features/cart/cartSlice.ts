import { createSlice } from "@reduxjs/toolkit";
import { CartPizza } from "../../utils/types";
import { RootState } from "../../store";

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
      const item = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload.pizzaId,
      );
      if (item) return;
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
// Action Creators
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
