import React, { useEffect, useState } from 'react';
import { getTasks } from '../api/tasks';
import { useNavigate } from 'react-router-dom';
import TaskCard from '../components/TaskCard'; 
import './EditTasksList.css';
import './NoTasks.css';

const EditTasksList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTasks().then(data => {
      setTasks(Array.isArray(data) ? data : []);
    });
  }, []);

  const refreshTasks = (updated) => {
    setTasks(updated);
  };

  return (
    <div className="edit-task-container">
      {tasks.length === 0 ? (
        <div className="no-tasks-section">
          <p className="no-tasks-text">No tasks available to edit</p>
          <button className="add-task-button" onClick={() => navigate('/add')}>Add Task</button>
        </div>
      ) : (
        <div className="edit-task-list">
          <h2>Edit Tasks</h2>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} refreshTasks={refreshTasks} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EditTasksList;
