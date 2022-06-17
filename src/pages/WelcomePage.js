import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectUser } from "../features/user/userSlice";
import CoffeeLoading from "./CoffeeLoading";

function WelcomePage() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.name) {
      navigate("/", { replace: true });
    }
  }, [navigate, user.name]);

  return <CoffeeLoading />;
}

export default WelcomePage;
