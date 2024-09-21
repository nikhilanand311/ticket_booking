import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { saveAs } from 'file-saver';
import { Card, CardContent, Typography, Container, Grid, CardMedia, Button } from '@mui/material';
import NavComp from '../Nav/NavComp';

function TicketPurchaseDetails() {
  const [details, setDetails] = useState([]);
  const [qrCodes, setQrCodes] = useState([]);

  const downloadQRCode = (url, filename) => {
    axios.get(url, { responseType: 'blob' }).then((response) => {
      const blob = new Blob([response.data], { type: 'image/png' });
      saveAs(blob, filename);
    });
  };

  useEffect(() => {
    const purchaseIds = JSON.parse(localStorage.getItem('purchaseIds') || '[]');
    const accessToken = localStorage.getItem('access_token');
    const decodedToken = jwtDecode(accessToken);
    const userId = decodedToken.user_id;

    const deleteCartItems = async () => {
      try {
        await axios.delete(`http://localhost:8000/api/items/cart/${userId}`);
        console.log("Cart cleared successfully");
      } catch (error) {
        console.error("Error deleting cart items:", error);
      }
    };

    const fetchDetails = async () => {
      try {
        const promises = purchaseIds.map(id => axios.get(`http://localhost:8000/api/ticket-purchases/${id}/`));
        const qrPromises = purchaseIds.map(id => axios.get(`http://localhost:8000/api/qr-codes/${id}/`));
        const responses = await Promise.all(promises);
        const qrResponses = await Promise.all(qrPromises);
        setDetails(responses.map(response => response.data));
        setQrCodes(qrResponses.map(response => response.data.qr_code_image));
      } catch (error) {
        console.error(error);
      }
    };

    deleteCartItems();
    fetchDetails();
  }, []);

  return (
    <div>
      <NavComp />
      <Container>
        <div style={{paddingTop:'100px'}}>
          <Typography variant="h3" gutterBottom style={{display:'flex',justifyContent:'center', paddingBottom:'60px'}}>
            Thank You for Your Purchase!
          </Typography>
          <Grid container spacing={3}>
            {details.map((detail, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <CardContent style={{ display: 'flex' }}>
                    <div style={{ textAlign: 'center', marginRight: '20px' }}>
                      {qrCodes[index] && (
                        <>
                          <CardMedia component="img" src={qrCodes[index]} alt="QR Code" style={{ maxWidth: '200px', height: 'auto' }} />
                          <Button
                            variant="contained"
                            style={{ backgroundColor: 'rgba(147, 100, 240, 0.9)' }}
                            onClick={() => downloadQRCode(qrCodes[index], `qr_code_${index}.png`)}
                          >
                            Download QR Code
                          </Button>
                        </>
                      )}
                    </div>
                    <div style={{marginTop:'25px'}}>
                      <Typography variant="h5">Event: {detail.event_name}</Typography>
                      <Typography>Subtotal: Rs.{detail.subtotal}</Typography>
                      <Typography>Date of Purchase: {new Date(detail.purchase_date).toLocaleString()}</Typography>
                      <Typography variant="h6">Ticket Package:</Typography>
                      <div>
                        <Typography variant="subtitle1">Package Name: {detail.package_name}</Typography>
                        <Typography>Quantity: {detail.quantity}</Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default TicketPurchaseDetails;
