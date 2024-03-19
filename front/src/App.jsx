import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import "./App.css";

import Navbar from "./components/navBar/navBar";
import AboutView from "./views/about/aboutView";
import AppointmentsView from "./views/appointmentsView/appointmentsView";
import ErrorPageView from "./views/errorPageView/errorPageView";
import HomeView from "./views/homeView/homeView";
import LoginView from "./views/loginView/loginView";
import NewAppointmentView from "./views/newAppointmentView/newAppointmentView";
import RegisterView from "./views/registerView/registerView";

const App = () => {
  return (
    <Provider store={Store}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/appointments" element={<AppointmentsView />} />
          <Route path="/newAppointment" element={<NewAppointmentView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />

          {/* Ruta comodín para manejar rutas no encontradas */}
          <Route path="*" element={<ErrorPageView />} />
        </Routes>
      </>
    </Provider>
  );
};

export default App;
