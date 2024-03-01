import { createSlice } from "@reduxjs/toolkit";

const usersperation = createSlice({
  name: "useremail",
  initialState: {
    value: "",
  },
  reducers: {
    setuseremail: (state, action) => {
      let res = action.payload;
      let emailarray = res.split(".");
      let res_email = emailarray[0] + emailarray[1];
      state.value = res_email;
    },

    deleteemail: (state, action) => {
      state.value = "";
    },
  },
});

export const { setuseremail, deleteemail } = usersperation.actions;
export default usersperation.reducer;
