import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false || localStorage.getItem("mail"));
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("role") == "admin"
  );

  return (
    <AuthContext.Provider value={{ isAuth, isAdmin, setIsAuth, setIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}
