
// import React, { useState, useEffect } from "react";
// import "./Events.scss";

// function Events() {
//   const [events, setEvents] = useState([]);
//   const [selectedEventType, setSelectedEventType] = useState("upcoming");

//   useEffect(() => {
//     const today = new Date().toISOString().split("T")[0];

//     fetch(
//       `/events/?date__${
//         selectedEventType === "upcoming" ? "gte" : "lt"
//       }=${today}`
//     )
//       .then((response) => response.json())
//       .then((data) => setEvents(data.results))
//       .catch((error) => console.error("Error:", error));
//   }, [selectedEventType]);

//   const handleEventTypeChange = (event) => {
//     setSelectedEventType(event.target.value);
//   };

//   return (
//     <div className="events">
//       <div className="events__filter">
//         <select
//           className="events__filter-select"
//           value={selectedEventType}
//           onChange={handleEventTypeChange}
//         >
//           <option value="upcoming">Upcoming Events</option>
//           <option value="past">Past Events</option>
//         </select>
//       </div>
//       <div className="events__section">
//         <h1 className="events__heading">
//           {selectedEventType === "upcoming" ? "Upcoming" : "Past"} Events
//         </h1>
//         <div className="events__card-container">
//           {events.map((event) => (
//             <div key={event.id} className="events__card">
//               <div className="events__image-container">
//                 <img
//                   src={event.feature_image}
//                   alt={event.name}
//                   className="events__image"
//                 />
//               </div>
//               <div className="events__details">
//                 <h2 className="events__title">{event.name}</h2>
//                 <p className="events__description">{event.description}</p>
//                 <p className="events__date">
//                   Date: {new Date(event.date).toLocaleString()}
//                 </p>
//                 <p className="events__location">Location: {event.location}</p>
//                 {event.vid_urls.length > 0 && (
//                   <a
//                     href={event.vid_urls[0].url}
//                     className="events__video-link"
//                   >
//                     Watch Video
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Events;

// import React, { useState, useEffect } from "react";
// import "./Events.scss";

// function Events() {
//   const [events, setEvents] = useState([]);
//   const [selectedEventType, setSelectedEventType] = useState("upcoming");

//   useEffect(() => {
//     const today = new Date().toISOString().split("T")[0];

//     fetchEvents(today, selectedEventType);
//   }, [selectedEventType]);

//   const fetchEvents = (date, eventType) => {
//     const comparisonOperator = eventType === "upcoming" ? "gte" : "lt";
//     fetch(`/events/?date__${comparisonOperator}=${date}`)
//       .then((response) => response.json())
//       .then((data) => setEvents(data.results))
//       .catch((error) => console.error("Error:", error));
//   };

//   const handleEventTypeChange = (eventType) => {
//     setSelectedEventType(eventType);
//   };

//   return (
//     <div className="events">
//       <div className="events__filter">
//         <select
//           className="events__filter-select"
//           value={selectedEventType}
//           onChange={(e) => handleEventTypeChange(e.target.value)}
//         >
//           <option value="upcoming">Upcoming Events</option>
//           <option value="past">Past Events</option>
//         </select>
//       </div>
//       <div className="events__section">
//         <h1 className="events__heading">
//           {selectedEventType === "upcoming" ? "Upcoming" : "Past"} Events
//         </h1>
//         <div className="events__card-container">
//           {events.map((event) => (
//             <div key={event.id} className="events__card">
//               <div className="events__image-container">
//                 <img
//                   src={event.feature_image}
//                   alt={event.name}
//                   className="events__image"
//                 />
//               </div>
//               <div className="events__details">
//                 <h2 className="events__title">{event.name}</h2>
//                 <p className="events__description">{event.description}</p>
//                 <p className="events__date">
//                   Date: {new Date(event.date).toLocaleString()}
//                 </p>
//                 <p className="events__location">{event.location}</p>
//                 {event.vid_urls.length > 0 && (
//                   <a
//                     href={event.vid_urls[0].url}
//                     className="events__video-link"
//                   >
//                     Watch Video
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Events;



import React, { useState, useEffect } from "react";
import "./Events.scss";

function Events() {
  const [events, setEvents] = useState([]);
  const [showUpcoming, setShowUpcoming] = useState(true);

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
            <div key={event.id} className="events__card">
              <div className="events__image-container">
                <img
                  src={event.feature_image}
                  alt={event.name}
                  className="events__image"
                />
              </div>
              <div className="events__details">
                <h2 className="events__title">{event.name}</h2>
                <p className="events__description">{event.description}</p>
                <p className="events__date">
                  Date: {new Date(event.date).toLocaleString()}
                </p>
                <p className="events__location">{event.location}</p>
                {event.vid_urls.length > 0 && (
                  <a
                    href={event.vid_urls[0].url}
                    className="events__video-link"
                  >
                    Watch Video
                  </a>
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
