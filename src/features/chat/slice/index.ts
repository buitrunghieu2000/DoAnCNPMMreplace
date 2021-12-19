import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatStateTypes } from "../type";
import { getAllMessageAsync, getAllRoomAsync } from "./thunk";

const initialState: Partial<ChatStateTypes> = {
  status: "idle",
  message: [],
  room: [],
};

export const statisticSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMessageAsync.pending.toString()]: (state) => {
      state.status = "loading";
    },
    [getAllMessageAsync.fulfilled.toString()]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.status = "idle";
      state.message = action.payload;
    },
    [getAllMessageAsync.rejected.toString()]: (state, action) => {
      state.status = "idle";
    },

    [getAllRoomAsync.pending.toString()]: (state) => {
      state.status = "loading";
    },
    [getAllRoomAsync.fulfilled.toString()]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.status = "idle";
      state.room = action.payload;
    },
    [getAllRoomAsync.rejected.toString()]: (state, action) => {
      state.status = "idle";
    },
  },
});

export default statisticSlice.reducer;
