import { configureStore } from "@reduxjs/toolkit";
import AuthReucer from "./Slices/AuthReducer";
import expense from "./Slices/Expenses";
import toggolereducer from "./Slices/toggoleSlice";
import usersperation from "./Slices/usersperation";

export const Store = configureStore({
  reducer: {
    Auth: AuthReucer,
    Expense: expense,
    toggole: toggolereducer,
    email: usersperation,
  },
});
