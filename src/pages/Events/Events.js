
import React, { useState, useEffect } from "react";
import "./Events.scss";

function Events() {
  const [events, setEvents] = useState([]);
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [expandedEventId, setExpandedEventId] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    fetchEvents(today, showUpcoming);
  }, [showUpcoming]);

  const fetchEvents = (date, upcoming) => {
    const comparisonOperator = upcoming ? "gte" : "lt";
    fetch(`/events/?date__${comparisonOperator}=${date}`)
      .then((response) => response.json())
      .then((data) => setEvents(data.results))
      .catch((error) => console.error("Error:", error));
  };

  const toggleSection = () => {
    setShowUpcoming(!showUpcoming);
  };

  const toggleCard = (id) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <div className="events">
      <h1 className="events__heading">Events</h1>
      <div className="events__toggle">
        <button
          className={`events__toggle-button ${showUpcoming ? "active" : ""}`}
          onClick={toggleSection}
        >
          Upcoming
        </button>
        <button
          className={`events__toggle-button ${!showUpcoming ? "active" : ""}`}
          onClick={toggleSection}
        >
          Past
        </button>
      </div>
      <div className="events__section">
        <div className="events__card-container">
          {events.map((event) => (
            <div
              key={event.id}
              className="events__card"
              onClick={() => toggleCard(event.id)}
            >
              <div className="events__image-container">
                <img
                  src={event.feature_image}
                  alt={event.name}
                  className="events__image"
                />
              </div>
              <div className="events__details">
                <h2 className="events__title">{event.name}</h2>
                <p className="events__date">
                  Date: {new Date(event.date).toLocaleString()}
                </p>
                {expandedEventId === event.id && (
                  <div className="events__expanded-details">
                    <p className="events__description">{event.description}</p>
                    <p className="events__location">{event.location}</p>
                    {event.mission && event.mission.type && ( 
                      <p className="events__mission-type">Mission Type: {event.mission.type}</p>
                    )}
                    {event.mission && event.mission.orbit && (
                      <p className="events__orbit">Orbit: {event.mission.orbit.name}</p>
                    )}
                    {event.rocket && event.rocket.configuration && (
                      <p className="events__rocket-family">Rocket Family: {event.rocket.configuration.family}</p>
                    )}
                    {event.launch_service_provider && (
                      <p className="events__launch-provider">Launch Provider: {event.launch_service_provider.name}</p>
                    )}
                    {event.vid_urls && event.vid_urls.length > 0 && (
                      <a
                        href={event.vid_urls[0].url}
                        className="events__video-link"
                      >
                        Watch Video
                      </a>
                    )}
                    {event.url && (
                      <a href={event.url} className="events__event-link">
                        Event Details
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;


