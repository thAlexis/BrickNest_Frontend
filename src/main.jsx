import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import { InvalidJWTProvider } from "./contexts/InvalidJWTContext.jsx";
import { CollectionProvider } from "./contexts/CollectionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <InvalidJWTProvider>
          <CollectionProvider>
            <App />
          </CollectionProvider>
        </InvalidJWTProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
