import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContextProvider";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default ProtectedRoute;
