import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

export default function ButtonSection() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(<LoginPage />);
  };

  const handleSignupClick = () => {
    navigate(<SignupPage />);
  };

  return (
    <div className='buttonSection'>
      <div className='buttonSection-title'>
        <h3>Welcome to the Password saver, choose to login or create account</h3>
      </div>

      <div className='ButtonSection-buttons'>
        <div className='ButtonSection-buttons-login'>
          <button onClick={handleLoginClick}>Login</button>
        </div>

        <div className='ButtonSection-buttons-signup'>
          <button onClick={handleSignupClick}>Signup</button>
        </div>
      </div>
    </div>
  );
}
