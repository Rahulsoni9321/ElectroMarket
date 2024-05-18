import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const [isauthenticated, setisauthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const login = (token) => {
    setisauthenticated(true);
    localStorage.setItem("token", `Bearer ${token}`);
  };
  const logout = () => {
    setisauthenticated(false);
    localStorage.removeItem("token");
    toast.success("logged out successfully", {
      duration: 3000,
    });
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ isauthenticated,logout,login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
