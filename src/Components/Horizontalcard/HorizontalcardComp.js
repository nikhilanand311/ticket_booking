import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Horizontalcard/HorizontalcardComp.css';

export default function HorizontalcardComp() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get('http://localhost:8000/api/events/');
      const upcomingEvents = response.data
        .filter((event) => new Date(event.eventDATE) >= new Date())
        .filter((event) => event.ticket_packages && event.ticket_packages.length > 0); // Filter events with ticket packages
      setEvents(upcomingEvents);
    };

    fetchEvents();
  }, []);

  const goToEventDetail = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="container">
      {events.map((event) => (
        <div className="card-media" key={event.eventID}>
          <div className="card-media-object-container">
            <div
              className="card-media-object"
              style={{ backgroundImage: `url(${event.eventIMAGE})` }}
            ></div>
            <ul className="card-media-object-social-list">
              {/* Add social icons if needed */}
            </ul>
          </div>
          <div className="card-media-body">
            <div className="card-media-body-top">
              <span className="subtle">{event.eventDATE}</span>
            </div>
            <span className="card-media-body-heading">{event.eventNAME}</span>
            <div className="card-media-body-supporting-bottom">
              <span className="card-media-body-supporting-bottom-text subtle">
                {event.eventLOCATION}
              </span>
              <span className="card-media-body-supporting-bottom-text subtle u-float-right">
                {event.ticket_packages.map((pkg) => `Rs. ${pkg.package_price}`).join(' - ')}
              </span>
            </div>
            <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
              <span className="card-media-body-supporting-bottom-text subtle">
                #{event.eventADDRESS}
              </span>
              <button style={{backgroundColor:"#FFFFFF", backgroundColorOpacity:"0.5", border:'none'}}
                className="card-media-body-supporting-bottom-text card-media-link u-float-right"
                onClick={() => goToEventDetail(event.eventID)}
              >
                VIEW TICKETS
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
