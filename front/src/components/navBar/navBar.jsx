import "./navBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserLogout } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const isLogged = useSelector((state) => state.userReducer.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoggout = () => {
    if (confirm("¿Estás seguro de que quieres continuar?")) {
      dispatch(setUserLogout());
    } else {
      navigate("/");
    }
  };

  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink to="/">
            <span>INICIO</span>
          </NavLink>
        </li>
        <li className={!isLogged ? "" : "hide"}>
          <NavLink to="/about">
            <span>CAPS</span>
          </NavLink>
        </li>
        <li className={isLogged ? "" : "hide"}>
          <NavLink to="/appointments">
            <span>TURNOS</span>
          </NavLink>
        </li>
        <li className={isLogged ? "show" : "hide"}>
          <NavLink to="/newAppointment">
            <span>AGENDAR</span>
          </NavLink>
        </li>
        <li className={!isLogged ? "" : "hide"}>
          <NavLink to="/login">
            <span>INGRESAR</span>
          </NavLink>
        </li>
        <li className={!isLogged ? "sep" : "hide"}></li>
        <li className={!isLogged ? "" : "hide m10"}>
          <NavLink to="/register">
            <span className="m10">REGISTRARSE</span>
          </NavLink>
        </li>
        <li className={isLogged ? "" : "hide"}>
          <NavLink>
            <button className="btnSalir" onClick={handleLoggout}>
              <span>SALIR</span>
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
