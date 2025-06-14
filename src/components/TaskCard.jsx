import React from 'react';
import { Link } from 'react-router-dom';
import './TaskCard.css';

const TaskCard = ({ task }) => (
  <div className="task-card">
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>Status: {task.status}</p>
    <Link to={`/edit/${task.id}`}>Edit</Link>
  </div>
);

export default TaskCard;
