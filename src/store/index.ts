import { combineReducers, configureStore } from "@reduxjs/toolkit";

import newsletterReducer from "./Newsletter/Newsletter.store";
import productsReducer from "./Products/Products.store";

const reducers = combineReducers({
  newsletter: newsletterReducer,
  products: productsReducer
});

const store = configureStore({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
