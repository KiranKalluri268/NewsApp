import React, { useState } from 'react';

const Sign = ({ onSwitchToNews }) => {
  const [isLoginMode, setIsLoginMode] = useState(true); // Toggles between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      // Login logic here
      console.log('Logging in with:', { email, password });
    } else {
      // Signup logic here
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Signing up with:', { email, password });
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isLoginMode ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isLoginMode && (
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          {isLoginMode ? 'Login' : 'Register'}
        </button>
        <button
          type="button"
          className="btn btn-link mt-3"
          onClick={() => setIsLoginMode(!isLoginMode)}
        >
          {isLoginMode ? 'Switch to Register' : 'Switch to Login'}
        </button>
        <button className="btn btn-link mt-3" onClick={onSwitchToNews}>
          Back to News
        </button>
      </form>
    </div>
  );
};

export default Sign;
