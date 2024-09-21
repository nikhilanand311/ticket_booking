import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardGrid.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export default function CardGrid() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/events');
        const eventsWithPackages = response.data.filter(event => event.ticket_packages && event.ticket_packages.length > 0);
        setEvents(eventsWithPackages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <div>
      <div className="main" id="upcomingevents">
        <Grid container spacing={2}>
          {currentEvents.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.eventID}>
              <StyledCard sx={{ maxWidth: 345 }}>
                <div className="card_image">
                  <img src={event.eventIMAGE} alt={event.eventNAME} />
                </div>
                <CardContent style={{ fontFamily: 'Arial', paddingLeft: '35px', paddingRight: '35px' }}>
                  <Typography variant="h5" component="div" style={{ marginBottom: '10px' }}>
                    {event.eventNAME}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ marginBottom: '20px' }}>
                    {event.eventSHORTDESC}
                  </Typography>
                  <button
                    className="btn card_btn"
                    style={{
                      fontFamily: 'Arial',
                      fontSize: '18px',
                      backgroundColor: '#9364f0e6',
                      color: '#fff',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                    onClick={() => {
                      navigate(`/event/${event.eventID}`);
                    }}
                  >
                    Book Now
                  </button>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={Math.ceil(events.length / eventsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
}
