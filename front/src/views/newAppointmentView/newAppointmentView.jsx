import axios from "axios";

import AppointmentForm from "../../components/appointmentForm/appointmentForm.jsx";
import NavBar from "../../components/navBar/navBar.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setAppointmentsData } from "../../redux/userSlice.js";

const NewAppointmentsView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.userReducer.isLogged);
  const userId = useSelector((state) => state.userReducer.userData.id);
  console.log(userId);

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged]);

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    status: "active",
    userId: userId,
    patientName: "",
    doctorName: "",
    durationMinutes: "",
    location: "",
    notes: "",
  });
  const handleSubmit = async (newAppointmentData) => {
    try {
      newAppointmentData.userId = userId
      // Realizar la solicitud POST para agregar un nuevo turno
      const response = await axios.post(
        "http://localhost:3000/appointment/schedule",
        newAppointmentData
      );
      /* dispatch(setAppointmentsData(response.data.newAppointment)); */
      // Actualizar el estado de los turnos con la respuesta del servidor
      console.log("Se agregó un nuevo turno:", response.data.newAppointment.id);
    } catch (error) {
      console.error("Error al agregar un nuevo turno:", error);
    }
  };

  return (
    <>
      <NavBar />
      <AppointmentForm onButtonClick={handleSubmit} />
    </>
  );
};

export default NewAppointmentsView;
