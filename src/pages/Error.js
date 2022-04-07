import React from "react";
import ErrorImg from "../assets/error.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full h-5/6 grid place-items-center bg-blue-300">
      <div className="h-5/6">
        <img src={ErrorImg} alt="error" className="h-5/6" />
        <p className="text-center mt-4">
          Sorry page not found{" "}
          <Link to="/" className="text-white border-b-2 border-white-300 ">
            back to home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
