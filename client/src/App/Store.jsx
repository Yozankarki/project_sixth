import { configureStore } from "@reduxjs/toolkit";
import GetRoomSlice from "../Features/rooms/getRoomSlice";

export const Store = configureStore({
  reducer: { app: GetRoomSlice },
});
