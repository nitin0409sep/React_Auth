import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { CreateUser, ViewPost, ViewUsers, AddPost } from "../index";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import { GlobalLoader } from "../index";


console.log("Rolessss");

const CoreRoutes = [
  <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
    <Route
      path="addPost"
      element={
        <Suspense fallback={<GlobalLoader />}>
          <AddPost />
        </Suspense>
      }
      key="user"
    />
    ,
    <Route
      path="viewPosts"
      element={
        <Suspense fallback={<GlobalLoader />}>
          <ViewPost />
        </Suspense>
      }
      key="viewPosts"
    />
  </Route>,
  <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
    <Route
      path="createUser"
      element={
        <Suspense fallback={<GlobalLoader />}>
          <CreateUser />
        </Suspense>
      }
      key="createUser"
    />
    ,
    <Route
      path="userList"
      element={
        <Suspense fallback={<GlobalLoader />}>
          <ViewUsers />
        </Suspense>
      }
      key="userList"
    />
  </Route>,
  <Route path="/" element={<Navigate to="public" replace />}></Route>,
];

export default CoreRoutes;
