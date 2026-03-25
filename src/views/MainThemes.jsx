import axios from "../../axios.config.js";
import { useEffect, useState } from "react";
import ThemeBox from "../components/ThemeBox/ThemeBox.jsx";

export default function MainThemes() {
  const [error, setError] = useState();
  const [mainThemes, setMainThemes] = useState([]);

  useEffect(() => {
    axios
      .get("/themes/mainthemes")
      .then((res) => {
        setMainThemes(res.data.mainThemes);
      })
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }, []);

  return (
    <div className="grid grid-cols-[min-content_min-content] sm:grid-cols-[min-content_min-content_min-content] lg:grid-cols-[min-content_min-content_min-content_min-content] gap-[1rem] sm:gap-[1.4rem] lg:gap-[1.6rem] justify-center mt-[6rem] sm:mt-[8rem] mb-[6rem]">
      {mainThemes?.map(
        (t, i) =>
          t.theme_name !== "name" && (
            <ThemeBox themeName={t.theme_name} key={i} />
          )
      )}
    </div>
  );
}
