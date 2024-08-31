import User from "../components/core/User";
import Core from "../components/core/Core";
import { Navigate, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import { CreateUser, ViewPost, ViewUsers } from "../index";
import { Suspense } from "react";
import Loader from "../components/common/Loader";
const role = "admin";

const CoreRoutes = [
  <Route path="/" element={<Core />}>
    {role === "user" ? (
      <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
        <Route index element={<Navigate to="/user" />} />
        <Route
          path="user"
          element={
            <Suspense fallback={<Loader />}>
              <User />
            </Suspense>
          }
        />
        <Route
          path="viewPosts"
          element={
            <Suspense fallback={<Loader />}>
              <ViewPost />
            </Suspense>
          }
        />
      </Route>
    ) : role === "admin" ? (
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route index element={<Navigate to="/userList" />} />
        <Route
          path="createUser"
          element={
            <Suspense fallback={<Loader />}>
              {" "}
              <CreateUser />{" "}
            </Suspense>
          }
        />
        <Route
          path="userList"
          element={
            // <Suspense fallback={<Loader />}>
            <ViewUsers />
            // </Suspense>
          }
        />
      </Route>
    ) : (
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    )}
  </Route>,
];

export default CoreRoutes;
