import { configureStore } from "@reduxjs/toolkit";
import GetUserSlice from "../Features/users/GetUserSlice";

export const Store = configureStore({
  reducer: { user: GetUserSlice },
});
