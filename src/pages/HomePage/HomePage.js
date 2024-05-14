
// import React, { useState, useEffect } from "react";
// import "./Homepage.scss";

// function Homepage() {
//   const [events, setEvents] = useState([]);
//   const [launches, setLaunches] = useState([]);

//   useEffect(() => {
//     const today = new Date().toISOString().split("T")[0];

//     // Fetch upcoming events
//     fetch(`/events/?date__gte=${today}`)
//       .then((response) => response.json())
//       .then((data) => setEvents(data.results.slice(0, 4)))
//       .catch((error) => console.error("Error fetching events:", error));

//     // Fetch upcoming launches
//     fetch(`/launches/?net__gte=${today}`)
//       .then((response) => response.json())
//       .then((data) => setLaunches(data.results.slice(0, 4)))
//       .catch((error) => console.error("Error fetching launches:", error));
//   }, []);

//   return (
//     <div className="homepage">
//       <div className="homepage__events">
//         <h2 className="homepage__master">Upcoming Events</h2>
//          {events.map((event) => (
//           <div key={event.id} className="homepage__card">
//             <div className="homepage__image-container">
//               <img
//                 src={event.feature_image}
//                 alt={event.name}
//                 className="homepage__image"
//               />
//             </div>
//             <div className="homepage__details">
//               <h2 className="homepage__title">{event.name}</h2>
//               <p className="homepage__description">{event.description}</p>
//               <p className="homepage__date">
//                 Date: {new Date(event.date).toLocaleDateString()}
//               </p>
//               <p className="homepage__location">Location: {event.location}</p>
//               {event.vid_urls.length > 0 && (
//                 <a
//                   href={event.vid_urls[0].url}
//                   className="homepage__video-link"
//                 >
//                   Watch Video
//                 </a>
//               )}
//             </div>
//           </div>
//          ))}
//       </div>
//       <div className="homepage__launches">
//         <h2 className="homepage__master">Upcoming Launches</h2>
//         {launches.map((launch) => (
//           <div key={launch.id} className="homepage__card">
//             <div className="homepage__image-container">
//               <img
//                 src={launch.image}
//                 alt={launch.name}
//                 className="homepage__image"
//               />
//             </div>
//             <div className="homepage__details">
//               <h2 className="homepage__title">{launch.name}</h2>
//               <p className="homepage__description">
//                 {launch.mission.description}
//               </p>
//               <p className="homepage__date">
//                 Date: {new Date(launch.net).toLocaleDateString()}
//               </p>
//               <p className="homepage__location">
//                 Location: {launch.pad.location.name}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Homepage;







// import React, { useState, useEffect } from "react";
// import "./Homepage.scss";

// function Homepage() {
//   const [events, setEvents] = useState([]);
//   const [launches, setLaunches] = useState([]);

//   useEffect(() => {
//     const today = new Date().toISOString().split("T")[0];

//     // Fetch upcoming events
//     fetch(`/events/?date__gte=${today}`)
//       .then((response) => response.json())
//       .then((data) => setEvents(data.results.slice(0, 4)))
//       .catch((error) => console.error("Error fetching events:", error));

//     // Fetch upcoming launches
//     fetch(`/launches/?net__gte=${today}`)
//       .then((response) => response.json())
//       .then((data) => setLaunches(data.results.slice(0, 4)))
//       .catch((error) => console.error("Error fetching launches:", error));
//   }, []);

//   return (
//     <div className="homepage">
//       <div className="homepage__events">
//         <h2>Upcoming Events</h2>
//         <div className="homepage__card-container">
//           {events.map((event) => (
//             <div key={event.id} className="homepage__card">
//               <div className="homepage__image-container">
//                 <img
//                   src={event.feature_image}
//                   alt={event.name}
//                   className="homepage__image"
//                 />
//               </div>
//               <div className="homepage__details">
//                 <h2 className="homepage__title">{event.name}</h2>
//                 <p className="homepage__description">{event.description}</p>
//                 <p className="homepage__date">
//                   Date: {new Date(event.date).toLocaleDateString()}
//                 </p>
//                 <p className="homepage__location">Location: {event.location}</p>
//                 {event.vid_urls.length > 0 && (
//                   <a
//                     href={event.vid_urls[0].url}
//                     className="homepage__video-link"
//                   >
//                     Watch Video
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="homepage__launches">
//         <h2>Upcoming Launches</h2>
//         <div className="homepage__card-container">
//           {launches.map((launch) => (
//             <div key={launch.id} className="homepage__card">
//               <div className="homepage__image-container">
//                 <img
//                   src={launch.image}
//                   alt={launch.name}
//                   className="homepage__image"
//                 />
//               </div>
//               <div className="homepage__details">
//                 <h2 className="homepage__title">{launch.name}</h2>
//                 <p className="homepage__description">
//                   {launch.mission.description}
//                 </p>
//                 <p className="homepage__date">
//                   Date: {new Date(launch.net).toLocaleDateString()}
//                 </p>
//                 <p className="homepage__location">
//                   Location: {launch.pad.location.name}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homepage;




import React, { useState, useEffect } from "react";
import "./Homepage.scss";

function Homepage() {
  const [events, setEvents] = useState([]);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    // Fetch upcoming events
    fetch(`/events/?date__gte=${today}`)
      .then((response) => response.json())
      .then((data) => setEvents(data.results.slice(0, 4)))
      .catch((error) => console.error("Error fetching events:", error));

    // Fetch upcoming launches
    fetch(`/launches/?net__gte=${today}`)
      .then((response) => response.json())
      .then((data) => setLaunches(data.results.slice(0, 4)))
      .catch((error) => console.error("Error fetching launches:", error));
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__events">
        <h2>Upcoming Events</h2>
        <div className="homepage__card-container">
          {events.map((event) => (
            <div key={event.id} className="homepage__card">
              <div className="homepage__image-container">
                <img
                  src={event.feature_image}
                  alt={event.name}
                  className="homepage__image"
                />
              </div>
              <div className="homepage__details">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Location: {event.location}</p>
                {event.vid_urls.length > 0 && (
                  <a href={event.vid_urls[0].url}>Watch Video</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="homepage__launches">
        <h2>Upcoming Launches</h2>
        <div className="homepage__card-container">
          {launches.map((launch) => (
            <div key={launch.id} className="homepage__card">
              <div className="homepage__image-container">
                <img
                  src={launch.image}
                  alt={launch.name}
                  className="homepage__image"
                />
              </div>
              <div className="homepage__details">
                <h3>{launch.name}</h3>
                <p>{launch.mission.description}</p>
                <p>Date: {new Date(launch.net).toLocaleDateString()}</p>
                <p>Location: {launch.pad.location.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
