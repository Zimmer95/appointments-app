/* import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments = state.appointments.concat(action.payload);
    },
    cancelAppointment: (state, action) => {
      state.appointments = state.appointments.filter((appointment)=> appointment.id !== action.payload)
    },
  },
});

export const { addAppointment, cancelAppointment } = appointmentsSlice.actions;
 */