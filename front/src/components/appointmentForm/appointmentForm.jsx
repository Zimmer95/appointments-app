import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import "./appointmentForm.css";
import { useSelector } from "react-redux";

const AppointmentForm = ({ onButtonClick }) => {
  const userName = useSelector((state) => state.userReducer.userData.name);

  // Obtener la fecha actual
  const currentDate = new Date();

  // Calcular la fecha límite permitida (por ejemplo, 7 días hábiles después de la fecha actual)
  const daysToWait = 14; // Puedes ajustar este valor según tus necesidades
  let businessDaysCounter = 0;
  let currentDateCopy = new Date(currentDate.getTime());
  while (businessDaysCounter < daysToWait) {
    currentDateCopy.setDate(currentDateCopy.getDate() + 1);
    const dayOfWeek = currentDateCopy.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      businessDaysCounter++;
    }
  }
  const maxDate = currentDateCopy.toISOString().split("T")[0]; // Formato YYYY-MM-DD

  return (
    <div className="cardLogin">
      <div className="card-header">
        <h2>Agendar turno</h2>
        <p>Por favor, completa tus datos para agendar un nuevo turno.</p>
      </div>
      <Formik
        initialValues={{
          date: "",
          time: "",
          status: "active",
          patientName: "",
          doctorName: "",
          durationMinutes: "30",
          location: "",
          notes: "",
        }}
        validationSchema={Yup.object({
          date: Yup.string().required(
            "Debes completar el campo con la fecha de la cita"
          ),
          time: Yup.string().required("Required"),
          patientName: Yup.string().required("Required"),
          doctorName: Yup.string().required("Required"),
          durationMinutes: Yup.number()
            .required("Required")
            .positive("Duration must be positive")
            .integer("Duration must be an integer"),
          location: Yup.string().required("Required"),
          notes: Yup.string(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          onButtonClick(values);
          setSubmitting(false);
        }}
      >
        <Form className="appointmentItem">
          <div className="tarjeta">
            <label htmlFor="date">Fecha</label>
            <div>
              <Field
                className="imputsForm"
                id="date"
                name="date"
                type="date"
                min={currentDate.toISOString().split("T")[0]} // Deshabilitar fechas anteriores a hoy
                max={maxDate} // Establecer la fecha máxima permitida
              />
              <ErrorMessage name="date" component="div" className="error" />
            </div>
            <label htmlFor="time">Hora</label>
            <div>
              <Field
                className="selectForm"
                id="time"
                name="time"
                component="select"
              >
                <option value="" disabled hidden>
                  Selecciona un horario
                </option>
                <option value="08:00">08:00 AM</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 AM</option>
                <option value="13:00" disabled>
                  13:00 PM
                </option>
                <option value="14:00" disabled>
                  14:00 PM
                </option>
                <option value="15:00" disabled>
                  15:00 PM
                </option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
                <option value="19:00">07:00 PM</option>
                <option value="20:00">08:00 PM</option>
              </Field>
              <ErrorMessage name="time" component="div" className="error" />
            </div>
            <label htmlFor="patientName">Nombre del Paciente</label>
            <div>
              <Field
                className="selectForm"
                id="patientName"
                name="patientName"
                type="text"
                component="select"
              >
                <option value={userName}>{userName}</option>
                <option value=""></option>
              </Field>
              <ErrorMessage
                name="patientName"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="doctorName">Nombre del Médico</label>
              <Field
                className="selectForm"
                id="doctorName"
                name="doctorName"
                type="text"
                component="select"
              >
                <option value="Dr. Algo">Dr. Algo</option>
                <option value=""></option>
              </Field>
              <ErrorMessage
                name="patientName"
                component="div"
                className="error"
              />
            </div>

            <label htmlFor="durationMinutes">Duración en Minutos</label>
            <div>
              <Field
                className="imputsForm"
                id="durationMinutes"
                name="durationMinutes"
                type="number"
                disabled
              />
              <ErrorMessage
                name="durationMinutes"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="location">Ubicación</label>
              <Field
                className="selectForm"
                id="location"
                name="location"
                type="text"
                component="select"
              >
                <option value="SALA A2">SALA A2</option>
                <option value="SALA A7">SALA A7</option>
                <option value="SALA B4">SALA B4</option>
                <option value=""></option>
              </Field>
              <ErrorMessage name="location" component="div" className="error" />
            </div>

            <label htmlFor="notes">Notas</label>
            <div>
              <Field
                className="textArea"
                id="notes"
                name="notes"
                component="textarea"
              />
              <ErrorMessage name="notes" component="div" className="error" />
            </div>
            <button type="submit">Guardar</button>
          </div>
        </Form>
      </Formik>
      <NavLink to="/" className={"atras"}>
        Atrás
      </NavLink>
    </div>
  );
};

export default AppointmentForm;
