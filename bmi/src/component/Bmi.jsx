import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!weight || !height) {
      toast.error("Enter your Height & Weight");
      return;
    }

    Calculated();
  };
  const Calculated = () => {
    const HeightInMeter = height / 100;
    const BmiValue = (weight / (HeightInMeter * HeightInMeter)).toFixed(2);
    setBmi(BmiValue);

    setHeight("");
    setWeight("");

    if (BmiValue < 18.5) {
      setMessage("আপনি ওজনের দিক থেকে কম!");
    } else if (BmiValue >= 18.5 && BmiValue < 24.9) {
      setMessage("আপনার ওজন স্বাভাবিক!");
    } else if (BmiValue >= 24.9 && BmiValue < 29.9) {
      setMessage("আপনি একটু বেশি ওজনের!");
    } else {
      setMessage("আপনি বোটকা");
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-85 h-100 sm:w-100 lg:w-120 border-1 rounded-2xl shadow-xl/30 border-gray-500 p-5">
        <h1 className="text-center text-xl font-mono">BMI CALCULATOR</h1>
        <form className="mt-2" onSubmit={handelSubmit} action="">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Weight</label>
            <input
              className="border-1 border-gray-500 py-2 px-2 rounded-md outline-offset-1 outline-sky-500 focus:outline-1 "
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              placeholder="Weight (KG)"
            />
          </div>
          <div className=" mt-2 flex flex-col gap-1">
            <label htmlFor="">Height</label>
            <input
              className="border-1 border-gray-500 py-2 px-2 rounded-md outline-offset-1 outline-sky-500 focus:outline-1 "
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              type="number"
              placeholder="Height (CM)"
            />
          </div>
          <div className="text-center mt-3">
            <button
              className=" text-lg w-50 h-10 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-success"
              type="submit"
            >
              Calculated
            </button>
          </div>
        </form>
        {bmi && (
          <div className="text-center mt-5">
            <h2 className="text-lg font-mono">Your BMI : <span className="text-2xl text-blue-500">{bmi}</span> </h2>
            <p className="font-mono text-lg">{message}</p>
          </div>
        )}
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Bmi;
