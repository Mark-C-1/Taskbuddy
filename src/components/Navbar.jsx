import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">
        TaskBuddy
      </div>
      <div className="navbar-menu">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/add">Add Task</Link>
          <Link to="/edit">Edit</Link>
          <Link to="/view">Delete Task</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

