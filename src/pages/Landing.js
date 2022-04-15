import React from "react";
import designer from "../assets/designer.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex h-screen justify-between items-center">
      <div>
        <img src={designer} alt="designer" />
      </div>
      <div className="w-full max-w-screen-sm m-7">
        <h1 className="text-3xl mb-5">Let Explore My Awesome Memories</h1>
        <p className="mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis
          consequuntur dolor eius error asperiores accusantium aliquid debitis
          cumque vitae.
        </p>
        <Link
          to="/register"
          className="bg-orange-300 px-7 py-2 rounded text-white hover:bg-orange-500 "
        >
          Register/Login
        </Link>
      </div>
    </div>
  );
};

export default Landing;
