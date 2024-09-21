import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Typography, Grid, IconButton } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BusinessIcon from '@mui/icons-material/Business';
import NavComp from '../Nav/NavComp';

const LoginOptions = () => {
  const navigate = useNavigate();

  const handleOrganizerLogin = () => {
    navigate('/loginorg');
  };

  const handleCustomerLogin = () => {
    navigate('/loginu');
  };

  return (
    <div>
      <NavComp />
      <div style={{ padding: '300px' }}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Card onClick={handleOrganizerLogin}>
              <CardActionArea>
                <CardContent>
                  <IconButton>
                    <BusinessIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h4" component="div">
                    Login as Organizer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click here to log in as an event organizer.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card onClick={handleCustomerLogin}>
              <CardActionArea>
                <CardContent>
                  <IconButton>
                    <PersonOutlineIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h4" component="div">
                    Login as Customer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click here to log in as a customer.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoginOptions;
