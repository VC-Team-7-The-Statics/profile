import "./App.scss";
import "./_reset.scss";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import ProfilePage from "./pages/ProfilePage";
import MyLikesPage from "./pages/MyLikesPage";
import MyMatchesPage from "./pages/MyMatchesPage";
import RequestsPage from "./pages/RequestsPage";
import SettingPage from "./pages/SettingPage";

function App() {
  const isLoggedIn = true;

  return (
    <div className="container">
      <Routes>
        <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/my-likes" element={<MyLikesPage />} />
          <Route path="/my-matches" element={<MyMatchesPage />} />
          <Route path="/requests" element={<RequestsPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Route>
        <Route path="/welcome" element={<h1>Welcome page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
