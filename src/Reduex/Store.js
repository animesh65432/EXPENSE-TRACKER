import { configureStore } from "@reduxjs/toolkit";
import ExpenseReducer from "./Slices/ExpensesSlices";
import AuthReucer from "./Slices/AuthReducer";

export const Store = configureStore({
  reducer: {
    expense: ExpenseReducer,
    Auth: AuthReucer
  }
});
