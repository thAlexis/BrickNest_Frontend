import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import axios from "../../../axios.config";
import { InvalidJWTContext } from "../../contexts/InvalidJWTContext";
import HomePageSetCard from "../../components/SetCard/HomePageSetCard";
import NewsCard from "../../components/NewsCard/NewsCard.jsx";

export default function ConnectedHomePage() {
  const { userDatas, token } = useContext(UserContext);
  const { error, setError } = useContext(InvalidJWTContext);
  const [lastFiveWishlist, setLastFiveWishlist] = useState();
  const [lastThreeCollec, setLastThreeCollec] = useState();
  const [lastTwoNews, setLastTwoNews] = useState();

  useEffect(() => {
    axios
      .get("/newsposts/lasttwo")
      .then((res) => setLastTwoNews(res.data))
      .catch((err) => {
        err.response.data
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });

    axios
      .get("/wishlist/getlastfive", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setLastFiveWishlist(res.data))
      .catch((err) => {
        err.response.data
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });

    axios
      .get("/collection/getlastthree", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setLastThreeCollec(res.data))
      .catch((err) => {
        err.response.data
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }, []);

  if (!userDatas || !lastFiveWishlist || !lastThreeCollec)
    return <p>Chargement...</p>;

  return (
    <div className="flex flex-col gap-[2rem] items-center mt-[6rem] md:mt-[8rem] mb-[6rem]">
      <div className="flex flex-col items-center gap-[0.4rem]">
        <h1 className="text-2xl font-bold">Bienvenue {userDatas.username}</h1>
        <div className="w-[5rem] border-b-[0.2rem] rounded-[50rem] border-[#780000]"></div>
      </div>
      <div className="w-[80%] lg:w-[70%] flex flex-col">
        <h2 className="text-lg font-bold mb-[0.6rem]">Actualités</h2>
        <div className="grid grid-cols-2 gap-[0.6rem] h-[15rem] md:h-[20rem] lg:w-[80%] self-center">
          {lastTwoNews.map((n, i) => (
            <NewsCard
              title={n.title}
              imagePath={n.image}
              content={n.content}
              postId={n.id}
            />
          ))}
        </div>
      </div>
      <div className="w-[100%] flex flex-col items-center gap-[2rem] lg:flex-row lg:w-[70%]">
        <div className="w-[80%]">
          <h2 className="text-lg font-bold mb-[0.6rem]">
            Récemment collectionnés
          </h2>
          <div className="flex flex-col gap-[1rem]">
            {lastThreeCollec.map((s, i) => (
              <HomePageSetCard
                setNum={s.set_num}
                setName={s.set_name}
                setImg={s.img_link}
              />
            ))}
          </div>
        </div>
        <div className="w-[80%]">
          <h2 className="text-lg font-bold mb-[0.6rem]">
            Vos derniers souhaits
          </h2>
          <div className="flex flex-col gap-[1rem]">
            {lastFiveWishlist.map((s, i) => (
              <HomePageSetCard
                setNum={s.set_num}
                setName={s.set_name}
                setImg={s.img_link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
