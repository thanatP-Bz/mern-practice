import React, { useState } from "react";
import { FormRow } from "../components";
const initateState = {
  name: "",
  password: "",
  email: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState({ initateState });

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const handleChange = (e) => {
    console.log(e.target);
  };
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-xs">
        <form
          onSubmit={formSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h3 className="mb-7 text-2xl text-center font-bold ">
            {values.isMember ? "Login" : "Register"}
          </h3>
          {/* input name */}
          {!values.isMember && (
            <FormRow
              type="text"
              value={values.name}
              name="name"
              placeholder="name"
              handleChange={handleChange}
            />
          )}
          {/* input password */}
          <FormRow
            type="text"
            value={values.password}
            name="password"
            placeholder="password"
          />
          {/* input email */}
          <FormRow
            type="email"
            value={values.email}
            name="email"
            placeholder="email"
            handleChange={handleChange}
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              submit
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          {values.isMember ? "Not a member yet ?" : "Already a member ?"}
          <button className="ml-1 text-blue-500" onClick={toggleMember}>
            {values.isMember ? "register" : " log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
