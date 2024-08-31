import React, { useEffect } from "react";
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
    <>
      {(toastMessage || toastError) && (
        <div
          className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-md 
        ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
        ${toastMessage ? "bg-green-400" : "bg-red-400"} 
        h-10 flex items-center justify-center max-w-fit transition-all
        duration-500 ease-in-out`}
        >
          <span className="text-md p-4 max-w-md whitespace-nowrap overflow-hidden text-ellipsis">
            {toastMessage || toastError}
          </span>
        </div>
      )}
    </>
  );
};

export default Toast;
