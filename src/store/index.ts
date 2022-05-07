import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import newsletterReducer from "./Newsletter/Newsletter.store";
import productsReducer from "./Products/Products.store";
import orderFormReducer from "./OrderForm/OrderForm.store";

const reducers = combineReducers({
  newsletter: newsletterReducer,
  products: productsReducer,
  orderForm: orderFormReducer
});

const persistConfig = {
  key: "corebiz",
  storage,
  whitelist: ['orderForm']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
