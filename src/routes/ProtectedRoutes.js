import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUser } from "../features/user/userSlice";

function ProtectedRoutes() {
  const user = useSelector(selectUser);

  if (!user.name) {
    return <Navigate to="/welcome" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
