import { FC } from "react";
import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
  children: any;
}
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};
