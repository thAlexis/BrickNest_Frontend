import { useContext, useEffect, useState } from "react";
import { InvalidJWTContext } from "../contexts/InvalidJWTContext";
import axios from "../../axios.config.js";
import { UserContext } from "../contexts/UserContext";
import Pagination from "../components/Pagination/Pagination.jsx";
import SetInCollecCard from "../components/SetCard/SetInCollecCard.jsx";
import { CollectionContext } from "../contexts/CollectionContext.jsx";
import { Link } from "react-router-dom";

export default function UserCollection() {
  const [setsInCollec, setSetsInCollec] = useState();
  const { error, setError } = useContext(InvalidJWTContext);
  const { token } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [nbPages, setNbPages] = useState(1);
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
      .get(`/collection/getsets?page=${page}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setSetsInCollec(res.data.sets);
        setNbPages(res.data.nbPages);
      })
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }, [page, userCollection]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (!userCollection) return <p>Chargement...</p>;

  if (userCollection.length === 0)
    return (
      <div className="mt-[8rem] w-[100%] flex justify-center mb-[80vh]">
        <Link
          className="bg-[#780000] text-white p-[1rem] rounded-[1rem] cursor-pointer hover:scale-[110%] transition-all duration-100"
          to="/catalog"
        >
          Commencer la collection
        </Link>
      </div>
    );

  if (!setsInCollec || !nbPages) return <p>{error || "Chargement..."}</p>;

  return (
    <div className="flex flex-col gap-[1rem] items-center mt-[6rem] md:mt-[8rem] mb-[6rem] w-[100%]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[1rem]">
        Ma collection
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
        {setsInCollec.map((s, i) => (
          <SetInCollecCard {...s} />
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
