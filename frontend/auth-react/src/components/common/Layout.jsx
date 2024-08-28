// import React from "react";
// import {
//   createBrowserRouter,
//   Navigate,
//   Route,
//   RouterProvider,
//   createRoutesFromElements,
//   Outlet,
// } from "react-router-dom";

// import { AuthRoutes, CoreRoutes } from "../../routes";
// import Public from "../../components/common/Public";
// import { UserContextProvider } from "../../contexts/UserContextProvider";
// import Header from "./Header";

// //? Routing
// const router = createBrowserRouter(
//   createRoutesFromElements([
//     AuthRoutes,
//     CoreRoutes,
//     <Route path="public" element={<Public />}></Route>,
//     <Route path="*" element={<Navigate to="/" replace />}></Route>,
//   ])
// );

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <Outlet></Outlet>
//     </>
//   );
// };

// export default Layout;
