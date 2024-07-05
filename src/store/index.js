import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
})

export const uiSliceAction = uiSlice.actions;
export const cartSliceAction  = cartSlice.actions;
export default store;