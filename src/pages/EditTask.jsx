import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getTaskById, updateTask, deleteTask } from '../api/tasks';
import { toast } from 'react-toastify';
import './AddTask.css'; 

const EditTask = () => {
  const { taskId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getTaskById(taskId).then(task => reset(task));
  }, [taskId, reset]);

  const onSubmit = async (data) => {
    await updateTask(taskId, data);
    toast.success(' Task updated');
    navigate('/');
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      await deleteTask(taskId);
      toast.success('🗑️ Task deleted');
      navigate('/');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="add-task-title">Edit Task</h2>

      <input
        {...register('title', { required: true })}
        placeholder="Title"
        className="add-task-input"
      />

      <textarea
        {...register('description')}
        placeholder="Description"
        className="add-task-textarea"
      />

      <select {...register('status')} className="add-task-select">
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button type="submit" className="add-task-button">Update Task</button>
        <button
          type="button"
          className="add-task-button"
          onClick={handleDelete}
          style={{ backgroundColor: '#dc3545' }}
        >
          🗑️
        </button>
      </div>
    </form>
  );
};

export default EditTask;
