import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AuthRoutes, CoreRoutes } from "../routes";
import Public from "../components/common/Public";

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
