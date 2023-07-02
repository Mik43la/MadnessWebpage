import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import ArtistsPage from "../pages/ArtistsPage";
import Forum from "../pages/Forum";

export const UserRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/events" element={<EventsPage/>}/>
      <Route path="/artists" element={<ArtistsPage/>}/>
      <Route path="/forum" element={<Forum />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
};