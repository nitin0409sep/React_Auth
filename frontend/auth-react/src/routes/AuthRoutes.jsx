import { Navigate, Route } from "react-router-dom";
import { Login, Auth, Register } from "../index";

const AuthRoutes = [
  <Route path="auth" element={<Auth />}>
    <Route index={true} element={<Navigate to="login" />}></Route>
    <Route path="login" element={<Login />}></Route>
    <Route path="register" element={<Register />}></Route>
    <Route path="*" element={<Navigate to="/auth/login" replace />}></Route>
  </Route>,
];

export default AuthRoutes;
