import { Route, Routes } from "react-router-dom";
import Register from "../views/Register.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
