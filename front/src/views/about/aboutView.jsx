import React from "react";
import { NavLink } from "react-router-dom";
import "./aboutView.css";

const AboutView = () => {
  return (
    <div className="about-container">
      <div className="cardAbout">
        <div className="card-header">
          <h2>Centros de Atención Primaria de la Salud</h2>
          <h3>Ejes en la prevención y contención. </h3>
          <div className="card-content">
            <p>
              Proveen un tratamiento integral de la salud con equipos
              interdisciplinarios a disposición de todos los vecinos. Los
              Centros de Atención Primaria de la Salud desarrollan actividades
              de prevención y promoción de la salud en los distintos barrios de
              la ciudad.
            </p>
            <p>
              En cada CAPS hay equipos interdisciplinarios: médicos clínicos,
              generalistas, pediatras, nutricionistas, odontólogos, psicólogos,
              enfermeras, trabajadores sociales, entre otros. También se
              realizan análisis clínicos simples como así también en algunos
              casos específicos se hacen estudios radiológicos y además son
              centros de vacunación.
            </p>
          </div>
        </div>
        <div className="appointmentsList"></div>
        <NavLink to="/" className="atras">
          Atrás
        </NavLink>
      </div>
    </div>
  );
};

export default AboutView;
