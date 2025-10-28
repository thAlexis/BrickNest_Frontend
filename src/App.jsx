import { useContext } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuUser from "./components/Menu/MenuUser";
import AppRoutes from "./router/route";
import MenuUserBottom from "./components/Menu/MenuUserBottom";
import { UserContext } from "./contexts/UserContext";

function App() {
  const { userDatas } = useContext(UserContext);

  return (
    <>
      {userDatas ? <MenuUser /> : <Menu />}
      {userDatas && <MenuUserBottom />}
      <AppRoutes />
    </>
  );
}

export default App;
