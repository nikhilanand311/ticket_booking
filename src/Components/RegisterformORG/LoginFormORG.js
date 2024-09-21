import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './Loginformm.css';

const LoginFormORG = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username,
        password,
      });
      const { access } = response.data;

      // Decode the token to get the payload
      const decodedToken = jwtDecode(access);

      // Check if the role is "ORGANIZER" before allowing login
      if (decodedToken.role === 'ORGANIZER') {
        // Store the access token in local storage (you can use cookies or other methods as well)
        localStorage.setItem('access_token', access);

        // Redirect to the desired URL after successful login
        navigate('/dashboard');
      } else {
        console.error('Only organizers are allowed to log in.');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit} style={{ backgroundColor: 'white' }}>
        <h2 className="title">ORGANIZER LOGIN</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginFormORG;
