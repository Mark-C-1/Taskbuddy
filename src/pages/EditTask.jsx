import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getTaskById, updateTask } from '../api/tasks';
import './Form.css';

const EditTask = () => {
  const { taskId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getTaskById(taskId).then(task => reset(task));
  }, [taskId, reset]);

  const onSubmit = async (data) => {
    await updateTask(taskId, data);
    navigate('/');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Edit Task</h2>
      <input {...register('title', { required: true })} placeholder="Title" />
      <textarea {...register('description')} placeholder="Description" />
      <select {...register('status')}>
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
