import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/lib/integration/react";
import persistStore from 'redux-persist/es/persistStore';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const container = document.getElementById('root')!;
const root = createRoot(container);

const persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
