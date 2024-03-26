import { createSlice } from "@reduxjs/toolkit";
import { sortActiveFirst } from "../helpers/sortActiveFirst";

const initialState = {
  isLogged: false,
  userData: {},
  userAppointments: [{}],
  rol: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isLogged = true;
      state.rol = action.payload.rol
    },

    setUserLogout: (state, action) => {
      state.userData = {};
      state.isLogged = false;
      state.rol = ""
    },

    setAppointmentsData: (state, action) => {
      state.userAppointments = sortActiveFirst(action.payload);
    },
  },
});

export const {
  setUserData,
  setUserLogout,
  setAppointmentsData
} = userSlice.actions;
