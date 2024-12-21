import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NeatEase from "./components/Neatease";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NeatEase />}/>
        <Route path="/TaskList" element={<TaskList />} />
        <Route path="/AddTask" element={<AddTask />} />
      </Routes>
    </Router>
  )
}

export default App;
