import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllData = createAsyncThunk(
  "getUsers",
  async (args, { rejectWithValue }) => {
    try {
      const res = await axios("http://localhost:3000/api/login");
      return res.data;
    } catch (error) {
      return rejectWithValue("something went wrong" + error);
    }
  }
);

const getuserSlice = createSlice({
  name: "getUsers",
  initialState: {
    users: [],
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
        state.users = action.payload;
      })
      .addCase(getAllData.rejected, (state, action) => {
        state.loading = false;
        state.loading = action.payload;
      });
  },
});
export default getuserSlice.reducer;
