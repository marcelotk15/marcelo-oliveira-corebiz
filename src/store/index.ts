import { combineReducers, configureStore } from "@reduxjs/toolkit";

import newsletterReducer from "./Newsletter/Newsletter.store";

const reducers = combineReducers({
  newsletter: newsletterReducer
});

const store = configureStore({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
