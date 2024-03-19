import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

const Store = configureStore({
  reducer: { userReducer: userSlice.reducer },
});

export { Store };
