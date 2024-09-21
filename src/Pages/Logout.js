import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear tokens from local storage (or remove cookies)
    localStorage.removeItem('access_token');

    // Navigate to /loginu URL after logout
    navigate('/loginu');
  };

  return (
    <button onClick={handleLogout} style={{ color: 'red' }}>
      Logout
    </button>
  );
};

export default Logout;
