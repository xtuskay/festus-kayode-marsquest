
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import "./Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToHome = () => {
    navigate("/");
    setIsMenuOpen(false); 
  };

  return (
    <header className="header">
      <div className="header__logo">
        <h1 onClick={navigateToHome}>MARS QUEST</h1>
      </div>
      {!isMenuOpen && ( 
        <button className={`header__menu-btn`} onClick={toggleMenu}>
          <MenuIcon />
        </button>
      )}
      {isMenuOpen && (
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => setIsMenuOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/launches" onClick={() => setIsMenuOpen(false)}>
                Launches
              </Link>
            </li>
            <li>
              <Link to="/vehicles" onClick={() => setIsMenuOpen(false)}>
                Vehicles
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;


