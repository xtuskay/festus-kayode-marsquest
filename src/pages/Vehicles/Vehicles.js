// import React, { useState, useEffect } from "react";

// function Vehicles() {
//   const [vehicles, setVehicles] = useState([]);

//   useEffect(() => {
//     fetch("/vehicles")
//       .then((response) => response.json())
//       .then((data) => setVehicles(data.results))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   return (
//     <div className="vehicles__container">
//       <h1 className="vehicles__heading">Vehicles</h1>
//       <div className="vehicles__card-container">
//         {vehicles.map((vehicle) => (
//           <div key={vehicle.id} className="vehicles__card">
//             <img
//               src={vehicle.image_url}
//               alt={vehicle.serial_number}
//               className="vehicles__image"
//             />
//             <div className="vehicles__info">
//               <h2 className="vehicles__title">{vehicle.serial_number}</h2>
//               <p className="vehicles__details">{vehicle.details}</p>
//               <p className="vehicles__status">Status: {vehicle.status}</p>
//               <p className="vehicles__flights">Flights: {vehicle.flights}</p>
//               <p className="vehicles__first-launch-date">
//                 First Launch Date:{" "}
//                 {new Date(vehicle.first_launch_date).toLocaleDateString()}
//               </p>
//               <p className="vehicles__last-launch-date">
//                 Last Launch Date:{" "}
//                 {new Date(vehicle.last_launch_date).toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Vehicles;




import React, { useState, useEffect } from "react";
import "./Vehicles.scss";
import { Link } from "react-router-dom";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [showPresent, setShowPresent] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    fetchVehicles(today, showPresent);
  }, [showPresent]);

  const fetchVehicles = (date, present) => {
    const comparisonOperator = present ? "gte" : "lt";
    const endpoint = present ? "/vehicles/" : "/vehicles/past";

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setVehicles(data.results))
      .catch((error) => console.error("Error:", error));
  };

  const toggleSection = () => {
    setShowPresent(!showPresent);
  };

  return (
    <div className="vehicles">
      <h1 className="vehicles__heading">Vehicles</h1>
      <div className="vehicles__toggle">
        <button
          className={`vehicles__toggle-button ${showPresent ? "active" : ""}`}
          onClick={toggleSection}
        >
          Present
        </button>
        <button
          className={`vehicles__toggle-button ${!showPresent ? "active" : ""}`}
          onClick={toggleSection}
        >
          Past
        </button>
      </div>
      <div
        className={`vehicles__card-container ${
          showPresent ? "present" : "past"
        }`}
      >
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicles__card">
            {vehicle.image && (
              <div className="vehicles__image-container">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="vehicles__image"
                />
              </div>
            )}
            <div className="vehicles__details">
              <div className="vehicles__info">
                <h2 className="vehicles__title">{vehicle.name}</h2>
                <p className="vehicles__description">{vehicle.description}</p>
                <p className="vehicles__date">
                  Date:{" "}
                  {vehicle.date && new Date(vehicle.date).toLocaleString()}
                </p>
                <p className="vehicles__manufacturer">
                  Manufacturer: {vehicle.manufacturer}
                </p>
              </div>
              {vehicle.wikipedia && (
                <a
                  href={vehicle.wikipedia}
                  className="vehicles__wikipedia-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;






// import React, { useState, useEffect } from "react";
// import "./Vehicles.scss";
// import { Link } from "react-router-dom";

// function Vehicles() {
//   const [vehicles, setVehicles] = useState([]);
//   const [showRockets, setShowRockets] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVehiclesData = async () => {
//       const endpoint = showRockets ? "/vehicles" : "/vehicles/reusable";

//       try {
//         const response = await fetch(endpoint);
//         if (!response.ok) {
//           throw new Error("Failed to fetch vehicles");
//         }
//         const data = await response.json();
//         setVehicles(data.results);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchVehiclesData();
//   }, [showRockets]);

//   const toggleSection = () => {
//     setShowRockets(!showRockets);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="vehicles">
//       <h1 className="vehicles__heading">Vehicles</h1>
//       <div className="vehicles__toggle">
//         <button
//           className={`vehicles__toggle-button ${showRockets ? "active" : ""}`}
//           onClick={toggleSection}
//         >
//           Rockets
//         </button>
//         <button
//           className={`vehicles__toggle-button ${!showRockets ? "active" : ""}`}
//           onClick={toggleSection}
//         >
//           Reusable Rockets
//         </button>
//       </div>
//       <div
//         className={`vehicles__card-container ${
//           showRockets ? "rockets" : "reusable"
//         }`}
//       >
//         {vehicles.map((vehicle) => (
//           <div key={vehicle.id} className="vehicles__card">
//             {vehicle.image && (
//               <div className="vehicles__image-container">
//                 <img
//                   src={vehicle.image}
//                   alt={vehicle.name}
//                   className="vehicles__image"
//                 />
//               </div>
//             )}
//             <div className="vehicles__details">
//               <div className="vehicles__info">
//                 <h2 className="vehicles__title">{vehicle.name}</h2>
//                 <p className="vehicles__description">{vehicle.description}</p>
//                 <p className="vehicles__date">
//                   Date:{" "}
//                   {vehicle.date && new Date(vehicle.date).toLocaleString()}
//                 </p>
//                 <p className="vehicles__manufacturer">
//                   Manufacturer: {vehicle.manufacturer}
//                 </p>
//               </div>
//               {vehicle.wikipedia && (
//                 <a
//                   href={vehicle.wikipedia}
//                   className="vehicles__wikipedia-link"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Wikipedia
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Vehicles;
