
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Vehicles.scss";

function Vehicles() {
  const [launchVehicles, setLaunchVehicles] = useState([]);
  const [reusableVehicles, setReusableVehicles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLaunchVehicles, setShowLaunchVehicles] = useState(true);
  const [showReusableVehicles, setShowReusableVehicles] = useState(false);

  useEffect(() => {
    fetchLaunchVehicles();
    fetchReusableVehicles();
  }, []);

  const fetchLaunchVehicles = async () => {
    try {
      const response = await axios.get("https://ll.thespacedevs.com/2.2.0/launcher/", {
        params: {
          ordering: "id",
          flight_proven: false
        }
      });
      setLaunchVehicles(response.data.results || []);
    } catch (error) {
      console.error("Error fetching launch vehicles:", error);
    }
  };

  const fetchReusableVehicles = async () => {
    try {
      const response = await axios.get("https://ll.thespacedevs.com/2.2.0/launcher/", {
        params: {
          ordering: "id",
          flight_proven: true
        }
      });
      setReusableVehicles(response.data.results || []);
    } catch (error) {
      console.error("Error fetching reusable vehicles:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleLaunchVehicles = () => {
    setShowLaunchVehicles(true);
    setShowReusableVehicles(false);
  };

  const toggleReusableVehicles = () => {
    setShowLaunchVehicles(false);
    setShowReusableVehicles(true);
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
          className={`vehicles__toggle-button ${showLaunchVehicles ? "active" : ""}`}
          onClick={toggleLaunchVehicles}
        >
          Launch Vehicles
        </button>
        <button
          className={`vehicles__toggle-button ${showReusableVehicles ? "active" : ""}`}
          onClick={toggleReusableVehicles}
        >
          Reusable Vehicles
        </button>
      </div>
      <div className="vehicles__card-container">
        {showLaunchVehicles && launchVehicles.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
        {showReusableVehicles && reusableVehicles.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

function VehicleCard({ vehicle }) {
  return (
    <div className="vehicles__card">
      <div className="vehicles__image-container">
        <img className="vehicles__image" src={vehicle.image_url} alt={vehicle.serial_number} />
      </div>
      <div className="vehicles__details">
        <h2 className="vehicles__title">{vehicle.launcher_config?.name}</h2>
        <p className="vehicles__variant">Variant: {vehicle.launcher_config?.variant}</p>
        <p className="vehicles__status">Status: {vehicle.status}</p>
        <p className="vehicles__details">Details: {vehicle.details}</p>
        <p className="vehicles__flights">Flights: {vehicle.flights}</p>
        {vehicle.last_launch_date && (
          <p className="vehicles__last-launch-date">
            Last Launch Date: {new Date(vehicle.last_launch_date).toLocaleDateString()}
          </p>
        )}
        {vehicle.first_launch_date && (
          <p className="vehicles__first-launch-date">
            First Launch Date: {new Date(vehicle.first_launch_date).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default Vehicles;
