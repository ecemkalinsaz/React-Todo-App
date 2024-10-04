import React from "react";
import { Link } from "react-router-dom";

function Giris() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-60px)] text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Task Manager</h1>
      <p className="mb-8">Manage your tasks by category. Choose one:</p>
      <div className="flex gap-6">
        <Link to="/daily">
          <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Go to Daily Tasks</button>
        </Link>
        <Link to="/work">
          <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700">Go to Work Tasks</button>
        </Link>
      </div>
    </div>
  );
}

export default Giris;