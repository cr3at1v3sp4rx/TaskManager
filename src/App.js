// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskManager from './pages/TaskManager'; // Import TaskManager

function App() {
  return (
    <Router>
      <Routes>
        {/* Use the Route component with an element prop */}
        <Route path="/" element={<TaskManager />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
