import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import ArtistsPage from "../pages/ArtistsPage";

export const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/events" element={<EventsPage/>}/>
      <Route path="/artists" element={<ArtistsPage/>}/>
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
};