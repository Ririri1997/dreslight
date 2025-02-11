import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product.slice.ts";
import cartSlice, {CART_PERSISTENT_STATE} from "./cart.slice.ts";
import { saveState } from "./storage.ts";

export const store = configureStore({
 reducer: {
  product: productSlice,
  cart: cartSlice
 }
});


store.subscribe(()=>{
 saveState({items: store.getState().cart.items}, CART_PERSISTENT_STATE);});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;