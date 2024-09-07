import React, { useEffect, Suspense } from "react";
import { Header, GlobalLoader } from "../../index";
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
        <div className="relative pt-20 h-full w-full">
          <Outlet />
        </div>
      </>
      {showToast && <Toast />}
    </>
  );
};

export default Layout;
