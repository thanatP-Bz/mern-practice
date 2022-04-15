import React from "react";
import { useAppContext } from "../context/AppContext";

const Alert = () => {
  const { alertText, alertType } = useAppContext();
  return (
    <div
      className={`w-full text-white font-bold py-2 px-4 rounded text-center ${
        alertType === "danger" ? "bg-red-300" : ""
      }`}
    >
      {alertText}
    </div>
  );
};

export default Alert;
