import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const handelIncrease = () => {
    if (count <= 20000000000000) {
      setCount(count + 1);
    } else {
      toast.error("Hightest count reach 20 ")
    }
  };
  const handelDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast.error("Nagetive not Alow")
    }
  };
  const hadelReset = () => {
    setCount(0);
    toast.success("Reset done")
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div className="w-65  sm:w-80 lg:w-[30%] h-120 border-2 p-10 rounded-2xl">
        <h1 className=" text-2xl sm:text-2xl lg:text-3xl text-center mb-5">Counter App</h1>
        <div className=" text-6xl sm:text-7xl lg:text-8xl text-center">{count}</div>
        <div className="flex flex-col lg:flex-row gap-3 w-full items-center lg:justify-center mt-10">
          <button
            onClick={handelIncrease}
            className="btn btn-soft btn-success w-40 h-15 text-xl"
          >
            Increase
          </button>
          <button
            onClick={hadelReset}
            className="btn btn-soft btn-warning w-40 h-15 text-xl"
          >
            Reset
          </button>
          <button
            onClick={handelDecrease}
            className="btn btn-soft btn-error w-40 h-15 text-xl"
          >
            Decrease
          </button>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default CounterApp;
