import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import axios from 'axios';
import { Container, Paper, Typography, Button, Grid, Box } from '@mui/material';
import swal from 'sweetalert';

function QRCodeUploader() {
  const [qrResult, setQrResult] = useState(null);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [validated, setValidated] = useState(null);
  const [isCameraMode, setIsCameraMode] = useState(true);
  const webcamRef = useRef(null);

  const fetchValidationStatus = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/qr-codes/${id}`);
      setValidated(response.data.validated);
    } catch (error) {
      console.error('Error fetching validation status:', error);
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/users/${userId}/`);
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const fetchPurchaseDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/ticket-purchases/${id}/`);
      setPurchaseDetails(response.data);
      fetchUserDetails(response.data.user_id);
    } catch (error) {
      console.error('Error fetching purchase details:', error);
    }
  };

  const validateQRCode = async () => {
    try {
      await axios.post(`http://localhost:8000/api/validate-qr-code/${qrResult}/`, { validated: true });
      swal("Validated!", "Allowed Checked In!", "success");
      fetchValidationStatus(qrResult);
    } catch (error) {
      console.error('Error validating QR code:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        processImage(image);
      };
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const processImage = (image) => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      setQrResult(code.data);
      fetchPurchaseDetails(code.data);
      fetchValidationStatus(code.data);
    }
  };

  const capture = () => {
    if (!isCameraMode) return;

    const imageSrc = webcamRef.current.getScreenshot();
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      processImage(image);
    };
  };

  useEffect(() => {
    const interval = setInterval(capture, 1000);
    return () => clearInterval(interval);
  }, [isCameraMode]);

  return (
    <div>
      
      <Container style={{ paddingTop: '30px' }}>
        <Paper elevation={3} style={{ padding: '60px' }}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
            Scan QR Code
          </Typography>
          <Typography variant="subtitle1" style={{ color: validated ? 'red' : 'green', textAlign: 'center' }}>
            {validated !== null ? (validated ? 'Allready Used QR.' : 'QR is still Valid.') : ''}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              {isCameraMode ? (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  style={{ width: '200px', height: '200px' }}
                />
              ) : (
                <input type="file" accept="image/*" onChange={handleFileChange} />
              )}
              <Typography variant="subtitle1">{qrResult ? `QR Code Result: ${qrResult}` : 'No result yet'}</Typography>
              <Button variant="contained" onClick={() => setIsCameraMode(!isCameraMode)}>
                {isCameraMode ? 'Switch to Upload' : 'Switch to Scan'}
              </Button>
            </Grid>
            {purchaseDetails && (
              <Grid item xs={6}>
                <Box style={{paddingLeft:'220px'}}>
                  <Typography variant="h5">Purchase Details:</Typography>
                  <Typography>Event Name: {purchaseDetails.event_name}</Typography>
                  <Typography>Package Name: {purchaseDetails.package_name}</Typography>
                  <Typography>Package Price: Rs.{purchaseDetails.package_price}</Typography>
                  <Typography>Quantity: {purchaseDetails.quantity}</Typography>
                  <Typography>Subtotal: Rs.{purchaseDetails.subtotal}</Typography>
                  <Typography>Purchase Date: {new Date(purchaseDetails.purchase_date).toLocaleString()}</Typography>
                </Box>
              </Grid>
            )}
            {userDetails && (
              <Grid item xs={6}>
                <Box style={{paddingTop:'20px'}}>
                  <Typography variant="h5">User Details:</Typography>
                  <Typography>Username: {userDetails.username}</Typography>
                  <Typography>Email: {userDetails.email}</Typography>
                </Box>
              </Grid>
            )}
            {qrResult && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={validateQRCode}
                >
                  Validate QR Code
                </Button>
              </div>
            )}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default QRCodeUploader;
