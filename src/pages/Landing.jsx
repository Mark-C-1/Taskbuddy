import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to TaskBuddy</h1>
        <p className="landing-subtitle">Your personal task manager to keep life organized and productive.</p>
        <button className="landing-button" onClick={() => navigate('/add')}>
          ➕ Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
