import React, { useState, useEffect } from "react";
import "./Launches.scss";
import { Link } from "react-router-dom";

function Launches() {
  const [launches, setLaunches] = useState([]);
  const [showUpcoming, setShowUpcoming] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    fetchLaunches(today, showUpcoming);
  }, [showUpcoming]);

  const fetchLaunches = (date, upcoming) => {
    const comparisonOperator = upcoming ? "gte" : "lt";
    const endpoint = upcoming ? "/launches/" : "/launches/past"; // Updated endpoint based on showUpcoming state

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setLaunches(data.results))
      .catch((error) => console.error("Error:", error));
  };

  const toggleSection = () => {
    setShowUpcoming(!showUpcoming);
  };

  return (
    <div className="launches">
      <h1 className="launches__heading">Launches</h1>
      <div className="launches__toggle">
        <button
          className={`launches__toggle-button ${showUpcoming ? "active" : ""}`}
          onClick={toggleSection}
        >
          Upcoming
        </button>
        <button
          className={`launches__toggle-button ${!showUpcoming ? "active" : ""}`}
          onClick={toggleSection}
        >
          Past
        </button>
      </div>
      <div
        className={`launches__card-container ${
          showUpcoming ? "upcoming" : "past"
        }`}
      >
        {launches.map((launch) => (
          <div key={launch.id} className="launches__card">
            {launch.image && (
              <div className="launches__image-container">
                <img
                  src={launch.image}
                  alt={launch.name}
                  className="launches__image"
                />
              </div>
            )}
            <div className="launches__details">
              <div className="launches__info">
                <h2 className="launches__title">{launch.name}</h2>
                {launch.status && (
                  <p className="launches__status">{launch.status.name}</p>
                )}
                {launch.mission && (
                  <p className="launches__description">
                    {launch.mission.description}
                  </p>
                )}
                <p className="launches__date">
                  Date: {launch.net && new Date(launch.net).toLocaleString()}
                </p>
                {launch.pad && (
                  <p className="launches__location">
                    Location: {launch.pad.location.name}
                  </p>
                )}
              </div>
              {launch.webcast_live && (
                <a
                  href={launch.webcast}
                  className="launches__webcast-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Webcast
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Launches;







