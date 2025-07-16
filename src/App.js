import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import EditTasksList from './pages/EditTasksList';
import DeleteTasksList from './pages/DeleteTasksList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit" element={<EditTasksList />} />
        <Route path="/edit/:taskId" element={<EditTask />} />
        <Route path="/view" element={<DeleteTasksList />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
}

export default App;
