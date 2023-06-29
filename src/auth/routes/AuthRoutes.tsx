import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import ArtistsPage from "../pages/ArtistsPage";

export const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage/>} />
      <Route path="auth/home" element={<HomePage/>}/>
      <Route path="auth/events" element={<EventsPage/>}/>
      <Route path="auth/artists" element={<ArtistsPage/>}/>
      <Route path="/auth/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
};