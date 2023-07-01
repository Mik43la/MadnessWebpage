import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoutes";
import { UserRoute } from "../user/routes/UserRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/user/*" element={<UserRoute />} />
    
    </Routes>
  );
};