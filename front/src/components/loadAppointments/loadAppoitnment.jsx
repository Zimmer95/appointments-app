import { NavLink } from "react-router-dom";
import "./loadAppointments.css"; // Importar los estilos CSS
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAppointmentsData, setUserData } from "../../redux/userSlice";
import axios from "axios";

const Appointments = ({ MyAppointments }) => {
  const dispatch = useDispatch();

  const appointment = useSelector(
    (state) => state.userReducer.userAppointments
  );

  /* const isLogged = useSelector((state) => state.user.isLogged); */

  useEffect(() => {
    const cancel = (evento) => {
      const toCancelAppointmentId = appointment[evento].id;

      const fetchData = async () => {
        try {
          const response = await axios.put(
            "http://localhost:3000/appointment/cancel/ " + toCancelAppointmentId
          );
          const nuevoArreglo = appointment.filter(
            (item, index) => item !== appointment[evento]
          );
          dispatch(setAppointmentsData(nuevoArreglo));
          alert("Se ha cancelado el turno ");
        } catch (error) {
          console.error("Error al cargar los appointments:", error);
        }
      };
      fetchData();
    };
    console.log("dentro del use effect   ", appointment);
  }, [appointment]);
  
  return (
    <div className="cardLogin">
      <div className="card-header">
        <h2>Turnos</h2>
        <p>Por favor, verifica que los datos de tus turnos sean correctos.</p>
      </div>
      <div className="appointmentsList">
        {appointment.map((appointment, index) => (
          <div key={index} className="appointmentItem">
            <div
              className={
                appointment.status === "active"
                  ? "contenedor activo"
                  : "contenedor inactivo"
              }
            >
              <div className="tarjeta">
                <strong>Fecha:</strong> <span>{appointment.date}</span> <br />
                <strong>Hora:</strong> <span>{appointment.time}</span> <br />
                <strong>Estado:</strong>{" "}
                <span>
                  {appointment.status === "active" ? "Activo" : "Cancelado"}
                </span>{" "}
                <br />
                <strong>Paciente:</strong>{" "}
                <span>{appointment.patientName}</span> <br />
                <strong>Médico:</strong> <span>{appointment.doctorName}</span>{" "}
                <br />
                <strong>Duración:</strong>{" "}
                <span>{appointment.durationMinutes}</span> <br />
                <strong>Ubicación:</strong> <span>{appointment.location}</span>{" "}
                <br />
                <strong>Notas:</strong> <br />
                <textarea
                  className="textArea"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  defaultValue={appointment.notes} // Utilizar defaultValue para establecer el contenido del textarea
                />
                <br />
              </div>
              <button id={index} onClick={(event) => cancel(event.target.id)}>
                Cancelar
              </button>
            </div>
          </div>
        ))}
      </div>
      <NavLink to="/home" className={"atras"}>
        Atrás
      </NavLink>
    </div>
  );
};

export default Appointments;
