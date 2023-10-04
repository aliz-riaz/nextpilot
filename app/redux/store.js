import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
import userReducer from "./features/todo/userSlice";

export const store = configureStore({
  reducer: { userReducer, todoReducer },
  devTools: process.env.NODE_ENV !== "production",
});
