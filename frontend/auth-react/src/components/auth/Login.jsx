import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserContextProvider";

const Login = () => {
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(true);
  };

  return (
    <>
      <div className="flex flex-col w-full items-center max-flex-1 gap-10 p-20 h-full">
        <h1 className="text-5xl">Login</h1>
        <form
          className="flex flex-col w-full items-center"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-5 w-1/3 max-flex-1 pb-10 bg-gray-300 shadow-md rounded-xl items-center">
            <div className="flex flex-col gap-1 w-full pl-10 pr-10 pt-10">
              <label htmlFor="email" className="text-black pl-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="p-3 outline-none bg-slate-50 text-black rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-1 w-full pr-10 pl-10 ">
              <button
                className="outline-none"
                type="submit"
                disabled={!email || !password}
                style={{
                  backgroundColor: !email || !password ? "gray" : "",
                }}
              >
                Login
              </button>
              <p className="flex justify-center gap-1 text-black">
                <span>Don't have an account?</span>
                <a href="/register">Register</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
