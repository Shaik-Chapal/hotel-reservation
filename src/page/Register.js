import React, { useState } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        email,
        password,
      });

      // Handle successful registration
      console.log('Registration successful:', response.data);
      window.location.href = '/';
    } catch (error) {
      // Handle registration failure
      console.error('Registration error:', error.response.data);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="input-field"
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="input-field"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="input-field"
          required
        />
      <button className="px-4 p-3 bg-[#48a5d2] uppercase text-white font-normal rounded transition duration-300 ease-in-out hover:bg-[#8e4926]"

        type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
