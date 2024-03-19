import { NavLink } from "react-router-dom";
import "./loadAppointments.css";

const Appointments = ({ appointmentsToLoad, cancel }) => {
  return (
    <div className="cardLogin">
      <div className="card-header">
        <h2>Turnos</h2>
        <p>Por favor, verifica que los datos de tus turnos sean correctos.</p>
      </div>
      <div className="appointmentsList">
        {appointmentsToLoad.map((appointment, index) => (
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
              <button
                id={index}
                onClick={(event) => cancel(event.target.id)}
                disabled={appointment.status === "canceled"
                ? true
                : false}
              >
                Cancelar
              </button>
            </div>
          </div>
        ))}
      </div>
      <NavLink to="/" className={"atras"}>
        Atrás
      </NavLink>
    </div>
  );
};

export default Appointments;
