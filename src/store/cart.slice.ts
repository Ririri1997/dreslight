import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const CART_PERSISTENT_STATE = 'cartData';

export interface CartItem {
 id: number;
 count: number;
 stock: number;
}

export interface CartState {
 items: CartItem[];
 isOpen: boolean;
 availability: boolean;
}

const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
 items: [],
 isOpen: false,
 availability: true,
};

export const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addToCart: (
   state,
   action: PayloadAction<{ id: number; stock: number}>,
  ) => {

   const { id, stock } = action.payload;

   const existingItem = state.items.find((item) => item.id === action.payload.id);
   if (existingItem) {
    if( existingItem.count < stock  ){
     existingItem.count += 1; 
    } else  {
     state.availability = false; 

    }
   } else {
    if (stock > 0) {
      state.items.push({ id, stock, count: 1 }); 
    } else {
      state.availability = false; 
    }
  }
},
  removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
   const existingItem = state.items.find(
    (item) => item.id === action.payload.id
   );
   if (existingItem) {
    if (existingItem.count !== 0) existingItem.count -= 1; // Увеличиваем количество, если товар уже в корзине
    if (existingItem.count === 0) {
     state.items = state.items.filter((item) => item.id !== action.payload.id);
    }
   }
  },
  deleteCart: (state, action: PayloadAction<{ id: number }>) => {
   const existingItem = state.items.find(
    (item) => item.id === action.payload.id
   );
   if (existingItem) {
    if (existingItem.count !== 0)  {
     state.items = state.items.filter((item) => item.id !== action.payload.id);
    }
   }
  },
  clearCart: (state) => {
   state.items = [];
  },
  toggleCart: (state) => {
    state.isOpen = !state.isOpen; // Переключить состояние корзины
  },
 },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
