import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./features/rootReducer/reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

// export const store = configureStore({
//   reducer: persistReducer,
//   middleware,
//   devTools: process.env.NODE_ENV !== "production",
// });
