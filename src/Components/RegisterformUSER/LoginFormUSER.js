import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Logout from '../../Pages/Logout';
import './Loginformmm.css'; // Import the CSS file with styles for the form

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

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

      // Check if the role is "CUSTOMER" before allowing login
      if (decodedToken.role === 'CUSTOMER') {
        // Store the access token in local storage (you can use cookies or other methods as well)
        localStorage.setItem('access_token', access);

        // Set isLoggedIn state to true to trigger the redirect
        setLoggedIn(true);

        // Create a cart for the user
        const user_id = decodedToken.user_id; // Assuming user_id is part of the token payload
        await axios.post('http://localhost:8000/api/carts/', {
          id: user_id,
          user: user_id,
        }, {
          headers: {
            'Authorization': `Bearer ${access}`
          }
        });
      } else {
        console.error('Only customers are allowed to log in.');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  if (isLoggedIn) {
    // Redirect to the desired URL after successful login
    navigate('/ordermanage/validated');
  }

  return (
    <div className="login-form-container"> {/* Add the container class */}
      {isLoggedIn ? (
        <Logout />
      ) : (
        <form className="login-form" onSubmit={handleSubmit}> {/* Add the form class */}
          <h2 className="title">USER LOGIN</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
