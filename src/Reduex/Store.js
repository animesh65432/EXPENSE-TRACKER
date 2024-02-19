import { configureStore } from "@reduxjs/toolkit";
import AuthReucer from "./Slices/AuthReducer";
import expense from "./Slices/Expenses";
import toggolereducer from "./Slices/toggoleSlice";

export const Store = configureStore({
  reducer: {
    Auth: AuthReucer,
    Expense: expense,
    toggole: toggolereducer
  }
});
