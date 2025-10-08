import { Route, Routes } from "react-router-dom";
import Register from "../views/Register.jsx";
import Login from "../views/Login.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
