import { NavLink } from "react-router-dom";
import logoAgenda from "../../assets/hosp.png";
import "./homeElement.css";
import { useSelector } from "react-redux";

const HomeElement = () => {

  const isLogged = useSelector(
    (state) => state.userReducer.isLogged
  );


  return (
    <div id="home">
      <div>
        <img src={logoAgenda} className="logo react" alt="foto perfil" />
      </div>
      <h1>Centro de Atención Primaria de la Salud</h1>
      <div className="card">
      
        <button className={isLogged ? "button" : "hide"} disabled={false}  /* onClick={} */>
          
          <NavLink to="/newAppointment">Agendar turno</NavLink>
        </button>
        <button className={!isLogged ? "button" : "hide"} disabled={false}  /* onClick={} */>
          
        <NavLink to="/login">iniciar sesion</NavLink>
        </button>
      </div>
      <p>Ingrese o cree una nueva cuenta para agendar turnos</p>
    </div>
  );
};

export default HomeElement;
