import React from "react";
import { Header } from "../../index";
import { Outlet } from "react-router-dom";
const Layout = () => {
  console.log("ASSASA");
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
};

export default Layout;
