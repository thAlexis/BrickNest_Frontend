import { useContext } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuUser from "./components/Menu/MenuUser";
import AppRoutes from "./router/route";
import { AuthContext } from "./contexts/AuthContext";
import MenuUserBottom from "./components/Menu/MenuUserBottom";

function App() {
  const { isAuth, isAdmin } = useContext(AuthContext);

  return (
    <>
      {isAuth ? <MenuUser /> : <Menu />}
      {isAuth && <MenuUserBottom />}
      <AppRoutes />
    </>
  );
}

export default App;
