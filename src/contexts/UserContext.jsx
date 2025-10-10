import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userDatas, setUserDatas] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("user") || null);

  useEffect(() => {
    if (token) {
      try {
        const tokenDecoded = jwtDecode(token);
        console.log(tokenDecoded);
        setUserDatas(tokenDecoded);
        console.log(userDatas);
      } catch (err) {
        console.log(err);
      }
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ userDatas, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
