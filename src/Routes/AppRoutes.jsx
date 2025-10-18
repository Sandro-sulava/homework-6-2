import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Impacts from "./pages/Impacts";
import Locations from "./pages/Locations";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/impacts" element={<Impacts />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
