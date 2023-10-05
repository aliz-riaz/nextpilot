import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../todo/todoSlice";
import userReducer from "../todo/userSlice";

const rootReducer = combineReducers({
  userReducer,
  todoReducer,
});

export default rootReducer;
