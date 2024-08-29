import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UserContextProvider } from "./contexts/UserContextProvider";
import router from "./routes/Router";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <UserContextProvider>
    <RouterProvider router={router} />
  </UserContextProvider>
  // </React.StrictMode>
);
