import User from "../components/core/User";
import Core from "../components/core/Core";
import { Navigate, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import { CreateUser, ViewPost, ViewUsers } from "../index";
const role = "admin";

const CoreRoutes = [
  <Route path="/" element={<Core />}>
    {role === "user" ? (
      <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
        <Route index element={<Navigate to="/user" />} />
        <Route path="user" element={<User />} />
        <Route path="viewPosts" element={<ViewPost />} />
      </Route>
    ) : role === "admin" ? (
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route index element={<Navigate to="/userList" />} />
        <Route path="createUser" element={<CreateUser />} />
        <Route path="userList" element={<ViewUsers />} />
      </Route>
    ) : (
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    )}
  </Route>,
];

export default CoreRoutes;
