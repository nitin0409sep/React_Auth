import { useContext, createContext, useState, useEffect } from "react";
import { getUserData } from "../customhooks/useLocalstorage";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const value = { user, setUser };

  useEffect(() => {
    const token = getUserData();
    setUser(!!token);
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
