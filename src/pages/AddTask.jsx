import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../api/tasks';
import './AddTask.css'; 

const AddTask = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await addTask(data);
    navigate('/');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="add-task-title">Add Task</h2>
      <input {...register('title', { required: true })} placeholder="Title" className="add-task-input" />
      <textarea {...register('description')} placeholder="Description" className="add-task-textarea" />
      <select {...register('status')} className="add-task-select">
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
  );
};

export default AddTask;
