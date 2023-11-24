import React, { useState } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      window.location.href = '/Checkout';
    } catch (error) {
      // Handle login failure
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="px-4 p-3 bg-[#48a5d2] uppercase text-white font-normal rounded transition duration-300 ease-in-out hover:bg-[#8e4926]"

         type="submit">Login</button>

         <Link to={"/Register"}><li className="px-4 relative cursor-pointer">Register</li></Link>
      </form>
    </div>
  );
};

export default Login;
