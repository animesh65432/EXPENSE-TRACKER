import { createSlice } from "@reduxjs/toolkit";

const Expenses = createSlice({
  name: "expense",
  initialState: {
    value: [],
    flag: false
  },
  reducers: {
    updatethearray: (state, action) => {
      state.value = action.payload;
    },
    OnuserOnClick: (state, action) => {
      state.flag = !state.flag;
      console.log(state.flag);
    }
  }
});

export const { updatethearray, OnuserOnClick } = Expenses.actions;
export default Expenses.reducer;
