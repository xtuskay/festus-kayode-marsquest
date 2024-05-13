
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function VehiclesPage() {
//   const [vehicles, setVehicles] = useState([]);
//   const [showReusable, setShowReusable] = useState(false);
//   const [selectedVehicle, setSelectedVehicle] = useState(null);

//   useEffect(() => {
//     fetchVehicles(showReusable);
//   }, [showReusable]);

//   const fetchVehicles = async (showReusable) => {
//     try {
//       const endpoint = showReusable ? "/vehicles/reusable" : "/vehicles";
//       const response = await axios.get(endpoint);
//       setVehicles(response.data.results); // Assuming the API response has a 'results' property containing an array of vehicles
//     } catch (error) {
//       console.error("Error fetching vehicles:", error);
//     }
//   };

//   const toggleSection = () => {
//     setShowReusable(!showReusable);
//   };

//   const handleCardClick = (vehicle) => {
//     setSelectedVehicle(vehicle === selectedVehicle ? null : vehicle);
//   };

//   return (
//     <div className="vehicles">
//       <h1 className="vehicles__heading">Vehicles</h1>
//       <div className="vehicles__toggle">
//         <button
//           className={`vehicles__toggle-button ${showReusable ? "active" : ""}`}
//           onClick={toggleSection}
//         >
//           Reusable
//         </button>
//         <button
//           className={`vehicles__toggle-button ${!showReusable ? "active" : ""}`}
//           onClick={toggleSection}
//         >
//           Non-reusable
//         </button>
//       </div>
//       <div className="vehicles__card-container">
//         {Array.isArray(vehicles) && vehicles.map((vehicle) => (
//           <div
//             key={vehicle.id}
//             className={`vehicles__card ${
//               selectedVehicle === vehicle ? "selected" : ""
//             }`}
//             onClick={() => handleCardClick(vehicle)}
//           >
//             <img
//               src={vehicle.image_url}
//               alt={vehicle.serial_number}
//               className="vehicles__image"
//             />
//             <div className="vehicles__info">
//               <h2 className="vehicles__title">{vehicle.serial_number}</h2>
//               {selectedVehicle === vehicle && (
//                 <div>
//                   <p className="vehicles__details">{vehicle.details}</p>
//                   <p className="vehicles__status">Status: {vehicle.status}</p>
//                   <p className="vehicles__flights">Flights: {vehicle.flights}</p>
//                   <p className="vehicles__first-launch-date">
//                     First Launch Date:{" "}
//                     {new Date(vehicle.first_launch_date).toLocaleDateString()}
//                   </p>
//                   <p className="vehicles__last-launch-date">
//                     Last Launch Date:{" "}
//                     {new Date(vehicle.last_launch_date).toLocaleDateString()}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default VehiclesPage;





import React, { useState, useEffect } from "react";
import axios from "axios";

function VehiclesPage() {
  const [vehicles, setVehicles] = useState([]);
  const [showReusable, setShowReusable] = useState(false);

  useEffect(() => {
    fetchVehicles(showReusable);
  }, [showReusable]);

  const fetchVehicles = async (showReusable) => {
    try {
      const endpoint = showReusable ? "/vehicles/reusable" : "/vehicles";
      const response = await axios.get(endpoint);
      setVehicles(response.data.results);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const toggleSection = () => {
    setShowReusable(!showReusable);
  };

  const toggleCard = (index) => {
    setVehicles((prevVehicles) =>
      prevVehicles.map((vehicle, i) =>
        i === index ? { ...vehicle, expanded: !vehicle.expanded } : vehicle
      )
    );
  };

  return (
    <div className="vehicles">
      <h1 className="vehicles__heading">Vehicles</h1>
      <div className="vehicles__toggle">
        <button
          className={`vehicles__toggle-button ${showReusable ? "active" : ""}`}
          onClick={toggleSection}
        >
          Reusable
        </button>
        <button
          className={`vehicles__toggle-button ${!showReusable ? "active" : ""}`}
          onClick={toggleSection}
        >
          Non-reusable
        </button>
      </div>
      <div className="vehicles__card-container">
        {vehicles.map((vehicle, index) => (
          <div
            key={vehicle.id}
            className={`vehicles__card ${vehicle.expanded ? "expanded" : ""}`}
            onClick={() => toggleCard(index)}
          >
            <div className="vehicles__info">
              <h2 className="vehicles__title">{vehicle.serial_number}</h2>
              <p className="vehicles__details">
                {vehicle.expanded ? vehicle.details : "Click to view details"}
              </p>
              {vehicle.expanded && (
                <div>
                  <p className="vehicles__status">Status: {vehicle.status}</p>
                  <p className="vehicles__flights">Flights: {vehicle.flights}</p>
                  <p className="vehicles__first-launch-date">
                    First Launch Date:{" "}
                    {new Date(vehicle.first_launch_date).toLocaleDateString()}
                  </p>
                  <p className="vehicles__last-launch-date">
                    Last Launch Date:{" "}
                    {new Date(vehicle.last_launch_date).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehiclesPage;

