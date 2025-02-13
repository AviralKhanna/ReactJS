import { createSlice } from "@reduxjs/toolkit";

// Load stored rides from localStorage
const loadRidesFromStorage = () => {
  const storedRides = localStorage.getItem("rides");
  return storedRides ? JSON.parse(storedRides) : [];
};

const initialState = {
  list: loadRidesFromStorage(), // Load stored rides
};

const ridesSlice = createSlice({
  name: "rides",
  initialState,
  reducers: {
    addRide: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("rides", JSON.stringify(state.list)); // Save to localStorage
    },
  },
});

export const { addRide } = ridesSlice.actions;
export default ridesSlice.reducer;
