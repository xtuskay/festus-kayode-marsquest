
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Launches.scss"; 

function Launches() {
  const [launches, setLaunches] = useState([]);
  const [showUpcoming, setShowUpcoming] = useState(true);

  useEffect(() => {
    const cachedLaunches = localStorage.getItem("launches");
    if (cachedLaunches) {
      setLaunches(JSON.parse(cachedLaunches));
    } else {
      fetchLaunches();
    }
  }, [showUpcoming]);

  const fetchLaunches = async () => {
    try {
      const endpoint = showUpcoming ? "/launches/" : "/launches/past";
      const response = await axios.get(endpoint);
      const updatedLaunches = response.data.results.map(launch => ({ ...launch, expanded: false }));
      setLaunches(updatedLaunches);
      localStorage.setItem("launches", JSON.stringify(updatedLaunches)); 
    } catch (error) {
      console.error("Error fetching launches:", error);
    }
  };

  const toggleSection = () => {
    setShowUpcoming(!showUpcoming);
  };

  const toggleCard = (id) => {
    setLaunches((prevLaunches) =>
      prevLaunches.map((launch) =>
        launch.id === id ? { ...launch, expanded: !launch.expanded } : { ...launch, expanded: false } 
      )
    );
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
      <div className="launches__card-container">
        {launches.map((launch) => (
          <div key={launch.id} className={`launches__card ${launch.expanded ? "expanded" : ""}`} onClick={() => toggleCard(launch.id)}>
            <div className="launches__image-container">
              <img
                src={launch.image}
                alt={launch.name}
                className="launches__image"
              />
            </div>
            <div className="launches__details">
              <div className="launches__info">
                <h2 className="launches__title">{launch.name}</h2>
                <p className="launches__status">{launch.status.name}</p>
                <p className="launches__date">
                  Date: {new Date(launch.net).toLocaleString()}
                </p>
                {launch.expanded && (
                  <div>
                    <p className="launches__description">
                      {launch.mission.description}
                    </p>
                    <p className="launches__location">
                      Location: {launch.pad.location.name}
                    </p>
                    <p className="launches__rocket">
                      Rocket: {launch.rocket.configuration.full_name}
                    </p>
                    <p className="launches__provider">
                      Launch Service Provider: {launch.launch_service_provider.name}
                    </p>
                    <p className="launches__window">
                      Launch Window: {new Date(launch.window_start).toLocaleString()} - {new Date(launch.window_end).toLocaleString()}
                    </p>
                    <a
                      href={launch.webcast}
                      className="launches__webcast-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Webcast
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Launches;

