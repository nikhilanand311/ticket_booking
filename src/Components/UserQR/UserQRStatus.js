import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';

const ValidatedQRCodes = () => {
  const [qrCodes, setQrCodes] = useState([]);

  const token = localStorage.getItem('access_token');
  const decodedToken = jwt_decode(token);
  const user_id = decodedToken.user_id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch ticket purchases
        const purchaseResponse = await axios.get('http://localhost:8000/api/ticket-purchases/');
        const userPurchases = purchaseResponse.data.filter(purchase => purchase.user_id === user_id);

        // Fetch QR codes
        const qrCodeResponse = await axios.get('http://localhost:8000/api/qr-codes/');

        // Filter QR codes by user purchases
        const userQrCodes = qrCodeResponse.data
          .filter(qr => userPurchases.some(p => p.id === qr.ticket_purchase))
          .map(qr => {
            const purchase = userPurchases.find(p => p.id === qr.ticket_purchase);
            return {
              ...qr,
              ...purchase,
              id: qr.id,
            };
          });

        setQrCodes(userQrCodes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user_id]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'event_name', headerName: 'Event Name', width: 200 },
    { field: 'package_name', headerName: 'Package Name', width: 150 },
    { field: 'package_price', headerName: 'Package Price', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 120 },
    { field: 'subtotal', headerName: 'Subtotal', width: 150 },
    {
      field: 'qr_code_image',
      headerName: 'QR Code',
      width: 150,
      renderCell: (params) => (
        params.value ? <img src={params.value} alt={`QR code ${params.row.id}`} style={{ maxWidth: '100%', maxHeight: '100px' }} /> : null
      ),
    },
    {
      field: 'validated',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <div style={{ color: params.value ? 'red' : 'green' }}>
          {params.value ? 'Used' : 'Not Used'}
        </div>
      ),
    },
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
     <a href="http://localhost:3000/orderscan">
  <button style={{ backgroundColor: "rgb(191, 122, 255)", margin: '30px', borderRadius: '20px', padding: '5px' }}>
    Scan QR
  </button>
</a>

      <DataGrid
        rows={qrCodes}
        columns={columns}
        pageSize={5}
        rowHeight={100}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default ValidatedQRCodes;
