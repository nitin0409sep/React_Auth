import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../../index";
import { useUserContext } from "../../contexts/UserContextProvider";

const Auth = () => {
  const { user } = useUserContext();

  if (user) return <Navigate to="/" />;

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Auth;
