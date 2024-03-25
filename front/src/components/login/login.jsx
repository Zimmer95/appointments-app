import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import React from "react";
import "./login.css";

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
            .email("Dirección de correo electrónico inválida")
            .required("El correo electrónico es obligatorio"),
          password: Yup.string()
            .required("La contraseña es obligatoria")
            .min(8, "La contraseña debe tener al menos 8 caracteres"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onButtonClick(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="card-content">
            <div>
              <div>
                <label htmlFor="username">Correo Electrónico</label>
                <Field
                  id="username"
                  name="username"
                  placeholder="example@example.com"
                  type="email"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********************"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
                <br />
                <NavLink className="forgotenPass" to="/forgot-password">¿Olvidó su contraseña?</NavLink>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Ingresando..." : "Ingresar"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <NavLink to="/" className={"atras"}>
        Atrás
      </NavLink>
    </div>
  );
};

export default Login;
