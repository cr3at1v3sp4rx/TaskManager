import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskManager from "./pages/TaskManager";





const App = () => {
  return (

        <Router>
                        <Routes>
                          <Route path="/" element={<TaskManager />} />

                        </Routes>
                     
        </Router>

  );
};

export default App;
