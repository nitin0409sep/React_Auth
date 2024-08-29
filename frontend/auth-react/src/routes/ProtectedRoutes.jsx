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

  return <Outlet />;
};

export default ProtectedRoute;
