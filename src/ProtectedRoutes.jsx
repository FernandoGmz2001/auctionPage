import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { LoginContext } from "./contexts/LoginContext";
import { Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const { isAuth } = useContext(LoginContext);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
