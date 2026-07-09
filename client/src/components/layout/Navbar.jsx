import "./Navbar.css";
import { NavLink } from "react-router-dom";

/**
 * Displays the website navigation bar.
 *
 * @returns {JSX.Element}
 */
function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <NavLink
          to="/"
          className="logo"
        >
          UniCore
        </NavLink>

        <nav className="nav-menu">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>

        <NavLink
          to="/login"
          className="navbar-btn"
        >
          Get Started
        </NavLink>

      </div>

    </header>
  );
}

export default Navbar;