import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginView from "./views/loginView/loginView";
import NewAppointmentView from "./views/newAppointmentView/newAppointmentView";
import HomeView from "./views/homeView/homeView";
import AppointmentsView from "./views/appointmentsView/appointmentsView";
import ErrorPageView from "./views/errorPageView/errorPageView";
import RegisterView from "./views/registerView/registerView";
import { Provider, useSelector } from "react-redux";
import { Store } from "./redux/store";

const App = () => {
  
/* 
  const isLogged = useSelector(
    (state) => state.userReducer.isLogged
  );
 */
  
  /*   const location = useLocation();
  const { pathname } = location;

  console.log(pathname);
 */
  return (
    <>
      {/* {pathname === "/home" || "/appointments" || "/newAppointment" || "/login" || "/register"? <Navbar /> : null} */}
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/home" element={<HomeView />} />
          
          <Route path="/appointments" element={<AppointmentsView />} />
          <Route path="/newAppointment" element={<NewAppointmentView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="*" element={<ErrorPageView />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
