import HomeElement from "../../components/home/homeElement";
import Navbar from "../../components/navBar/navBar";

export default () => {
  return (
    <>
      <Navbar /* isLogged = {loginState} *//>
      <HomeElement onLoginClick={undefined} />
    </>
  );
};
