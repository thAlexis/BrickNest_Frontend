import { useContext, useEffect, useState } from "react";
import { InvalidJWTContext } from "../contexts/InvalidJWTContext";
import { UserContext } from "../contexts/UserContext";
import axios from "../../axios.config.js";
import { WishlistContext } from "../contexts/WishlistContext";
import { CollectionContext } from "../contexts/CollectionContext";
import SetInWishlistCard from "../components/SetCard/SetInWishlistCard.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import { Link } from "react-router-dom";

export default function UserWishlist() {
  const [setsInWishlist, setSetsInWishlist] = useState();
  const { error, setError } = useContext(InvalidJWTContext);
  const { token } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [nbPages, setNbPages] = useState(1);
  const { userWishlist } = useContext(WishlistContext);
  const { userCollection } = useContext(CollectionContext);

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviousPage() {
    setPage(page - 1);
  }

  function handleTargetedPage(page) {
    setPage(page);
  }

  useEffect(() => {
    axios
      .get(`/wishlist/getsets?page=${page}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSetsInWishlist(res.data.sets);
        setNbPages(res.data.nbPages);
      })
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }, [page, userWishlist]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (!userWishlist && !userCollection) return <p>Chargement...</p>;

  if (userWishlist.length === 0)
    return (
      <div className="mt-[8rem] mb-[80vh] w-[100%] flex justify-center">
        <Link
          className="bg-[#780000] text-white p-[1rem] rounded-[1rem] cursor-pointer hover:scale-[110%] transition-all duration-100"
          to="/catalog"
        >
          Ajouter des sets en favoris
        </Link>
      </div>
    );

  if (!setsInWishlist || !nbPages) return <p>{error || "Chargement..."}</p>;

  return (
    <div className="flex flex-col gap-[1rem] items-center mt-[6rem] md:mt-[8rem] mb-[6rem] w-[100%]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[1rem]">
        Ma wishlist
      </h1>
      <Pagination
        page={page}
        nbPages={nbPages}
        previousPage={handlePreviousPage}
        nextPage={handleNextPage}
        targetedPage={handleTargetedPage}
        isLG={true}
      />
      <div className="flex md:grid flex-col md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 w-[70%] sm:w-[60%]  gap-[2rem] mt-[1rem] mb-[1rem]">
        {setsInWishlist.map((s, i) => (
          <SetInWishlistCard {...s} />
        ))}
      </div>
      <Pagination
        page={page}
        nbPages={nbPages}
        previousPage={handlePreviousPage}
        nextPage={handleNextPage}
        targetedPage={handleTargetedPage}
        isLG={false}
      />
    </div>
  );
}
