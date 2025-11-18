import { Route, Routes } from "react-router-dom";
import Register from "../views/Register.jsx";
import Login from "../views/Login.jsx";
import MainThemes from "../views/MainThemes.jsx";
import SetsByTheme from "../views/SetsByTheme.jsx";
import UserCollection from "../views/UserCollection.jsx";
import UserWishlist from "../views/UserWishlist.jsx";
import ConnectedHomePage from "../views/HomePage/ConnectedHomePage.jsx";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import HomePage from "../views/HomePage/HomePage.jsx";

export default function AppRoutes() {
  const { userDatas } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/catalog" element={<MainThemes />} />
      <Route path="/catalog/:maintheme" element={<SetsByTheme />} />
      <Route path="/collection" element={<UserCollection />} />
      <Route path="/wishlist" element={<UserWishlist />} />
      <Route
        path="/"
        element={userDatas ? <ConnectedHomePage /> : <HomePage />}
      />
    </Routes>
  );
}
