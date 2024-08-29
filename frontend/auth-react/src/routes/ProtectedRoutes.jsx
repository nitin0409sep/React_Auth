import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getUserData } from "../customhooks/useLocalstorage";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const token = getUserData("user");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  let decodedToken;

  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    console.error("Invalid token", error);
    return <Navigate to="/auth/login" replace />;
  }

  if (!allowedRoles.includes(decodedToken?.role?.toLowerCase())) {
    return <Navigate to="/" replace />;
  }

  //! The ProtectedRoute component checks the user's authorization and, if successful, uses <Outlet /> to pass control to the child route's component, which is then rendered in the appropriate part of the parent layout.
  return <Outlet />;
  // return <User />; We can return it also or any component as per requirement
};

export default ProtectedRoute;
