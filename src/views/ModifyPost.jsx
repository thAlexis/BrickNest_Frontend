import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { InvalidJWTContext } from "../contexts/InvalidJWTContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import modifyPostSchema from "../validators/modifyPost.validator.js";
import { useForm } from "react-hook-form";
import axios from "../../axios.config.js";
import { useNavigate, useParams } from "react-router-dom";

export default function ModifyPost() {
  const { userDatas, token } = useContext(UserContext);
  const { error, setError } = useContext(InvalidJWTContext);
  const [postInfos, setPostInfos] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postid;

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({ resolver: yupResolver(modifyPostSchema), mode: "all" });

  function modify(datas) {
    axios
      .put(`/newsposts/${postId}`, datas, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => navigate(`/post/${postId}`))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }

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

  useEffect(() => {
    userDatas && userDatas.role !== "admin" && setError("Non autorisé");
  }, [userDatas]);

  if (!postInfos) return <p>Chargement...</p>;

  return (
    <div className="flex justify-center">
      <div className="bg-[#780000] pt-[2rem] pb-[2rem] w-[90%] lg:w-[60%] p-[0.5rem] rounded-[1rem] flex justify-center items-center mt-[7rem] lg:mt-[10rem] lg:mb-[3rem] flex-col text-white">
        <h1 className="font-robotoCond font-[700] text-3xl md:text-4xl lg:text-5xl">
          Modifier l'article
        </h1>
        <form
          onSubmit={handleSubmit(modify)}
          className="flex flex-col items-center mt-[0.5rem] lg:mt-[2rem] w-[80%] md:w-[80%]"
        >
          <label className="text-base mt-[1rem] lg:self-start" htmlFor="title">
            Titre
          </label>
          <input
            className="bg-white text-black rounded-[0.5rem] p-[0.2rem] w-[100%]"
            type="text"
            {...register("title")}
            name="title"
            defaultValue={postInfos.title}
          />
          <div className="h-[1rem] flex w-[100%] justify-center lg:justify-start">
            {touchedFields["title"] && errors["title"] && (
              <p className="text-xs">{errors["title"].message}</p>
            )}
          </div>
          <label className="text-base mt-[1rem] lg:self-start" htmlFor="text">
            Texte
          </label>
          <textarea
            className="bg-white text-black rounded-[0.5rem] p-[0.2rem] w-[100%] h-[18rem]"
            {...register("text")}
            name="text"
            defaultValue={postInfos.content}
          />
          <div className="h-[1rem] flex w-[100%] justify-center lg:justify-start">
            {touchedFields["text"] && errors["text"] && (
              <p className="text-xs">{errors["text"].message}</p>
            )}
          </div>
          <button
            disabled={!isValid}
            className={` bg-[#003049] mt-[1.5rem] p-[1rem] rounded-[0.5rem] text-base font-[700] ${
              !isValid
                ? "opacity-50"
                : "opacity-100 hover:bg-[#669BBC] cursor-pointer"
            }`}
          >
            Modifier
          </button>
        </form>
      </div>
    </div>
  );
}
