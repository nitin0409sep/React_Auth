import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;
import { setUserData } from "../../customhooks/useLocalstorage";
import { Loader, Toast } from "../../index";
import axios from "axios";

const Login = () => {
  const { setUser, setShowToast, setToastMessage, setToastError } =
    useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      // Save Token in Local Storage
      setUserData(data.tokens.accessToken);
      setUser(true);

      setShowToast(true);
      setToastMessage("Logged In Suuccessfully!!!");
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setShowToast(true);
      setToastError(error?.response?.data?.error);
    }
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
          <div className="flex flex-col gap-5 lg:w-1/2 sm:w-full max-flex-1 pb-10 bg-gray-300 shadow-md rounded-xl items-center">
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

            <div className="flex flex-col gap-1 w-full pr-10 pl-10">
              <button
                className="outline-none text-center flex justify-center"
                type="submit"
                disabled={!email || !password || loading}
                style={{
                  backgroundColor: !email || !password || loading ? "gray" : "",
                }}
              >
                {loading ? <Loader height={35} width={35} /> : "Login"}
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
