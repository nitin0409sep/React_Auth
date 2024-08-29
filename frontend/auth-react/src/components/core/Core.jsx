import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import ProtectedRoute from "../../routes/ProtectedRoutes";
import Header from "../common/Header";
import { useUserContext } from "../../contexts/UserContextProvider";

const Core = () => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default Core;
