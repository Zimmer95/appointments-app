import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "../../components/appointmentForm/appointmentForm.jsx";
import { setAppointmentsData } from "../../redux/userSlice.js";

const NewAppointmentsView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.userReducer.isLogged);
  const userId = useSelector((state) => state.userReducer.userData.id);
  const appointments = useSelector(
    (state) => state.userReducer.userAppointments
  );

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    status: "active",
    patientName: "",
    doctorName: "",
    durationMinutes: "",
    location: "",
    notes: "",
  });

  const handleNewAppointment = async (newAppointmentData) => {
    if (window.confirm("¿Estás seguro de que quieres continuar?")) {
      try {
        newAppointmentData.userId = userId;
        const response = await axios.post(
          "http://localhost:3000/appointment/schedule",
          newAppointmentData
        );
        dispatch(
          setAppointmentsData([...appointments, response.data.newAppointment])
        );
        alert(
          "Se agregó un nuevo turno:\nFecha: " +
            response.data.newAppointment.date +
            "\nHora: " +
            response.data.newAppointment.time
        );
        navigate("/appointments");
      } catch (error) {
        console.error("Error al agregar un nuevo turno:", error);
      }
    }
  };

  return (
    <>
      <AppointmentForm onButtonClick={handleNewAppointment} />
    </>
  );
};

export default NewAppointmentsView;
