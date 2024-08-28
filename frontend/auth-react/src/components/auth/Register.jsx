import React from "react";
import { Form } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex flex-col w-full items-center max-flex-1 gap-10 p-10 h-full">
        <h1 className="text-5xl">Register</h1>

        <div className="flex flex-col gap-2  lg:w-1/3 sm:w-full bg-gray-300 max-flex-1 pb-5 shadow-md rounded-xl items-center">
          <div className="flex flex-col gap-1 w-full pl-10 pr-10 pt-10">
            <label htmlFor="name" className="text-black pl-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="p-3 outline-none bg-slate-50 text-black rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-1 w-full pl-10 pr-10">
            <label htmlFor="email" className="text-black pl-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="p-3 outline-none bg-slate-50 text-black rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-1 w-full pr-10 pl-10">
            <label htmlFor="password" className="text-black pl-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-3 outline-none bg-slate-50 text-black rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-1 w-full pr-10 pl-10">
            <label htmlFor="cofirmPassword" className="text-black pl-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="cofirmPassword"
              name="cofirmPassword"
              className="p-3 outline-none bg-slate-50 text-black rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-1 w-full pr-10 pl-10 pt-4">
            <button className="outline-none">Register</button>
            <p className="text-right flex justify-center gap-1 text-black">
              <span>Already have an account?</span>
              <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
