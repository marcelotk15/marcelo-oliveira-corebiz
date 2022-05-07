import api from "@/services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ProductsState } from "./Products.types";

const INITIAL_STATE: ProductsState = {
  products: [],
  hasError: false,
  isLoading: false  
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await api.get("/products");

    return response.data;
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.hasError = false;
        state.products = payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.products = []
      })
  }
});

export default productsSlice.reducer;
