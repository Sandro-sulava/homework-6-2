import NavBar from "../components/NavBar";
import AboutUs from "../pages/AboutUs";
import Projects from "../pages/Projects";
import Impacts from "../pages/Impacts";
import Locations from "../pages/Locations";
import { Route, Routes } from "react-router-dom";
import Logo from "../pages/Logo";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/impacts" element={<Impacts />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
