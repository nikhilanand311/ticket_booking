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
        const eventResponse = await axios.get(`http://localhost:8000/api/events/?user_id=${user_id}`);
        const eventNames = eventResponse.data.map(event => event.eventNAME);
        
        const purchaseResponse = await axios.get('http://localhost:8000/api/ticket-purchases/');
        const relatedPurchases = purchaseResponse.data.filter(purchase => eventNames.includes(purchase.event_name));

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

    <div><button onClick={window.print} style={{backgroundColor:"rgb(191, 122, 255)", margin:'30px', borderRadius:'20px', padding:'5px'}}> Download Report </button>
        <iframe title="powerbi" width="1370" height="741.25" src="https://app.powerbi.com/reportEmbed?reportId=ec180bdb-e28f-4d96-b593-03647882131e&autoAuth=true&ctid=aa232db2-7a78-4414-a529-33db9124cba7" frameborder="0" allowFullScreen="true" ></iframe>
    <div style={{ height: 400, width: '100%',marginTop:'70px'}}>
      <DataGrid
        rows={purchases}
        columns={purchaseColumns}
        pageSize={5}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
    </div>
  );
};

export default OrganizerDashboard;
