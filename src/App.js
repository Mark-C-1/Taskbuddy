import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';
import EditTasksList from './pages/EditTasksList'; 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/edit" element={<EditTasksList />} />
        <Route path="/edit/:taskId" element={<EditTask />} />
      </Routes>
    </div>
  );
}

export default App;
