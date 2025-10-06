import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Task = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();

    if (todos.length >= 6) {
      toast.warning("⚠️ You can only add up to 6 tasks!");
      setTask("");
      return;
    }

    if (task.trim() === "") {
      toast.error("✏️ Please write your task!");
      return;
    }

    setTodos([...todos, task]);
    toast.success(`✅ "${task}" Added!`);
    setTask("");
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    toast.info("🗑️ Task Deleted!");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-[30%] min-h-[450px] border border-gray-600 shadow-2xl rounded-2xl px-4 py-6">
        <h1 className="text-base md:text-xl lg:text-2xl font-mono text-center">
          Todo App (Beginning)
        </h1>

        <form
          className="flex flex-col md:flex-row justify-between gap-3 mt-5"
          onSubmit={handelSubmit}
        >
          <input
            className="flex-1 border border-gray-500 rounded-md px-3 py-2 text-white bg-transparent placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter your task..."
          />
          <button
            className="btn w-full md:w-auto mt-2 md:mt-0 bg-sky-500 hover:bg-sky-600 text-white rounded-md px-5 py-2 transition"
            type="submit"
          >
            Add
          </button>
        </form>

        <ul className="mt-4 space-y-3">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400 mt-3 font-mono">
              No task yet
            </p>
          ) : (
            todos.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-[#0c1420] px-3 py-2 rounded-lg"
              >
                <span className="text-sm md:text-base lg:text-lg font-mono">
                  {item}
                </span>
                <button
                  className="bg-red-500 hover:bg-red-600 p-2 rounded-lg"
                  onClick={() => handleDelete(index)}
                >
                  🚫
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
};

export default Task;
