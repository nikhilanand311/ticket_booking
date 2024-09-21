import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';
import './EventTable.css';
import jwt_decode from 'jwt-decode';

const EventTable = () => {
  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState('');

  const token = localStorage.getItem('access_token');
  const decodedToken = jwt_decode(token);
  const user_id = decodedToken.user_id;

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pak/${user_id}`)
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, [user_id]);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const mySaveOnServerFunction = (updatedRow) => {
    const formData = new FormData();
    Object.keys(updatedRow).forEach(key => {
      formData.append(key, updatedRow[key]);
    });

    axios.put(`http://localhost:8000/api/events/${updatedRow.id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      setEvents(events.map(event => (event.id === updatedRow.id ? updatedRow : event)));
    })
    .catch(error => {
      console.error('Error updating event:', error);
    });
  };

  const filteredEvents = events.filter(event =>
    event.eventNAME.toLowerCase().includes(searchText.toLowerCase())
  );

  const eventsWithId = filteredEvents.map(event => ({
    ...event,
    id: event.eventID,
  }));

  const columns = [
    { field: 'id', headerName: 'Event ID', width: 120, editable: false },
    { field: 'eventNAME', headerName: 'Name', width: 200, editable: true },
    { field: 'eventDATE', headerName: 'Date', width: 120, editable: true },
    { field: 'eventDISCRIPTION', headerName: 'Description', width: 200, editable: true },
    { field: 'eventLOCATION', headerName: 'Location', width: 150, editable: true },
    { field: 'eventSTARTTIME', headerName: 'Start Time', width: 150, editable: true },
    { field: 'eventADDRESS', headerName: 'Address', width: 200, editable: true },
    {
      field: 'eventIMAGE',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => (
        params.value ? <img src={`http://localhost:8000/${params.value}`} alt={params.row.eventNAME} className="event-image" /> : null
      ),
      editable: false
    },
  ];

  // Custom toolbar component
  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarExport/>
      </GridToolbarContainer>
    );
  };

  return (
    <div className="event-table-container">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search by Event Name"
        className="search-field"
      />
      <div style={{ height: 400, width: '100%' }}>
        {/* Use the CustomToolbar component in the DataGrid */}
        <DataGrid
          rows={eventsWithId}
          columns={columns}
          pageSize={5}
          components={{
            Toolbar: CustomToolbar,
          }}
          processRowUpdate={(updatedRow) => mySaveOnServerFunction(updatedRow)}
        />
      </div>
    </div>
  );
};

export default EventTable;
