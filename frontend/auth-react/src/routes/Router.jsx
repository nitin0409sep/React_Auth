import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthRoutes, CoreRoutes } from "../routes";
import { Layout, Public } from "../index";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />} key="layout">
      {...AuthRoutes}
      {...CoreRoutes}
      <Route path="public" element={<Public />} key="public" />
      <Route path="*" element={<Navigate to="/" replace />} key="unknown" />
    </Route>,
  ])
);

export default router;
