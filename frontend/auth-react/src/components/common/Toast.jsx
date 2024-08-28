import React, { useEffect, useState } from "react";

const Toast = ({ msg = "", isError = "" }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (msg) {
      setVisible(true);
      if (isError) {
        setError(isError);
        setMessage("");
      } else {
        setMessage(msg);
        setError("");
      }

      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000);

      // Cleanup timeout if the component unmounts or msg changes
      return () => clearTimeout(timer);
    }
  }, [msg, isError]);

  return (
    <div
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-md transition-all duration-500 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${
        message ? "bg-green-400" : "bg-red-400"
      } h-10 flex items-center justify-center w-1/3`}
    >
      <span className="text-2xl p-4">{message || error}</span>
    </div>
  );
};

export default Toast;
