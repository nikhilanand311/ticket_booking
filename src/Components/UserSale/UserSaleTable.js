import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';

const UserPurchases = () => {
  const [purchases, setPurchases] = useState([]);

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

        // Associate QR codes with purchases using the ticket_purchase field
        const purchasesWithQrCodes = userPurchases.map((purchase, index) => {
          const qrCode = qrCodeResponse.data.find(qr => qr.ticket_purchase === purchase.id);
          return {
            ...purchase,
            qr_code_image: qrCode ? qrCode.qr_code_image : null,
            purchase_date: new Date(purchase.purchase_date),
            id: index,
          };
        });

        setPurchases(purchasesWithQrCodes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user_id]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'event_name', headerName: 'Event Name', width: 150 },
    { field: 'package_name', headerName: 'Package Name', width: 150 },
    { field: 'package_price', headerName: 'Package Price', type: 'number', width: 150 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 120 },
    { field: 'subtotal', headerName: 'Subtotal', type: 'number', width: 120 },
    { field: 'purchase_date', headerName: 'Purchase Date', type: 'date', width: 200 },
    {
      field: 'qr_code_image',
      headerName: 'QR Code',
      width: 150,
      renderCell: (params) => (
        params.value ? <img src={params.value} alt={`QR code for purchase ${params.row.id}`} style={{ maxWidth: '100%', maxHeight: '100px' }} /> : null
      ),
    },
  ];

  // Custom toolbar with filter, export, and search buttons
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

export default UserPurchases;
