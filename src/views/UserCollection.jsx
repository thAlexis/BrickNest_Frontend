import { useContext, useEffect, useState } from "react";
import { InvalidJWTContext } from "../contexts/InvalidJWTContext";
import axios from "../../axios.config.js";
import { UserContext } from "../contexts/UserContext";
import Pagination from "../components/Pagination/Pagination.jsx";
import SetInCollecCard from "../components/SetCard/SetInCollecCard.jsx";

export default function UserCollection() {
  const [setsInCollec, setSetsInCollec] = useState();
  const { error, setError } = useContext(InvalidJWTContext);
  const { token } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [nbPages, setNbPages] = useState(1);

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

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (!setsInCollec || !nbPages) return <p>{error || "Chargement..."}</p>;

  return (
    <div className="flex flex-col gap-[1rem] items-center mt-[6rem] md:mt-[8rem] mb-[6rem] w-[100%]">
      <Pagination
        page={page}
        nbPages={nbPages}
        previousPage={handlePreviousPage}
        nextPage={handleNextPage}
        targetedPage={handleTargetedPage}
        isLG={true}
      />
      <div className="flex flex-col w-[70%] gap-[2rem] mt-[1rem] mb-[1rem]">
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
