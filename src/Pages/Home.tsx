import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
      <div className="min-h-screen bg-gray-800 flex flex-col gap-4 justify-center items-center p-4">
        <div className="bg-gray-900 rounded-lg shadow-2xl p-10 max-w-3xl w-full">
          <h1 className="text-4xl font-bold text-white mb-2 text-center">Code Quality Demo</h1>
          <p className="text-gray-300 mb-8 text-center">
            Compare clean, structured code vs messy, monolithic code
          </p>
  
          <div className="flex flex-col gap-4">
            <Link
              to="/app1"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-center"
            >
              View Clean Code (App 1)
            </Link>
            <Link
              to="/app2"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 text-center"
            >
              View Messy Code (App 2)
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default Home;