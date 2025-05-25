import { NavLink } from "react-router-dom";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import Mylogo from '../assets/images/mylogo.png'

const Header = () => {
  const [btn, setBtn] = useState(true);

  const navButton = () => {
    setBtn(!btn);
  };

  // New function to handle NavLink clicks
  const handleNavLinkClick = () => {
    if (!btn) {
      navButton(); // Close the menu if it's open
    }
  };

  return (
    <>
      <header className="header_wrapper">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <div className="container">
            <a className="navbar-brand" to="/">
              {/* Dakshata */}
              <img src={Mylogo} alt="" height={"55px"} width={"180px"} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span onClick={navButton} className="nav_button">
                {btn ? <ClearAllIcon /> : <CloseIcon />}
              </span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-end ${btn ? '' : 'show'}`}
              id="navbarNav"
            >
              <ul className="navbar-nav menu_navbar_nav">
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                    onClick={handleNavLinkClick} // Add onClick handler
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                    onClick={handleNavLinkClick} // Add onClick handler
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/resume"
                    className="nav-link"
                    activeClassName="active"
                    onClick={handleNavLinkClick} // Add onClick handler
                  >
                    Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/project"
                    className="nav-link"
                    activeClassName="active"
                    onClick={handleNavLinkClick} // Add onClick handler
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="active"
                    onClick={handleNavLinkClick} // Add onClick handler
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;