import { Route, Routes } from "react-router-dom";
import Register from "../views/Register.jsx";
import Login from "../views/Login.jsx";
import MainThemes from "../views/MainThemes.jsx";
import SetsByTheme from "../views/SetsByTheme.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/catalog" element={<MainThemes />} />
      <Route path="/catalog/:maintheme" element={<SetsByTheme />} />
    </Routes>
  );
}
