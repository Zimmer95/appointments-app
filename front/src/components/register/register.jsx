import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage }  from "formik";
import * as Yup from "yup";
import "./register.css"

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
          email: Yup.string()
            .required("Required"),
          password: Yup.string()
            .required("Required"),
          name: Yup.string()
            .required("Required"),
          birthdate: Yup.date()
            .required("Required"),
          dni: Yup.string()
            .required("Required"),
          gender: Yup.string()
            .required("Required"),
          phoneNumber: Yup.string()
        })}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          onButtonClick(values);
          setSubmitting(false);
        }}
      >
        <Form className="">
          <div className="card-content">
            <div>
            <label htmlFor="email">Email</label>
              <div>
                <Field className="" id="email" name="email" type="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <label htmlFor="password">Contraseña</label>
              <div>
                <Field className="" id="password" name="password" type="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <label htmlFor="name">Nombre</label>
              <div>
                <Field className="" id="name" name="name" type="text" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <label htmlFor="birthdate">Fecha de nacimiento</label>
              <div>
                <Field className="" id="birthdate" name="birthdate" type="date" />
                <ErrorMessage name="birthdate" component="div" className="error" />
              </div>
              <label htmlFor="dni">Dni</label>
              <div>
                <Field className="" id="dni" name="dni" type="text" />
                <ErrorMessage name="dni" component="div" className="error" />
              </div>

              <label htmlFor="gender">Genero</label>
              <div>
                <Field
                  className=""
                  id="gender"
                  name="gender"
                  type="text"
                  component="select"
                >
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                  <option value="other">Otro</option>
                  <option value=""></option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="error"
                />
              </div>
              <label htmlFor="phoneNumber">Numero de telefono</label>
              <div>
                <Field className="" id="phoneNumber" name="phoneNumber" type="text" />
                <ErrorMessage name="phoneNumber" component="div" className="error" />
              </div>
              <button type="submit">Guardar</button>
            </div>
          </div>
        </Form>
      </Formik>
      <NavLink to="/home" className={"atras"}>Atrás</NavLink>
    </div >
  );
}

export default Register;
