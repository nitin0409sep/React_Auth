import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { AuthRoutes, CoreRoutes } from "./routes";
import Public from "./components/common/Public";
import { UserContextProvider } from "./contexts/UserContextProvider";

//? Routing
const router = createBrowserRouter(
  createRoutesFromElements([
    AuthRoutes,
    CoreRoutes,
    <Route path="public" element={<Public />}></Route>,
    <Route path="*" element={<Navigate to="/" replace />}></Route>,
  ])
);

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </UserContextProvider>
);
