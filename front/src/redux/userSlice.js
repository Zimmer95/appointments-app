import { createSlice } from "@reduxjs/toolkit";
import { sortActiveFirst } from "../helpers/sortActiveFirst";

const initialState = {
  isLogged: false,
  userData: {},
  userAppointments: [{}],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isLogged = true;
    },

    setUserLogout: (state, action) => {
      state.userData = {};
      state.isLogged = false;
    },

    setAppointmentsData: (state, action) => {
      state.userAppointments = sortActiveFirst(action.payload);
    },
  },
});

export const { setUserData, setUserLogout, setAppointmentsData } = userSlice.actions;
