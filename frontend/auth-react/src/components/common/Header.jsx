import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContextProvider";

const Header = () => {
  const { user } = useUserContext();

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          backgroundColor: "#313131",
        }}
        className="w-full"
      >
        <NavLink
          to="login"
          style={({ isActive }) => ({
            color: isActive ? "white" : "",
            display: user ? "none" : "block",
          })}
        >
          Login
        </NavLink>
        <NavLink
          to="register"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
              display: user ? "none" : "block",
            };
          }}
        >
          Register
        </NavLink>
        <NavLink
          to="/public"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
            };
          }}
        >
          Public
        </NavLink>
        <NavLink
          to="/user"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
              display: !user ? "none" : "block",
            };
          }}
        >
          Users
        </NavLink>
      </div>
    </>
  );
};

export default Header;
