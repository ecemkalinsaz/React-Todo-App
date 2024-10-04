import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Daily from "./Daily";
import Work from "./Work";
import Giris from "./Giris";  // Giris.jsx dosyasını import ediyoruz

function App() {
  const [dailyTasks, setDailyTasks] = useState(() => {
    const saved = localStorage.getItem("dailyTasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [workTasks, setWorkTasks] = useState(() => {
    const saved = localStorage.getItem("workTasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("dailyTasks", JSON.stringify(dailyTasks));
  }, [dailyTasks]);

  useEffect(() => {
    localStorage.setItem("workTasks", JSON.stringify(workTasks));
  }, [workTasks]);

  const addDailyTask = (task) => {
    setDailyTasks([...dailyTasks, task]);
  };

  const removeDailyTask = (index) => {
    const newTasks = dailyTasks.filter((_, i) => i !== index);
    setDailyTasks(newTasks)
  }

  const addWorkTask = (task) => {
    setWorkTasks([...workTasks, task]);
  };

  const removeWorkTask = (index) => {
    const newTasks = workTasks.filter((_, i) => i !== index);
    setWorkTasks(newTasks);
  };

  return (
    <Router>
      <div>
        <nav className="flex justify-center space-x-4 p-4 bg-gray-100">
          <Link to="/" className="text-lg font-semibold">Home</Link>
          <Link to="/daily" className="text-lg font-semibold">Daily Tasks</Link>
          <Link to="/work" className="text-lg font-semibold">Work Tasks</Link>
        </nav>
        <Routes>
          {/* Anasayfa için Giris bileşeni */}
          <Route path="/" element={<Giris />} />
          {/* Daily sayfası */}
          <Route path="/daily" element={<Daily tasks={dailyTasks} addTask={addDailyTask} removeTask={removeDailyTask} />} />
          {/* Work sayfası */}
          <Route path="/work" element={<Work tasks={workTasks} addTask={addWorkTask} removeTask={removeWorkTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;