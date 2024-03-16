import { configureStore } from "@reduxjs/toolkit";/* 
import { appointmentsSlice } from "./appointmentsSlice"; */
import { userSlice } from "./userSlice";

const Store = configureStore({
  reducer: {/* appoitnmentsReducer: appointmentsSlice.reducer, */ userReducer: userSlice.reducer}
});


export {Store} ; 
