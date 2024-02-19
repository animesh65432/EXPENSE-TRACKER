import { createSlice } from "@reduxjs/toolkit";

const toggoleSlice = createSlice({
  name: "toggole",
  initialState: {
    value: "white"
  },
  reducers: {
    Onchangetoggole: (state, action) => {
      state.value = state.value == "white" ? "black" : "white";
    }
  }
});

export const { Onchangetoggole } = toggoleSlice.actions;
export default toggoleSlice.reducer;
