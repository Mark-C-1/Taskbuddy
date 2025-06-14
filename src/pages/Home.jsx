import React, { useEffect, useState } from 'react';
import { getTasks } from '../api/tasks';
import TaskCard from '../components/TaskCard';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <div className="page-container">
    <div className="home-container">
      <h2 className="page-title">Task List</h2>

      {tasks.length === 0 ? (
        <div className="no-tasks">
          <p>No task is available.</p>
          <Link to="/add" className="add-task-button">Add Task</Link>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Home;
