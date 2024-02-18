import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  totalexpense: 0
};

const expensesSlice = createSlice({
  name: "Expense",
  initialState,
  reducers: {
    addtheexpnses: (state, action) => {
      state.value = [...state.value, ...action.payload];
    },
    Sumthenumber: (state) => {
      var total = 0;

      for (let i = 0; i < state.value.length; i++) {
        total = total + state.value[i].money;
      }
      state.totalexpense = total;
    }
  }
});

export const { addtheexpnses, deletetheexpenses, Sumthenumber } =
  expensesSlice.actions;

export default expensesSlice.reducer;
