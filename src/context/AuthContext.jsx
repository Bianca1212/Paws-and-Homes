import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import PropTypes from "prop-types";

const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const { item: localStorageUser, set, remove } = useLocalStorage("user");

  {
    /*userObject is the user value that is set during authentication. */
  }
  const login = (userObject) => {
    set(userObject);
    setUser(userObject);
  };

  const logout = () => {
    remove();
    setUser(null);
  };

  {
    /* localStorageUser represents the existing user value in localStorage, used when initializing the component. */
  }
  useEffect(() => {
    if (localStorageUser) {
      setUser(localStorageUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

{
  /* hook that facilitates access to the authentication context from other components */
}
export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.array,
};
