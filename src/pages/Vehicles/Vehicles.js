import React, { useState, useEffect } from "react";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("/vehicles")
      .then((response) => response.json())
      .then((data) => setVehicles(data.results))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="vehicles__container">
      <h1 className="vehicles__heading">Vehicles</h1>
      <div className="vehicles__card-container">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicles__card">
            <img
              src={vehicle.image_url}
              alt={vehicle.serial_number}
              className="vehicles__image"
            />
            <div className="vehicles__info">
              <h2 className="vehicles__title">{vehicle.serial_number}</h2>
              <p className="vehicles__details">{vehicle.details}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
