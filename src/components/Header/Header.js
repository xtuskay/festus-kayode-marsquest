// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.scss"; 

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header__logo">
//         <h1>MARSQUEST</h1>
//       </div>
//       <button
//         className={`header__menu-btn ${isMenuOpen ? "open" : ""}`}
//         onClick={toggleMenu}
//       >
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </button>
//       <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/events">Events</Link>
//           </li>
//           <li>
//             <Link to="/launches">Launches</Link>
//           </li>
//           <li>
//             <Link to="/vehicles">Vehicles</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.scss";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header__logo">
//         <h1>MARSQUEST</h1>
//       </div>
//       <button
//         className={`header__menu-btn ${isMenuOpen ? "open" : ""}`}
//         onClick={toggleMenu}
//       >
//         {/* <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div> */}
//       </button>
//       {isMenuOpen && (
//         <nav className="header__nav">
//           <ul>
//             <li>
//               <Link to="/" onClick={toggleMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/events" onClick={toggleMenu}>
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link to="/launches" onClick={toggleMenu}>
//                 Launches
//               </Link>
//             </li>
//             <li>
//               <Link to="/vehicles" onClick={toggleMenu}>
//                 Vehicles
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Header;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg"; 
// import "./Header.scss";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navigateToHome = () => {
//     navigate("/");
//     setIsMenuOpen(false); // Close the menu after navigation
//   };

//   return (
//     <header className="header">
//       <div className="header__logo">
//         <h1 onClick={navigateToHome}>MARS QUEST</h1>
//       </div>
//       <button
//         className={`header__menu-btn ${isMenuOpen ? "open" : ""}`}
//         onClick={toggleMenu}
//       >
//         <MenuIcon />
//       </button>
//       {isMenuOpen && (
//         <nav className="header__nav">
//           <ul>
//             <li>
//               <Link to="/" onClick={() => setIsMenuOpen(false)}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/events" onClick={() => setIsMenuOpen(false)}>
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link to="/launches" onClick={() => setIsMenuOpen(false)}>
//                 Launches
//               </Link>
//             </li>
//             <li>
//               <Link to="/vehicles" onClick={() => setIsMenuOpen(false)}>
//                 Vehicles
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Header;



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
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className="header">
      <div className="header__logo">
        <h1 onClick={navigateToHome}>MARS QUEST</h1>
      </div>
      {!isMenuOpen && ( // Show the menu button only when the menu is closed
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



