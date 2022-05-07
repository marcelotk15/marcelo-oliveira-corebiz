import { combineReducers, configureStore } from "@reduxjs/toolkit";

import newsletterReducer from "./Newsletter/Newsletter.store";
import productsReducer from "./Products/Products.store";
import orderFormReducer from "./OrderForm/OrderForm.store";

const reducers = combineReducers({
  newsletter: newsletterReducer,
  products: productsReducer,
  orderForm: orderFormReducer
});

const store = configureStore({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
