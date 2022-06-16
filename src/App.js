import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";

import ProtectedRoutes from "./routes/ProtectedRoutes";
import ProfilePage from "./pages/ProfilePage";
import MyLikesPage from "./pages/MyLikesPage";
import MyMatchesPage from "./pages/MyMatchesPage";
import RequestsPage from "./pages/RequestsPage";
import ApiService from "./services/Api";
import { setUser } from "./features/user/userSlice";
import CoffeeLoading from "./pages/CoffeeLoading";

const ApiInstance = new ApiService(axios);

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isLoading } = useQuery("myProfile", ApiInstance.getProfile, {
    onSuccess: ({ data }) => {
      if (!data.success) {
        return navigate("/welcome");
      }

      const user = {
        id: data.profile._id,
        name: data.profile.name,
        email: data.profile.email,
        company: data.profile.company,
        image: data.profile.image,
        likes: data.profile.likes,
        match: data.profile.match,
        requests: data.profile.incomingCoffeeRequest,
      };

      dispatch(setUser(user));
    },
  });

  if (isLoading) {
    return <CoffeeLoading />;
  }

  return (
    <div className="container">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/my-likes" element={<MyLikesPage />} />
          <Route path="/my-matches" element={<MyMatchesPage />} />
          <Route path="/requests" element={<RequestsPage />} />
        </Route>
        <Route path="/welcome" element={<h1>Welcome page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
