import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderStateTypes } from "../type";
import { getAllAddressAsync } from "./thunk";

const initialState: Partial<OrderStateTypes> = {
  status: "idle",
  order: {},
};

export const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    getDetailOrder: (state, action: PayloadAction<any>) => {
      state.order = action.payload;
    },
  },
  extraReducers: {},
});

export default orderSlice.reducer;
export const { getDetailOrder } = orderSlice.actions;
