import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const tokenFromLocal = localStorage.getItem("user");
  const [userDatas, setUserDatas] = useState(null);
  const [token, setToken] = useState(tokenFromLocal || null);

  useEffect(() => {
    if (token) {
      try {
        const tokenDecoded = jwtDecode(token);
        setUserDatas(tokenDecoded);
      } catch (err) {
        console.log(err);
      }
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ userDatas, setToken, setUserDatas }}>
      {children}
    </UserContext.Provider>
  );
}
