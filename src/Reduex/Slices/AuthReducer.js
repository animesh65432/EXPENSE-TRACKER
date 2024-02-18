import { createSlice } from "@reduxjs/toolkit";

const intialtokens = localStorage.getItem("token");
const IntialState = {
  tokens: intialtokens
};

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState: IntialState,
  reducers: {
    OnUserAdd: (state, action) => {
      state.tokens += action.payload;

      localStorage.setItem("token", action.payload);
    },
    OnUserDelete: (state, action) => {
      state.tokens = "";
      localStorage.removeItem("token");
    }
  }
});

export const { OnUserAdd, OnUserDelete } = AuthReducer.actions;
export default AuthReducer.reducer;
