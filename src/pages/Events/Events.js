import React, { useState, useEffect } from "react";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((response) => response.json())
      .then((data) => setEvents(data.results))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="events__container">
      <h1 className="events__heading">Events</h1>
      <div className="events__card-container">
        {events.map((event) => (
          <div key={event.id} className="events__card">
            <img
              src={event.feature_image}
              alt={event.name}
              className="events__image"
            />
            <div className="events__info">
              <h2 className="events__title">{event.name}</h2>
              <p className="events__description">{event.description}</p>
              <p className="events__date">
                Date: {new Date(event.date).toLocaleString()}
              </p>
              <p className="events__location">Location: {event.location}</p>
              {event.vid_urls.length > 0 && (
                <a href={event.vid_urls[0].url} className="events__video-link">
                  Watch Video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
