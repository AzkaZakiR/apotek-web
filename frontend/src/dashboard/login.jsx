import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = (closeModal) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log("Login page");

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="modalContainer bg-white rounded-md shadow-lg p-9 h-auto w-2/5">
        <div className="titleCloseBtn flex justify-end">
          <button
            onClick={() => {
              closeModal(false);
            }}
            className="text-gray-600 text-2xl"
          >
            X
          </button>
        </div>
        <div className="title mb-6">
          <h1 className="text-2xl font-bold text-red-700 ">LOG IN</h1>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input
            className="shadow rounded-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {error && !error.includes("Wrong Password") && <p className="text-red-500 mt-1">{error}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow rounded-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && !error.includes("user not found") && <p className="text-red-500 mt-1">{error}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button className="border border-red-500 bg-white text-red-500 py-2 px-4 rounded-md w-full hover:bg-red-500 hover:text-white transition-colors duration-700" type="submit">
            Login
          </button>
        </div>
        <div className="text-center mt-4">
          <h1 className="text-center inline-block font-bold text-sm text-blue-500 hover:text-blue-800">New to SEA CINEMA? Register here</h1>
        </div>
      </div>
    </div>
  );
};
export default Loginpage;
