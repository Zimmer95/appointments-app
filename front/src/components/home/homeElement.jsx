import logoAgenda from "../../assets/hosp.png";
import "./homeElement.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const HomeElement = () => {
  const isLogged = useSelector((state) => state.userReducer.isLogged);

  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsPopoverVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverVisible(false);
  };

  return (
    <div id="home">
      <div>
        <NavLink
          className="popover-container navlink"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          to="/about"
        >
          <img
            src={logoAgenda}
            className="logo react popover-trigger"
            alt="Logo del centro de atención primaria"
          />
          {isPopoverVisible && (
            <div className="popover-content">Mas informacion</div>
          )}
        </NavLink>
      </div>
      <h1>Centro de Atención Primaria de la Salud</h1>
      <div className="card">
        <button className="button">
          <NavLink to={isLogged ? "/newAppointment" : "/login"}>
            {isLogged ? "Agendar turno" : "Iniciar sesión"}
          </NavLink>
        </button>
      </div>
      <p>Ingrese o cree una nueva cuenta para agendar turnos</p>
    </div>
  );
};

export default HomeElement;
