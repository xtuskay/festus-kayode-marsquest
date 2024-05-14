
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Vehicles.scss";

// function VehiclesPage() {
//   const [vehicles, setVehicles] = useState([]);
//   const [showReusableVehicles, setShowReusableVehicles] = useState(false);

//   useEffect(() => {
//     fetchVehicles();
//   }, []);

//   const fetchVehicles = async () => {
//     try {
//       const response = await axios.get("/vehicles");
//       const vehiclesData = response.data.results;

//       // Filter reusable vehicles if "Reusable Vehicles" tab is active
//       const filteredVehicles = showReusableVehicles
//         ? vehiclesData.filter((vehicle) => vehicle.reusable === true)
//         : vehiclesData;

//       setVehicles(filteredVehicles);
//     } catch (error) {
//       console.error("Error fetching vehicles:", error);
//     }
//   };

//   const handleToggleReusable = () => {
//     setShowReusableVehicles(true);
//     fetchVehicles();
//   };

//   const handleToggleAll = () => {
//     setShowReusableVehicles(false);
//     fetchVehicles();
//   };

//   return (
//     <div className="vehicles">
//       <h1 className="vehicles__heading">Vehicles</h1>
//       <div className="vehicles__toggle">
//         <button
//           className={`vehicles__toggle-button ${
//             !showReusableVehicles ? "active" : ""
//           }`}
//           onClick={handleToggleAll}
//         >
//           All Vehicles
//         </button>
//         <button
//           className={`vehicles__toggle-button ${
//             showReusableVehicles ? "active" : ""
//           }`}
//           onClick={handleToggleReusable}
//         >
//           Reusable Vehicles
//         </button>
//       </div>
//       <div className="vehicles__card-container">
//         {vehicles.map((vehicle, index) => (
//           <div key={index} className="vehicles__card">
//             <div className="vehicles__image-container">
//               <img
//                 className="vehicles__image"
//                 src={vehicle.image_url}
//                 alt={vehicle.name}
//               />
//             </div>
//             <div className="vehicles__details">
//               <h2 className="vehicles__title">{vehicle.name}</h2>
//               <p className="vehicles__family">Family: {vehicle.family}</p>
//               <p className="vehicles__variant">Variant: {vehicle.variant}</p>
//               <p className="vehicles__status">Status: {vehicle.status}</p>
//               <p className="vehicles__details">Details: {vehicle.details}</p>
//               <p className="vehicles__flights">Flights: {vehicle.flights}</p>
//               {vehicle.last_launch_date && (
//                 <p className="vehicles__last-launch-date">
//                   Last Launch Date:{" "}
//                   {new Date(vehicle.last_launch_date).toLocaleDateString()}
//                 </p>
//               )}
//               {vehicle.first_launch_date && (
//                 <p className="vehicles__first-launch-date">
//                   First Launch Date:{" "}
//                   {new Date(vehicle.first_launch_date).toLocaleDateString()}
//                 </p>
//               )}
//               <div className="vehicles__links">
//                 {vehicle.info_url && (
//                   <a className="vehicles__info-link" href={vehicle.info_url}>
//                     Info
//                   </a>
//                 )}
//                 {vehicle.wiki_url && (
//                   <a className="vehicles__wiki-link" href={vehicle.wiki_url}>
//                     Wikipedia
//                   </a>
//                 )}
//               </div>
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
import "./Vehicles.scss";

function VehiclesPage() {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showReusableVehicles, setShowReusableVehicles] = useState(false);

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    filterVehicles();
  }, [searchQuery, vehicles]);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get("/vehicles");
      const vehiclesData = response.data.results;
      setVehicles(vehiclesData);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const filterVehicles = () => {
    const filteredVehicles = vehicles.filter(vehicle =>
      vehicle.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVehicles(filteredVehicles);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleToggleReusable = () => {
    setShowReusableVehicles(true);
    fetchVehicles();
  };

  const handleToggleAll = () => {
    setShowReusableVehicles(false);
    fetchVehicles();
  };

  return (
    <div className="vehicles">
      <h1 className="vehicles__heading">Vehicles</h1>
      <div className="vehicles__search">
        <input
          type="text"
          placeholder="Search vehicles..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="vehicles__search-input"
        />
      </div>
      <div className="vehicles__toggle">
        <button
          className={`vehicles__toggle-button ${
            !showReusableVehicles ? "active" : ""
          }`}
          onClick={handleToggleAll}
        >
          All Vehicles
        </button>
        <button
          className={`vehicles__toggle-button ${
            showReusableVehicles ? "active" : ""
          }`}
          onClick={handleToggleReusable}
        >
          Reusable Vehicles
        </button>
      </div>
      <div className="vehicles__card-container">
        {filteredVehicles.map((vehicle, index) => (
          <div key={index} className="vehicles__card">
            <div className="vehicles__image-container">
              <img
                className="vehicles__image"
                src={vehicle.image_url}
                alt={vehicle.name}
              />
            </div>
            <div className="vehicles__details">
              <h2 className="vehicles__title">{vehicle.name}</h2>
              <p className="vehicles__family">Family: {vehicle.family}</p>
              <p className="vehicles__variant">Variant: {vehicle.variant}</p>
              <p className="vehicles__status">Status: {vehicle.status}</p>
              <p className="vehicles__details">Details: {vehicle.details}</p>
              <p className="vehicles__flights">Flights: {vehicle.flights}</p>
              {vehicle.last_launch_date && (
                <p className="vehicles__last-launch-date">
                  Last Launch Date:{" "}
                  {new Date(vehicle.last_launch_date).toLocaleDateString()}
                </p>
              )}
              {vehicle.first_launch_date && (
                <p className="vehicles__first-launch-date">
                  First Launch Date:{" "}
                  {new Date(vehicle.first_launch_date).toLocaleDateString()}
                </p>
              )}
              <div className="vehicles__links">
                {vehicle.info_url && (
                  <a className="vehicles__info-link" href={vehicle.info_url}>
                    Info
                  </a>
                )}
                {vehicle.wiki_url && (
                  <a className="vehicles__wiki-link" href={vehicle.wiki_url}>
                    Wikipedia
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehiclesPage;
