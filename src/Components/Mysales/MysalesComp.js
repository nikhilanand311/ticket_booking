import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';

const OrganizerDashboard = () => {
  const [purchases, setPurchases] = useState([]);

  const token = localStorage.getItem('access_token');
  const decodedToken = jwt_decode(token);
  const user_id = decodedToken.user_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventResponse = await axios.get(`http://localhost:8000/api/pak/${user_id}`);
        const eventNames = eventResponse.data.map(event => event.eventNAME); // Assuming events have an event_name field
 
        let relatedPurchases = [];
        for (const eventName of eventNames) {
          const purchaseResponse = await axios.get(`http://localhost:8000/api/purchaseevent/${eventName}/`);
          relatedPurchases = relatedPurchases.concat(purchaseResponse.data);
        }

        setPurchases(relatedPurchases.map((purchase, index) => ({
          ...purchase,
          id: index,
        })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user_id]);

  const purchaseColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'event_name', headerName: 'Event Name', width: 200 },
    { field: 'package_name', headerName: 'Package Name', width: 200 },
    { field: 'package_price', headerName: 'Price', width: 120 },
    { field: 'quantity', headerName: 'Quantity', width: 120 },
    { field: 'purchase_date', headerName: 'Purchase Date', width: 200 },
  ];

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={purchases}
        columns={purchaseColumns}
        pageSize={5}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default OrganizerDashboard;
