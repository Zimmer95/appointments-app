import React, { useEffect } from "react";
import Appointments from "../../components/loadAppointments/loadAppoitnment";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAppointmentsData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const AppointmentsView = () => {
  
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userReducer);
  const isLogged = data.isLogged;
  const userId = data.userData.id;
  const appointments = data.userAppointments


  console.log(data, "___________DATA");
  console.log(isLogged, "___________isLogged");
  console.log(userId, "___________userId");
  console.log(appointments, "___________appointments");

  const navigate = useNavigate();

  const handleGetAppointment = async () => {
    try {
      
      const response = await axios.get("http://localhost:3000/patient/" + userId);
      const updateAppointments = response.data.foundUser.appointment.reverse();
      dispatch(setAppointmentsData(updateAppointments));
    } catch (error) {
      console.error("Error al cargar los appointments:", error);
    }
  };

  const handleCancel = async (evento) => {
    if (window.confirm("¿Estás seguro de que quieres continuar?")) {
      const toCancelAppointmentId = appointments[evento].id;
      try {
        await axios.put(
          "http://localhost:3000/appointment/cancel/" + toCancelAppointmentId
        );
        handleGetAppointment();
        alert("Se ha cancelado el turno ");
      } catch (error) {
        console.error("Error al cancelar el turno:", error);
      }
    }
  };

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    } else {
      handleGetAppointment();
    }
  }, [isLogged, navigate]);

  return (
    <>
      <Appointments appointmentsToLoad = {appointments} cancel={handleCancel} />
    </>
  );
};

export default AppointmentsView;
