/* import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapComponent = (props) => {
  const locations = [
    { name: 'Beruwala', lat: 6.4783, lng: 79.9828 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Colombo', lat: 6.9271, lng: 79.8612 },
  ];

  return (
    <Map
      google={props.google}
      zoom={2}
      initialCenter={{ lat: 0, lng: 0 }}
      style={{ width: '100%', height: '500px' }}
    >
      {locations.map((location) => (
        <Marker
          key={location.name}
          position={{ lat: location.lat, lng: location.lng }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: '888888888',
})(MapComponent);
 */