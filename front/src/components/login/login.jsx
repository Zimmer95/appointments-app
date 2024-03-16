import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import "./login.css"; // Importar los estilos CSS

const Login = ({ onButtonClick }) => {
  return (
    <div className="cardLogin">
      <div className="card-header">
        <h2>Ingreso</h2>
        <p>Por favor, ingresa tu usuario y contraseña para iniciar sesión.</p>
      </div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .min(8, "Password must be at least 8 characters"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onButtonClick(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="card-content">
          <div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                id="username"
                name="username"
                placeholder="example@example.com"
                type="email"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div>
              <div>
                <label htmlFor="password">Contraseña</label>
              </div>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="********************"
              />
              <ErrorMessage name="password" component="div" className="error" />
              <br />
              <a href="">¿Olvidó su contraseña?</a>
            </div>
            <button type="submit">Ingresar</button>
          </div>
        </Form>
      </Formik>
      <NavLink to="/home" className={"atras"}>Atrás</NavLink>
    </div>
  );
};

export default Login;
