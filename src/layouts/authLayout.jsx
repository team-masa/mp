import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../services/config";

const AuthLayout = () => {
  const token = getToken();

  if (token) return <Navigate to="/dashboard" />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;