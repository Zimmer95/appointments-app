import React, { useEffect } from "react";
import Appointments from "../../components/loadAppointments/loadAppoitnment";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAppointmentsData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const AppointmentsView = () => {
  const isLogged = useSelector((state) => state.userReducer.isLogged);
  const userId = useSelector((state) => state.userReducer.userData.id);
  const dispatch = useDispatch();
  const appointments = useSelector(
    (state) => state.userReducer.userAppointments
  );

  const navigate = useNavigate();

  const handleGetAppointment = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/" + userId);
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
