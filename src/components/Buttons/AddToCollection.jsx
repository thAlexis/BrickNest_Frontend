import { useContext, useState } from "react";
import addCollec from "../../assets/icons/collecEmpty.png";
import removeCollec from "../../assets/icons/collecFilled.png";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../axios.config.js";
import { InvalidJWTContext } from "../../contexts/InvalidJWTContext.jsx";
import { CollectionContext } from "../../contexts/CollectionContext.jsx";
import { WishlistContext } from "../../contexts/WishlistContext.jsx";

export default function AddToCollection({ set_num }) {
  const { userDatas, token } = useContext(UserContext);
  const { error, setError } = useContext(InvalidJWTContext);
  const { userCollection, setUserCollection } = useContext(CollectionContext);
  const { userWishlist, setUserWishlist } = useContext(WishlistContext);
  const isInCollec = userCollection.some((i) => i.set_num === set_num);
  const isInWishList = userWishlist.some((i) => i.set_num === set_num);

  function addSetToCollection() {
    !isInCollec &&
      axios
        .post(`/collection/addset/${set_num}`, null, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUserCollection([...userCollection, { set_num: set_num }]);
          isInWishList &&
            axios
              .delete(`/wishlist/delete/${set_num}`, {
                headers: { authorization: `Bearer ${token}` },
              })
              .then((res) =>
                setUserWishlist(
                  userWishlist.filter((i) => i.set_num !== set_num)
                )
              )
              .catch((err) => {
                err.response
                  ? setError(err.response.data.message)
                  : setError("Une erreur est survenue");
              });
        })
        .catch((err) => {
          err.response
            ? setError(err.response.data.message)
            : setError("Une erreur est survenue");
        });
  }

  function removeSetFromCollection() {
    isInCollec &&
      axios
        .delete(`/collection/delete/${set_num}`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) =>
          setUserCollection(userCollection.filter((i) => i.set_num !== set_num))
        )
        .catch((err) => {
          err.response
            ? setError(err.response.data.message)
            : setError("Une erreur est survenue");
        });
  }

  return userDatas ? (
    <button
      onClick={() =>
        isInCollec ? removeSetFromCollection() : addSetToCollection()
      }
      className="cursor-pointer bg-white p-[0.4rem] rounded-[50%] shadow-md hover:scale-[110%] transition-all duration-100"
    >
      <img
        className="w-[1rem] lg:w-[1.4rem]"
        src={
          userCollection.some((i) => i.set_num === set_num)
            ? removeCollec
            : addCollec
        }
      />
    </button>
  ) : (
    <Link
      to="/login"
      className="cursor-pointer bg-white p-[0.4rem] rounded-[50%] shadow-md hover:scale-[110%] transition-all duration-100"
    >
      <img className="w-[1rem]" src={addCollec} />
    </Link>
  );
}
