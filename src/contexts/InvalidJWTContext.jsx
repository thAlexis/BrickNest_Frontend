import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export const InvalidJWTContext = createContext();

export function InvalidJWTProvider({ children }) {
  const [error, setError] = useState();
  const { setUserDatas, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      error === "La session a expiré" ||
      error === "Hop hop hop, vous n'avez rien a faire là !"
    ) {
      localStorage.removeItem("user");
      setUserDatas(null);
      setToken(null);
      setError(null);
      navigate("/expired");
    }
  }, [error]);

  return (
    <InvalidJWTContext.Provider value={{ error, setError }}>
      {children}
    </InvalidJWTContext.Provider>
  );
}
