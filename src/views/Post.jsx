import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InvalidJWTContext } from "../contexts/InvalidJWTContext";
import axios from "../../axios.config.js";
import { UserContext } from "../contexts/UserContext.jsx";

export default function Post() {
  const params = useParams();
  const postId = params.postid;
  const [postInfos, setPostInfos] = useState();
  const { error, setError } = useContext(InvalidJWTContext);
  const { userDatas, token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/newsposts/${postId}`)
      .then((res) => setPostInfos(res.data))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }, []);

  function deletePost() {
    axios
      .delete(`/newsposts/${postId}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => navigate("/"))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }

  if (!postInfos || !userDatas) return <p>Chargement...</p>;

  return (
    <div className="mt-[6rem] md:mt-[8rem] mb-[7rem] flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-[2rem] text-center">
        {postInfos.title}
      </h1>
      <div className="w-[20rem] h-[20rem] mb-[2rem]">
        <img
          className="w-full h-full object-contain"
          src={`http://localhost:3000${postInfos.image}`}
        />
      </div>
      <div className="pl-[2rem] pr-[2rem] md:w-[80%] lg:w-[60%]">
        <p>{postInfos.content}</p>
      </div>
      {userDatas.role === "admin" && (
        <div className="flex gap-[1rem] mt-[2rem]">
          <button className="bg-[#084667] hover:bg-[#669BBC] p-[0.8rem] rounded-sm text-white transition-all duration-300 cursor-pointer">
            Modifier
          </button>
          <button
            onClick={deletePost}
            className="bg-[#780000] hover:bg-[#C1121F] p-[0.8rem] rounded-sm text-white transition-all duration-300 cursor-pointer"
          >
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
}
