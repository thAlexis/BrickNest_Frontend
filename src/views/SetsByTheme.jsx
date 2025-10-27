import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SetsByTheme() {
  const [error, setError] = useState();
  const [legoSets, setLegoSets] = useState();

  const params = useParams();
  const mainTheme = params.maintheme;

  useEffect(() => {
    axios
      .get(`/sets/${mainTheme}`)
      .then((res) => setLegoSets(res.data))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }, []);

  if (!legoSets) return <p className="mt-[5rem]">{error || "Chargement..."}</p>;
}
