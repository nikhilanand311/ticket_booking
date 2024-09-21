// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);

  const loginUser = async (username, password) => {
    try {
      // Make API call to authenticate user
      const response = await fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setAuthTokens(data.authTokens);
        setUser(data.user);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
  };

  const contextData = {
    authTokens,
    user,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };