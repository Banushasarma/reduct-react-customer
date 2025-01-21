import { configureStore } from "@reduxjs/toolkit";
import customersReducer from "./slices/customerSlice";

const store = configureStore({
  reducer: {
    customers: customersReducer,
  },
  devTools: true, // Enable Redux DevTools for development
});

export { store };
