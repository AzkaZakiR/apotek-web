import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import axios from "axios";
import logo from "../Img/Logo.png";

const Loginbaru = (closeModal) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  console.log("Login page");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      const { accessToken } = response.data.data;
      localStorage.setItem("token", accessToken);
      //navigate("/home");
      window.location.href = "/";

      console.log("Successfully logged in", Response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        const errorMessage = error.response.data.msg;
        setError(errorMessage);
        setTimeout(() => {
          setError("");
        }, 2000);
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        // Error occurred while making the request
        setError("An error occurred during login. Please try again.");
      }
    }
  };
  return (
    <div>
      <Navbar fluid rounded className="p-2 border-spacing-10 my-1 shadow-xl shadow">
        <Navbar.Brand className="mx-4">
          <img alt="Flowbite React Logo" className="mr-3  sm:h-14" src={logo} />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-[#00ACA8]">Login Karyawan</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link>
            <p>About</p>
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div class="flex flex-wrap items-center mt-16">
        <div class="items-center text-center md:w-4/12 px-4 mr-auto ml-auto">
          <div>
            <h1 className="text-[#00ACA8] text-5xl "> Login Akun </h1>
          </div>
          <div className="m-6 ">
            <label className="text-left block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              className="shadow rounded-md appearance-none border w-full h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error && !error.includes("Wrong Password") && <p className="text-red-500 mt-1">{error}</p>}
          </div>
          <div className="mt-6 mx-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
              Password
            </label>
            <input
              className="shadow rounded-md appearance-none border w-full h-10 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && !error.includes("user not found") && <p className="text-red-500 mt-1">{error}</p>}
          </div>
          <div className="text-right mb-4 mr-6">
            <h1 className="text-right inline-block font-bold text-sm text-blue-500 hover:text-blue-800">Lupa password?</h1>
          </div>
          <div className="flex items-center justify-between">
            <button className="border text-lg border-[#00ACA8] bg-[#00ACA8] text-white py-2 px-4 rounded-md w-full hover:bg-white hover:text-[#00ACA8] transition-colors duration-700" type="submit" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="text-center m-4 ">
            <h1 className=" inline-block font-bold text-sm text-blue-500 hover:text-blue-800">Belum ada akun?</h1>
          </div>
        </div>
        <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg bg-pink-600">
            <img src="./Img/image 4.png" class="w-full align-middle rounded-t-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginbaru;
