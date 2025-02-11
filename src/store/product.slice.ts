import {createSlice, createAsyncThunk, PayloadAction  } from "@reduxjs/toolkit";
import {SortType} from "../components/Sorting/Sort.props";


export const fetchProducts = createAsyncThunk(
 "product/fetchProducts",
 async () => {
   const response = await fetch("http://localhost:5000/products");
   if (!response.ok) {
     throw new Error("Failed to fetch products");
   }
   const data = await response.json();
   return data;
 }
);


export interface ProductItem{
 id: number;
 name: string;
 price: number;
 image: string;
 count: number;
 stock: number;
}

export interface productState{
 items: ProductItem[];
 loading: boolean;
 error: string | null;
 searchQuery: string;
 sortQuery: SortType;
}

const initialState:productState = {
 items: [],
 loading: false,
 error: null,
 searchQuery: '', // Изначально поисковый запрос пуст
 sortQuery: "lowest",
};
 

export const productSlice = createSlice({
 name: 'product',
 initialState,
 reducers: {
  setSearchQuery: (state, action: PayloadAction<string>) => {
    state.searchQuery = action.payload; // Устанавливаем поисковый запрос
  },
  setSortQuery: (state, action: PayloadAction<SortType>) => {
    state.sortQuery = action.payload; // Устанавливаем поисковый запрос
  },
 },
  extraReducers: (builder) => {
   builder
     .addCase(fetchProducts.pending, (state) => {
       state.loading = true;
       state.error = null;
     })
     .addCase(fetchProducts.fulfilled, (state, action) => {
       state.items = action.payload;
       state.loading = false;
     })
     .addCase(fetchProducts.rejected, (state, action) => {
       state.loading = false;
       state.error = action.error.message || "Error loading products";
     });
 },
});

export default productSlice.reducer;

export const productActions = productSlice.actions;