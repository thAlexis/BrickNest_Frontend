import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { InvalidJWTContext } from "./InvalidJWTContext";
import axios from "../../axios.config.js";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { token } = useContext(UserContext);
  const { setError } = useContext(InvalidJWTContext);
  const [userWishlist, setUserWishlist] = useState();

  useEffect(() => {
    if (!token) {
      setUserWishlist([]);
    }
    if (token) {
      axios
        .get("/wishlist/getsetsnum", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => setUserWishlist(res.data))
        .catch((err) => {
          err.response
            ? setError(err.response.data.message)
            : setError("Une erreur est survenue");
        });
    }
  }, [token]);

  return (
    <WishlistContext.Provider value={{ userWishlist, setUserWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
