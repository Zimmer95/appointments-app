import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  userData: {},
  userAppointments: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.userAppointments = action.payload.appointment;
      state.isLogged = true;
    },

    unlogUser: (state, action) => {
      state.userData = {};
      state.isLogged = false;
    },

    setAppointmentsData: (state, action) => {
      state.userAppointments = action.payload;
    },
  },
});

export const { setUserData, unlogUser, setAppointmentsData } = userSlice.actions;
