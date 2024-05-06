import React, { useState, useEffect } from "react";

function Homepage() {
  const [events, setEvents] = useState([]);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    // Fetch events
    fetch("/events")
      .then((response) => response.json())
      .then((data) => setEvents(data.results.slice(0, 2)))
      .catch((error) => console.error("Error fetching events:", error));

    // Fetch launches
    fetch("/launches")
      .then((response) => response.json())
      .then((data) => setLaunches(data.results.slice(0, 2)))
      .catch((error) => console.error("Error fetching launches:", error));
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__events">
        <h2>Upcoming Events</h2>
        {events.map((event) => (
          <div key={event.id} className="homepage__event-card">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
          </div>
        ))}
      </div>
      <div className="homepage__launches">
        <h2>Upcoming Launches</h2>
        {launches.map((launch) => (
          <div key={launch.id} className="homepage__launch-card">
            <h3>{launch.name}</h3>
            <p>{launch.mission.description}</p>
            <p>Date: {new Date(launch.net).toLocaleDateString()}</p>
            <p>Location: {launch.pad.location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
