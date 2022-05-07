import { createSlice } from "@reduxjs/toolkit";
import { OrderFormState } from "./OrderForm.types";

const INITIAL_STATE: OrderFormState = {
  items: [],
  totalPrice: 0
};

const orderFormSlice = createSlice({
  name: "orderForm",
  initialState: INITIAL_STATE,
  reducers: {
    orderFormAdd: (state, { payload }) => {
      if (!state.items.length)
        state.items = [{ ...payload, quantity: 1 }];
      else if (state.items.find((item) => item.productId === payload.productId)) {
        const index = state.items.findIndex((item) => item.productId === payload.productId);

        state.items[index].quantity += 1;
      } else {
        state.items = [...state.items, { ...payload, quantity: 1 }];
      }

      state.totalPrice = state.items.reduce((acc, act) => acc + (act.price * act.quantity), 0);
    },

    orderFormRemoveProduct: (state, { payload }) => {
      state.items = state.items.filter((product) => product.productId !== payload);
      state.totalPrice = state.items.reduce((acc, act) => acc + (act.price * act.quantity), 0);
    },

    orderFormIncrementProduct: (state, { payload }) => {
      state.items[payload].quantity += 1;
      state.totalPrice = state.items.reduce((acc, act) => acc + (act.price * act.quantity), 0);
    },

    orderFormDecrementProduct: (state, { payload }) => {
      if (state.items[payload].quantity - 1 === 0)
        state.items = state.items.filter((product) => product !== state.items[payload]);
      else 
        state.items[payload].quantity -= 1;
      
      state.totalPrice = state.items.reduce((acc, act) => acc + (act.price * act.quantity), 0);
    },
  }
});

export const {
  orderFormAdd,
  orderFormRemoveProduct,
  orderFormIncrementProduct,
  orderFormDecrementProduct
} = orderFormSlice.actions;
export default orderFormSlice.reducer;
