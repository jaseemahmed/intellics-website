import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/Header/HeaderSlice";

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: false,
    }),
});
