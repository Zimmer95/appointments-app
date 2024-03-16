import axios from "axios";
import Navbar from "../../components/navBar/navBar";
import Register from "../../components/register/register";
import { useNavigate } from "react-router-dom";


const RegisterView = () => {
  const navigate = useNavigate();
  const handleButtonClick = async (registerData) => {
    try {
      // Realizar la solicitud POST para agregar un nuevo turno
      const response = await axios.post(
        "http://localhost:3000/user/register",
        registerData
      );
      // Actualizar el estado de los turnos con la respuesta del servidor
      console.log("Se agregó un nuevo usuario:", response.data);
      navigate("/login")
    } catch (error) {
      console.error("Error al agregar un nuevo usuario:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Register onButtonClick={handleButtonClick} />
    </>
  );
};

export default RegisterView;
