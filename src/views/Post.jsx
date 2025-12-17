import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InvalidJWTContext } from "../contexts/InvalidJWTContext";
import axios from "../../axios.config.js";

export default function Post() {
  const params = useParams();
  const postId = params.postid;
  const [postInfos, setPostInfos] = useState();
  const { error, setError } = useContext(InvalidJWTContext);

  useEffect(() => {
    axios
      .get(`/newsposts/${postId}`)
      .then((res) => setPostInfos(res.data[0]))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }, []);

  if (!postInfos) return <p>Chargement...</p>;

  return (
    <div className="mt-[6rem] md:mt-[8rem] mb-[7rem] flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-[2rem]">{postInfos.title}</h1>
      <div className="w-[20rem] h-[20rem] mb-[2rem]">
        <img
          className="w-full h-full object-contain"
          src={`http://localhost:3000${postInfos.image}`}
        />
      </div>
      <div className="pl-[2rem] pr-[2rem] md:w-[80%] lg:w-[60%]">
        <p>{postInfos.content}</p>
      </div>
    </div>
  );
}
