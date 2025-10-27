import axios from "../../axios.config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SetCard from "../components/SetCard/SetCard";
import Pagination from "../components/Pagination/Pagination";

export default function SetsByTheme() {
  const [error, setError] = useState();
  const [legoSets, setLegoSets] = useState();
  const [page, setPage] = useState(1);
  const [nbPages, setNbPages] = useState(1);

  const params = useParams();
  const mainTheme = params.maintheme;

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviousPage() {
    setPage(page - 1);
  }

  useEffect(() => {
    axios
      .get(`/sets/${mainTheme}?page=${page}`)
      .then((res) => {
        setLegoSets(res.data.sets);
        setNbPages(res.data.nbPages);
      })
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }, [page]);

  if (!legoSets) return <p className="mt-[5rem]">{error || "Chargement..."}</p>;

  return (
    <div className="flex flex-col gap-[1rem] items-center mt-[6rem] mb-[6rem] w-[100%]">
      <Pagination
        page={page}
        nbPages={nbPages}
        previousPage={handlePreviousPage}
        nextPage={handleNextPage}
      />
      <div className="flex flex-col gap-[1rem] items-center mt-[1rem] mb-[1rem] w-[80%]">
        {legoSets.map((s, i) => (
          <SetCard {...s} />
        ))}
      </div>
      <Pagination
        page={page}
        nbPages={nbPages}
        previousPage={handlePreviousPage}
        nextPage={handleNextPage}
      />
    </div>
  );
}
