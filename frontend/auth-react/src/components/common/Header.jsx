import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContextProvider";
import { deleteUserData } from "../../customhooks/useLocalstorage";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  // Logout
  const handleLogout = () => {
    // Change the state in Contexts
    setUser(false);

    // Clear Local Storage
    deleteUserData();

    // Navigate to Login Once Person Logout's
    navigate("/auth/login");
  };

  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          backgroundColor: "#313131",
        }}
        className="w-full hover:text-white"
      >
        <NavLink
          to="/auth/login"
          style={({ isActive }) => ({
            color: isActive ? "white" : "",
            display: user ? "none" : "block",
          })}
          className="hover:text-white"
        >
          Login
        </NavLink>
        <NavLink
          to="/auth/register"
          style={({ isActive }) => {
            return {
              color: isActive ? "white" : "",
              display: user ? "none" : "block",
            };
          }}
          className="hover:text-white"
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
          className="hover:text-white"
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
          className="hover:text-white"
        >
          Users
        </NavLink>

        {user && (
          <div
            className="font-medium text-blue-500 cursor-pointer hover:text-white transition-all delay-200 ease-in-out"
            onClick={handleLogout}
          >
            Logout
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
