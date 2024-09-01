import { Navigate, Route } from "react-router-dom";
import { Login, Auth, Register } from "../index";
import { Suspense } from "react";
import { GlobalLoader } from "../index";

const AuthRoutes = [
  <Route
    path="auth"
    element={
      <Suspense fallback={<GlobalLoader />}>
        <Auth />
      </Suspense>
    }
  >
    <Route index={true} element={<Navigate to="login" />}></Route>
    <Route
      path="login"
      element={
        <Suspense fallback={<GlobalLoader />}>
          <Login />
        </Suspense>
      }
    ></Route>
    <Route
      path="register"
      element={
        <Suspense fallback={<GlobalLoader />}>
          <Register />
        </Suspense>
      }
    ></Route>
    <Route path="*" element={<Navigate to="/auth/login" replace />}></Route>
  </Route>,
];

export default AuthRoutes;
