import { useContext, createContext, useState, useEffect } from "react";
import { getUserData } from "../customhooks/useLocalstorage";
import { jwtDecode } from "jwt-decode";

// CREATE CONTEXT
export const UserContext = createContext();

// CUSTOM HOOK TO USE CONTEXT
export const useUserContext = () => useContext(UserContext);

// CONTEXT PROVIDER
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = getUserData();

    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        // Checking for token expiration
        if (decodedToken.exp * 1000 < Date.now()) {
          setUser(false);
          setRole(null);
          return;
        }

        setRole((decodedToken.role + "").toLowerCase() ?? null);
        setUser(true);
      } catch (error) {
        setUser(false);
        setRole(null);
      }
    }
  }, [user]);

  const value = { user, setUser, role, setRole };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
