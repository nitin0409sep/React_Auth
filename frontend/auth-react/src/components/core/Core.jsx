import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../../routes/ProtectedRoutes";
import Header from "../common/Header";

const Core = () => {
  return (
    <>
      <ProtectedRoute>
        <Header />
        <Outlet />
      </ProtectedRoute>
    </>
  );
};

export default Core;
