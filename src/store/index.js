import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

const reducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer,
});
