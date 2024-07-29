import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'admin123';
    
    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="card-title">Hello Again!</h1>
        <small className="card-subtitle">Enter your credentials and get access</small>
        <form className="card-form" onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <div className="card-input-container username">
            <input
              type="text"
              placeholder="Enter your username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="card-input-container password">
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="card-button">Sign In</button>
          <small className="card-forgot-password">
            Forgot your password? <a href="#">Reset Password</a>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
