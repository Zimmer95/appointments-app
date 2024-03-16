import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import "./appointmentForm.css";

const AppointmentForm = ({ onButtonClick }) => {
  
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
          durationMinutes: "",
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
          alert(JSON.stringify(values, null, 2));
          onButtonClick(values);
          setSubmitting(false);
        }}
      >
        <Form className="appointmentItem">
          <div className="tarjeta">
            <label htmlFor="date">Fecha</label>
            <div>
              <Field className="imputsForm" id="date" name="date" type="date" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>
            <label htmlFor="time">Hora</label>
            <div>
              <Field className="imputsForm" id="time" name="time" type="time" />
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
                <option value="Jorge Zimmermann">Jorge Zimmermann</option>
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
                <option value="Nombre del Médico">Nombre del Médico</option>
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
      <NavLink to="/home" className={"atras"}>
        Atrás
      </NavLink>
    </div>
  );
};

export default AppointmentForm;
