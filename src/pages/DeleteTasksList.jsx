import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api/tasks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './DeleteTasksList.css';
import './NoTasks.css';

const DeleteTasksList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTasks().then(data => setTasks(data || []));
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      await deleteTask(id);
      toast.success('🗑️ Task deleted successfully');
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="delete-task-container">
      <h2>Delete a Task</h2>
      {tasks.length === 0 ? (
        <div className="no-tasks-section">
          <p className="no-tasks-text">No tasks available to delete</p>
          <button className="add-task-button" onClick={() => navigate('/add')}>Add Task</button>
        </div>
      ) : (
        <ul className="delete-task-list">
          {tasks.map(task => (
            <li key={task.id} className="delete-task-item">
              <div>
                <strong>{task.title}</strong> – {task.description}
              </div>
              <button onClick={() => handleDelete(task.id)} className="delete-btn">
                Delete 🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeleteTasksList;
