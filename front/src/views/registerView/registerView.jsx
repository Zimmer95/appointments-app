import axios from "axios";
import React from "react";
import Register from "../../components/register/register";
import { useNavigate } from "react-router-dom";

const RegisterView = () => {
  const navigate = useNavigate();

  const handleRegister = async (registerData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/register",
        registerData
      );
      console.log("Se agregó un nuevo usuario:", response.data);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un estado de error
        console.error("Error al agregar un nuevo usuario:", error.response.data);
      } else if (error.request) {
        // No se pudo realizar la solicitud al servidor
        console.error("Error de red:", error.request);
      } else {
        // Ocurrió un error al configurar la solicitud
        console.error("Error inesperado:", error.message);
      }
    }
  };

  return (
    <>
      <Register onButtonClick={handleRegister} />
    </>
  );
};

export default RegisterView;
