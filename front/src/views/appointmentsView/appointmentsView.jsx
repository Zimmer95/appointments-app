import { useEffect, useState } from "react";
import Appointments from "../../components/loadAppointments/loadAppoitnment";
import NavBar from "../../components/navBar/navBar";
import axios from "axios";
import { useSelector } from "react-redux";

const AppointmentsView = () => {
  /* {
    isLogged ? (
      <Route path="/appointments" element={<AppointmentsView />} />
    ) : (
      <Route path="*" element={<ErrorPageView />} />
    );
  }
 */
  /* const [appointments, setAppointments] = useState([{}]); */
  const appointments = useSelector(
    (state) => state.userReducer.userAppointments
  );

  console.log(appointments + "este es el appointment");

  /*  const cancel = (id) => {
    console.log("se ha cancelado el appointment  ", id);
  };
 */

  useEffect(() => {
    /* const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/appointment/");
        const appointmentsData = response.data.appointments;
        console.log(response);
        setAppointments(appointmentsData);
        console.log("Se cargaron los appointments:", response.data);
      } catch (error) {
        console.error("Error al cargar los appointments:", error);
      }
    };
    fetchData(); */
    console.log("dentro del use effect   ", appointments);
  }, [appointments]);

  return (
    <>
      <NavBar />
      <Appointments MyAppointments={appointments} />
    </>
  );
};

export default AppointmentsView;
