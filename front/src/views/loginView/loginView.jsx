import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppointmentsData, setUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

import Login from "../../components/login/login";

const LoginView = () => {
  const userData = useSelector((state) => state.userReducer.userData);
  const isLogged = useSelector((state) => state.userReducer.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (loginData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/validate/",
        loginData
      );

      const foundUser = response.data.foundUser;

      dispatch(setUserData(foundUser));
      dispatch(setAppointmentsData(foundUser.appointment));

      alert("El usuario " + foundUser.email + " se ha logeado correctamente.");
    } catch (error) {
      console.error("Error al intentar ingresar:", error);
      alert("Usuario o contraseña incorrectos");
    }
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged]);

  return (
    <>
      <Login onButtonClick={handleLogin} />
    </>
  );
};

export default LoginView;
