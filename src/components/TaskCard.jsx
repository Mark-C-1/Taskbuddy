
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteTask, getTasks } from '../api/tasks';
import { toast } from 'react-toastify';
import './TaskCard.css';

const TaskCard = ({ task, refreshTasks }) => {
  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this task?');
    if (confirm) {
      await deleteTask(task.id);
      toast.success('🗑️ Task deleted');
      if (refreshTasks) {
        const updatedTasks = await getTasks();
        refreshTasks(updatedTasks);
      }
    }
  };

  return (
    <div className="task-card">
      <div className="task-actions">
        <Link to={`/edit/${task.id}`} className="task-btn edit-btn" title="Edit">✏️</Link>
        <button className="task-btn delete-btn" onClick={handleDelete} title="Delete">🗑️</button>
      </div>
      <h3 className="task-title">{task.title}</h3>
      <p className="task-desc">{task.description}</p>
      <p className="task-status">Status: {task.status}</p>
    </div>
  );
};

export default TaskCard;
