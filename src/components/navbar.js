import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import iconImg from "../img/networking.svg";
import "./navbar.css";

export default function Navbar() {
  const [allClick, setAllClick] = useState(false);

  const handleAllClick = () => setAllClick(!allClick);

  const closeAllMobileMenu = () => setAllClick(false);

  //For About and Contact
  const [infoClick, setInfoClick] = useState(false);

  const handleInfoClick = () => setInfoClick(!infoClick);

  const closeInfoMobileMenu = () => setInfoClick(false);

  const closeBothMobileMenu = () => {
    closeAllMobileMenu();
    closeInfoMobileMenu();
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className="top-nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeBothMobileMenu}>
            <img className="nav-img" src={iconImg} alt="Nettie Icon" />
            Nettie
          </Link>
          <ul className="all-menu-icon" onClick={handleAllClick}>
            {allClick ? <FaTimes /> : <FaBars />}
          </ul>
          <ul className={allClick ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-learn">
              <li className="nav-item">
                <NavLink
                  to="/flashcards"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeBothMobileMenu}
                >
                  Flashcards
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/games"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeBothMobileMenu}
                >
                  Games
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/quizzes"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeBothMobileMenu}
                >
                  Quizzes
                </NavLink>
              </li>
            </ul>
            <div className="info-menu-icon" onClick={handleInfoClick}>
              {infoClick ? <FaTimes /> : <FaBars />}
            </div>
            <ul
              className={infoClick ? "nav-info-menu active" : "nav-info-menu"}
            >
              <li className="nav-item nav-info-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links nav-info-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeBothMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item nav-info-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links nav-info-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeBothMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}
