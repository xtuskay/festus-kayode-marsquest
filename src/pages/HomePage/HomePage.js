import React, { useState, useEffect } from "react";
import "./Homepage.scss";

function Homepage() {
  const [events, setEvents] = useState([]);
  const [launches, setLaunches] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  useEffect(() => {
    const fetchCachedData = (key, setDataCallback) => {
      const cachedData = localStorage.getItem(key);
      if (cachedData) {
        setDataCallback(JSON.parse(cachedData));
      }
    };

    const fetchEvents = async () => {
      const today = new Date().toISOString().split("T")[0];
      try {
        const response = await fetch(`/events/?date__gte=${today}`);
        const data = await response.json();
        setEvents(data.results);
        localStorage.setItem("cachedEvents", JSON.stringify(data.results));
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    const fetchLaunches = async () => {
      const today = new Date().toISOString().split("T")[0];
      try {
        const response = await fetch(`/launches/?net__gte=${today}`);
        const data = await response.json();
        setLaunches(data.results);
        localStorage.setItem("cachedLaunches", JSON.stringify(data.results));
      } catch (error) {
        console.error("Error fetching launches:", error);
      }
    };

    fetchCachedData("cachedEvents", setEvents);
    fetchCachedData("cachedLaunches", setLaunches);

    fetchEvents();
    fetchLaunches();
  }, []);

  const toggleSelectedEvent = (event) => {
    setSelectedEvent(selectedEvent === event ? null : event);
  };

  const toggleSelectedLaunch = (launch) => {
    setSelectedLaunch(selectedLaunch === launch ? null : launch);
  };
  

  return (
    <div className="homepage">
      <div className="homepage__events">
        <h2 className="homepage__master">Upcoming Events</h2>
        <div className="homepage__card-container">
          {events.map((event) => (
            <div
              key={event.id}
              className={`homepage__card ${selectedEvent === event ? "selected" : ""}`}
              onClick={() => toggleSelectedEvent(event)}
            >
              <div className="homepage__image-container">
                <img
                  src={event.feature_image}
                  alt={event.name}
                  className="homepage__image"
                />
              </div>
              <div className="homepage__details">
                <h2 className="homepage__title">{event.name}</h2>
                <p className="homepage__description">{event.description}</p>
                <p className="homepage__date">
                  Date: {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="homepage__location">Location: {event.location}</p>
                {event.vid_urls.length > 0 && (
                  <a href={event.vid_urls[0].url} className="homepage__video-link">
                    Watch Video
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="homepage__launches">
        <h2 className="homepage__master">Upcoming Launches</h2>
        <div className="homepage__card-container">
          {launches.map((launch) => (
            <div
              key={launch.id}
              className={`homepage__card ${selectedLaunch === launch ? "selected" : ""}`}
              onClick={() => toggleSelectedLaunch(launch)}
            >
              <div className="homepage__image-container">
                <img src={launch.image} alt={launch.name} className="homepage__image" />
              </div>
              <div className="homepage__details">
                <h2 className="homepage__title">{launch.name}</h2>
                <p className="homepage__description">{launch.mission.description}</p>
                <p className="homepage__date">
                  Date: {new Date(launch.net).toLocaleDateString()}
                </p>
                <p className="homepage__location">Location: {launch.pad.location.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
