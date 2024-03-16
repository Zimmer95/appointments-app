import { useSelector } from "react-redux";
import "./navBar.css";
import { NavLink } from "react-router-dom";

function Navbar(/* { isLogged } */) {

  const isLogged = useSelector(
    (state) => state.userReducer.isLogged
  );


  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink to="/">
            <span>Inicio</span>
          </NavLink>
        </li>
        <li className={isLogged ? "" : "hide"}>
          <NavLink to="/appointments">
            <span>Turnos</span>
          </NavLink>
        </li>
        <li className={isLogged ? "show" : "hide"}>
          <NavLink to="/newAppointment">
            <span>Agendar</span>
          </NavLink>
        </li>
        <li className={!isLogged ? "" : "hide"}>
          <NavLink to="/login">
            <span>Ingresar</span>
          </NavLink>
        </li>
        <li className={!isLogged ? "" : "hide"}>
          <NavLink to="/register">
            <span>Registrarse</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
