import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.push(action.payload);
    },
    removeCustomer: (state, action) => {
      return state.filter((val, index) => index !== action.payload);
    },
  },
});

export const { addCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;
