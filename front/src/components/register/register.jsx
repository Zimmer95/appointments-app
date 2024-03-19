import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./register.css";

const Register = ({ onButtonClick }) => {
  return (
    <div className="cardRegister">
      <div className="card-header">
        <h2>Registro</h2>
        <p>Por favor, ingresa tus datos para registrarte.</p>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          birthdate: "",
          dni: "",
          gender: "",
          phoneNumber: ""
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("El email es obligatorio"),
          password: Yup.string().required("La contraseña es obligatoria"),
          name: Yup.string().required("El nombre es obligatorio"),
          birthdate: Yup.date().required("La fecha de nacimiento es obligatoria"),
          dni: Yup.string().required("El DNI es obligatorio"),
          gender: Yup.string().required("El género es obligatorio"),
          phoneNumber: Yup.string()
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Aquí podrías enviar los datos al backend
          onButtonClick(values);
          setSubmitting(false);
        }}
      >
        <Form className="card-content">
          <div>
            <label htmlFor="email">Email:</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="name">Nombre:</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="birthdate">Fecha de nacimiento:</label>
            <Field id="birthdate" name="birthdate" type="date" />
            <ErrorMessage name="birthdate" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="dni">DNI:</label>
            <Field id="dni" name="dni" type="text" />
            <ErrorMessage name="dni" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="gender">Género:</label>
            <Field id="gender" name="gender" as="select">
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </Field>
            <ErrorMessage name="gender" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Número de teléfono:</label>
            <Field id="phoneNumber" name="phoneNumber" type="text" />
            <ErrorMessage name="phoneNumber" component="div" className="error" />
          </div>
          <button type="submit">Guardar</button>
        </Form>
      </Formik>
      <NavLink to="/" className={"atras"}>
        Atrás
      </NavLink>
    </div>
  );
};

export default Register;
