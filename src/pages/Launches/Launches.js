import React, { useState, useEffect } from "react";

function Launches() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    // Get today's date in ISO format 
    const today = new Date().toISOString().split("T")[0];

    // fetch(`/launches/?mode=list&window_end__gte=${today}`)
    fetch("/launches")
      .then((response) => response.json())
      .then((data) => setLaunches(data.results))
      .catch((error) => console.error("Error:", error));
  }, []); 

  return (
    <div className="launches__container">
      <h1 className="launches__heading">Launches</h1>
      <div className="launches__card-container">
        {launches.map((launch) => (
          <div key={launch.id} className="launches__card">
            <img
              src={launch.image}
              alt={launch.name}
              className="launches__image"
            />
            <div className="launches__info">
              <h2 className="launches__title">{launch.name}</h2>
              <p className="launches__status">{launch.status.name}</p>
              <p className="launches__description">
                {launch.mission.description}
              </p>
              <p className="launches__date">
                Date: {new Date(launch.net).toLocaleString()}
              </p>
              <p className="launches__location">
                Location: {launch.pad.location.name}
              </p>
              {launch.webcast_live && (
                <a href={launch.webcast} className="launches__webcast-link">
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
