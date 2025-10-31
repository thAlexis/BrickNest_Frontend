import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import addWishlist from "../../assets/icons/emptyHeart.png";
import removeWishlist from "../../assets/icons/filledHeart.png";
import { Link } from "react-router-dom";
import { InvalidJWTContext } from "../../contexts/InvalidJWTContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import { CollectionContext } from "../../contexts/CollectionContext";
import axios from "../../../axios.config.js";
import { set } from "react-hook-form";

export default function AddToWishlist({ set_num }) {
  const { userDatas, token } = useContext(UserContext);
  const { setError } = useContext(InvalidJWTContext);
  const { userWishlist, setUserWishlist } = useContext(WishlistContext);
  const { userCollection } = useContext(CollectionContext);
  const isInWishlist = userWishlist.some((i) => i.set_num === set_num);
  const isInCollec = userCollection.some((i) => i.set_num === set_num);

  function addSetToWishlist() {
    console.log("collec", isInCollec, "wishlist:", isInWishlist);
    !isInWishlist &&
      !isInCollec &&
      axios
        .post(`/wishlist/addset/${set_num}`, null, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => setUserWishlist([...userWishlist, { set_num: set_num }]))
        .catch((err) => {
          err.response
            ? setError(err.response.data.message)
            : setError("Une erreur est survenue");
        });
  }

  function removeSetFromWishlist() {
    isInWishlist &&
      axios
        .delete(`/wishlist/delete/${set_num}`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) =>
          setUserWishlist(userWishlist.filter((i) => i.set_num !== set_num))
        )
        .catch((err) => {
          err.response
            ? setError(err.response.data.message)
            : setError("Une erreur est survenue");
        });
  }

  return userDatas ? (
    <button
      className="cursor-pointer bg-white p-[0.4rem] rounded-[50%] shadow-md hover:scale-[110%] transition-all duration-100"
      onClick={() =>
        !isInWishlist ? addSetToWishlist() : removeSetFromWishlist()
      }
    >
      <img
        className="w-[1rem] lg:w-[1.4rem]"
        src={!isInWishlist ? addWishlist : removeWishlist}
      />
    </button>
  ) : (
    <Link
      to="/login"
      className="cursor-pointer bg-white p-[0.4rem] rounded-[50%] shadow-md hover:scale-[110%] transition-all duration-100"
    >
      <img className="w-[1rem]" src={addWishlist} />
    </Link>
  );
}
