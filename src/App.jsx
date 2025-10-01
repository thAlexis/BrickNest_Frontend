import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </>
  );
}

export default App;
