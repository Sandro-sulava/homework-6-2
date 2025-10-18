import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const NavBar = () => {
  const activeClass = "text-blue-400";

  return (
    <div>
      <nav className=" text-[#74768F] gap-[23px] flex justify-between items-center">
        <Link to="/">
          <img src="./WaterDropLogo.svg" alt="water drops" />
        </Link>
        <NavLink
          to="/AboutUs"
          className={({ isActive }) =>
            isActive ? activeClass : "hover:text-blue-300"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) =>
            isActive ? activeClass : "hover:text-blue-300"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/Impacts"
          className={({ isActive }) =>
            isActive ? activeClass : "hover:text-blue-300"
          }
        >
          Impacts
        </NavLink>
        <NavLink
          to="/Locations"
          className={({ isActive }) =>
            isActive ? activeClass : "hover:text-blue-300"
          }
        >
          Locations
        </NavLink>
        <div
          className="flex justify-between gap-[8px]
        "
        >
          <SignIn />
          <SignUp />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

<nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
  <Link to="/">
    <img src="./WaterDropLogo.svg" alt="water drops" />
  </Link>

  <NavLink
    to="/AboutUs"
    className={({ isActive }) =>
      isActive ? activeClass : "hover:text-blue-300"
    }
  >
    About Us
  </NavLink>
  <NavLink
    to="/Projects"
    className={({ isActive }) =>
      isActive ? activeClass : "hover:text-blue-300"
    }
  >
    Projects
  </NavLink>
  <NavLink
    to="/Impacts"
    className={({ isActive }) =>
      isActive ? activeClass : "hover:text-blue-300"
    }
  >
    Impacts
  </NavLink>
  <NavLink
    to="/Locations"
    className={({ isActive }) =>
      isActive ? activeClass : "hover:text-blue-300"
    }
  >
    Locations
  </NavLink>
</nav>;
