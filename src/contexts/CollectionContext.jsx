import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "../../axios.config.js";
import { InvalidJWTContext } from "./InvalidJWTContext";

export const CollectionContext = createContext();

export function CollectionProvider({ children }) {
  const { token } = useContext(UserContext);
  const { setError } = useContext(InvalidJWTContext);
  const [userCollection, setUserCollection] = useState();

  useEffect(() => {
    if (!token) {
      setUserCollection([]);
    }
    if (token) {
      axios
        .get("/collection/getsets", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => setUserCollection(res.data))
        .catch((err) => {
          err.response
            ? setError(err.response.data.message)
            : setError("Une erreur est survenue");
        });
    }
  }, [token]);

  return (
    <CollectionContext.Provider value={{ userCollection, setUserCollection }}>
      {children}
    </CollectionContext.Provider>
  );
}
