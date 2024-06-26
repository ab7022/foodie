import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Signin = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage,setResponseMessage]= useState("")
 
  const signin = async () => {
    try {
      const response = await axios.post(
        "https://foodie-five-pi.vercel.app/signin",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        setResponseMessage(response.data.msg)
        localStorage.setItem("token", response.data.token);

        if (response.data.msg === "Login successful") {
          navigate("/home");
        }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200">
      <Navbar/>
      <div className="m-6">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-orange-500 mb-2">
              Foodiee
            </h1>
            <p className="text-gray-500">Explore and Share Delicious Recipes</p>
          </div>

          <form className="space-y-4">
          <input
            type="text"
            id="email"
            name="username"
            placeholder="bayees1@gmail.com"
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
            className="w-full p-3 rounded-md border-gray-300 focus:border focus:bg-gray-50 shadow-sm bg-gray-100"
          />
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder="12345"
            className="w-full p-3 rounded-md border-gray-300 focus:border focus:bg-gray-50 shadow-sm my-4 bg-gray-100"
          />
           {responseMessage && (
              <div className="my-1 text-red-500 text-sm">
                {responseMessage}
              </div>
            )}

            <button
              className="bg-orange-500 text-lg font-bold text-white p-3 rounded-xl w-full hover:bg-orange-600 transition duration-300"
              type="button"
              onClick={signin}
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 flex flex-row">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <a href="#/signup" className="text-sm text-black font-bold underline">
                Create here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Signin;
