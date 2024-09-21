import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './TicketPackageForm.css'; // Assuming you have a CSS file for this 
import swal from 'sweetalert';

const TicketPackageForm = () => {
  const [ticketPackageData, setTicketPackageData] = useState({
    eventID: '',
    package_name: '',
    package_description: '',
    package_price: '',
    package_ticketquantity: '',
  });

  const [events, setEvents] = useState([]);
  const token = localStorage.getItem('access_token');
  const decodedToken = jwt_decode(token);
  const user_id = decodedToken.user_id;

  useEffect(() => {
    // Fetch events for the current logged-in user
    axios
      .get(`http://localhost:8000/api/pak/${user_id}`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [user_id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const packagePrice = parseFloat(ticketPackageData.package_price);
    if (packagePrice < 100 || packagePrice > 100000) {
      swal("Invalid!", "Package price must be between Rs. 100 and Rs. 100,000!", "error");
      return;
    }

    if (ticketPackageData.package_ticketquantity < 10 || ticketPackageData.package_ticketquantity  > 10000)  {
      swal("Invalid!", "Package ticket quantity should between 10 - 10,000!", "error");
      return;
    }

    // Send the form data to the API endpoint
    axios
      .post('http://localhost:8000/api/ticket-packages/', ticketPackageData)
      .then((response) => {
        console.log('Success:', response.data);
        swal("Good job!", "Package Created Successfully!", "success")
          .then(() => {
            window.location.reload();
          });
      })
      .catch((error) => {
        console.error('Error:', error);
        swal("Error!", "Failed to create package. Please try again.", "error");
      });
  };

  return (
    <div className="event-form-container">
      <form onSubmit={handleSubmit} className="event-form">
        <h2 style={{marginBottom:'30px'}} className="title">New Ticket Package</h2>
        <label className="form-label">
          Select Event:
          <select
            value={ticketPackageData.eventID}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, eventID: e.target.value })
            }
            className="input"
          >
            <option value="">-- Select an Event --</option>
            {events.map((event) => (
              <option key={event.eventID} value={event.eventID}>
                {event.eventNAME}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          Package Name:
          <input
            type="text"
            value={ticketPackageData.package_name}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, package_name: e.target.value })
            }
            className="input"
          />
        </label>
        <label className="form-label">
          Package Description:
          <textarea
            value={ticketPackageData.package_description}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, package_description: e.target.value })
            }
            className="input form-textarea"
          />
        </label>
        <label className="form-label">
          Package Price: Rs.
          <input
            type="number"
            step="0.01"
            value={ticketPackageData.package_price}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, package_price: e.target.value })
            }
            className="input"
          />
        </label>
        <label className="form-label">
          Package Ticket Quantity:
          <input
            type="number"
            value={ticketPackageData.package_ticketquantity}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, package_ticketquantity: e.target.value })
            }
            className="input"
          />
        </label>
        <button type="submit" className="form-button">Create Ticket Package</button>
      </form>
    </div>
  );
};

export default TicketPackageForm;
