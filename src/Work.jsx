import React, { useState } from "react";

function Work(props) {
  const [task, setTask] = useState("");

  const newTask = (e) => {
    e.preventDefault();
    // eğer task boşsa hiç bir şey yapmasın, eklemesin de.
    if (!task) { 
        // task.length < 1
        // task === ''
        return // null
    }
    props.addTask(task)
    setTask(""); // inputu temizler
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Form */}
      <form onSubmit={newTask} className="mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
          className="border border-gray-300 rounded p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Add to Work
        </button>
      </form>

      {/* Görev Listesi */}
      <ul className="w-1/2">
        {props.tasks.map((task, index) => (
          <li
            key={index}
            className="bg-blue-100 text-gray-700 border border-blue-200 rounded p-2 mb-2 flex justify-between items-center"
          >
            <span>{task}</span>
            <button
              className="bg-red-500 text-white rounded-full px-2 py-1 ml-4"
              onClick={() => props.removeTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Work;