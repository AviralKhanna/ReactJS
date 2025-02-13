import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice"; // Ensure this path is correct
import ridesReducer from "./slices/RideSlice"; // Import ridesSlice reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    rides: ridesReducer, // Add rides reducer here
  },
});

export default store;
