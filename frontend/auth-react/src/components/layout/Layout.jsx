import React, { useEffect } from "react";
import { Header } from "../../index";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContextProvider";
import Toast from "../common/Toast";

const Layout = () => {
  const { showToast, setShowToast } = useUserContext();

  useEffect(() => {
    setShowToast(!!showToast);
  }, [showToast]);

  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
      {showToast && <Toast />}
    </>
  );
};

export default Layout;
