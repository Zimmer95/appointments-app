import axios from "axios";
import Login from "../../components/login/login";
import Navbar from "../../components/navBar/navBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginView = () => {

  const navigate = useNavigate()

  const userData = useSelector(
    (state) => state.userReducer.userData
  ); /* 
  const isLogged = useSelector((state) => state.userReducer.isLogged);
  const userAppointments = useSelector((state) => state.userReducer.userData); */

  console.log(userData);

  const dispatch = useDispatch();

  /* const [loginState, setUserData] = useState({
  }); */

  const handleButtonClick = async (loginData) => {
    try {
      // Realizar la solicitud POST para agregar un nuevo turno
      const response = await axios.post(
        "http://localhost:3000/user/validate/",
        loginData
      );

      console.log(response.data.foundUser);
      dispatch(setUserData(response.data.foundUser));
      /* dispatch(response.data.foundUser); */
      /* const appointments = useSelector( (state) => state.appointments) */
      /* console.log(appointments); */
      // Actualizar el estado de los turnos con la respuesta del servidor
      console.log("Usuario loggeado correctamente: ", response.data.foundUser);

      alert(
        "El usuario " +
          response.data.foundUser.email +
          " se a logeado correctamente: "
      );

      navigate("/")

    } catch (error) {
      console.error("Error al intentar ingresar:", error);
      alert("Usuario o contraseña incorrectos");
    }
  };

  useEffect(() => {
    console.log(userData, " 000000000000000000000000");
  }, [userData]);

  return (
    <>
      <Navbar /* isLogged = {loginState} */ />
      <Login onButtonClick={handleButtonClick} />
    </>
  );
};
export default LoginView;
