import { Navigate, Route } from "react-router-dom";
import { Login, Auth, Register } from "../index";
import { Suspense } from "react";
import Loader from "../components/common/Loader";

const AuthRoutes = [
  <Route path="auth" element={<Auth />}>
    <Route index={true} element={<Navigate to="login" />}></Route>
    <Route
      path="login"
      element={
        <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      }
    ></Route>
    <Route
      path="register"
      action={async ({ request }) => {
        const formData = await request.formData();

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("cofirmPassword");

        console.log("ASASAS");
        console.log({ name, email, password, confirmPassword });

        return null;
      }}
      element={
        <Suspense fallback={<Loader />}>
          <Register />
        </Suspense>
      }
    ></Route>
    <Route path="*" element={<Navigate to="/auth/login" replace />}></Route>
  </Route>,
];

export default AuthRoutes;
