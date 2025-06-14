import React, { useEffect, useState } from 'react';
import { getTasks } from '../api/tasks';
import { useNavigate } from 'react-router-dom';
import './EditTasksList.css';

const EditTasksList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTasks().then(data => {
      setTasks(Array.isArray(data) ? data : []);
    });
  }, []);

  return (
    <div className="edit-task-container">
      {(!tasks || tasks.length === 0) ? (
        <div className="edit-no-tasks">
          <h2 className="edit-no-title">No tasks available</h2>
          <button className="edit-add-btn" onClick={() => navigate('/add')}>Add Task</button>
        </div>
      ) : (
        <div className="edit-task-list">
          <h2>Edit Tasks</h2>
          {tasks.map((task) => (
            <div key={task.id} className="edit-task-card">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditTasksList;
