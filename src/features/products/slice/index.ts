import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressStateTypes } from "../type";
import { getAllProductAsync } from "./thunk";

const initialState: Partial<AddressStateTypes> = {
  status: "idle",
  product: [],
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProductAsync.pending.toString()]: (state) => {
      state.status = "loading";
    },
    [getAllProductAsync.fulfilled.toString()]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.status = "idle";
      state.product = action.payload;
    },
    [getAllProductAsync.rejected.toString()]: (state, action) => {
      state.status = "idle";
    },
  },
});

export default productSlice.reducer;
