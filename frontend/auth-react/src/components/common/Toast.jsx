import React, { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContextProvider";

const Toast = () => {
  const {
    showToast,
    toastMessage,
    toastError,
    setShowToast,
    setToastError,
    setToastMessage,
  } = useUserContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    // Cleanup timeout if the component unmounts or msg changes
    return () => {
      clearTimeout(timer);
      setToastError("");
      setToastMessage("");
    };
  }, [toastMessage, toastError]);

  return (
    <div
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-md transition-all duration-500 ease-in-out ${
        showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${
        toastMessage ? "bg-green-400" : "bg-red-400"
      } h-10 flex items-center justify-center w-1/3`}
    >
      <span className="text-lg p-4">{toastMessage || toastError}</span>
    </div>
  );
};

export default Toast;
