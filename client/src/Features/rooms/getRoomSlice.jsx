import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
export const getAllData = createAsyncThunk(
  "getUsers",
  async (args, { rejectWithValue }) => {
    try {
      const response = await axios("http://localhost:3000/room/allrooms");
      return response.data;
    } catch (error) {
      return rejectWithValue("something went wrong" + error);
    }
  }
);

const getRoomSlice = createSlice({
  name: "getRooms",
  initialState: {
    rooms: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.loading = false;
        state.rooms = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default getRoomSlice.reducer;
