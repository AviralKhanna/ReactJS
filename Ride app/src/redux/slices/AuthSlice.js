import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    registerUser: (state, action) => {
      state.user = action.payload; // Mock user creation
    },
  },
});

export const { login, logout, registerUser } = authSlice.actions;
export default authSlice.reducer;
