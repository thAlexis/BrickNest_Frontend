import axios from "../../axios.config";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SetCard from "../components/SetCard/SetCard";
import Pagination from "../components/Pagination/Pagination";
import { InvalidJWTContext } from "../contexts/InvalidJWTContext";

export default function SetsByTheme() {
  const { error, setError } = useContext(InvalidJWTContext);
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

  function handleTargetedPage(page) {
    setPage(page);
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

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (!legoSets) return <p className="mt-[5rem]">{error || "Chargement..."}</p>;

  return (
    <div className="flex flex-col gap-[1rem] items-center mt-[6rem] md:mt-[8rem] mb-[6rem] w-[100%]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-[1rem]">
        {mainTheme}
      </h1>
      <Pagination
        page={page}
        nbPages={nbPages}
        previousPage={handlePreviousPage}
        nextPage={handleNextPage}
        targetedPage={handleTargetedPage}
        isLG={true}
      />
      <div className="flex flex-col gap-[1rem] items-center mt-[1rem] mb-[1rem] w-[80%] md:w-[60%] lg:w-[50rem]">
        {legoSets.map((s, i) => (
          <SetCard {...s} />
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
