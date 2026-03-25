import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { InvalidJWTContext } from "../contexts/InvalidJWTContext.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import newPostSchema from "../validators/newPost.validator.js";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField/InputField.jsx";
import axios from "../../axios.config.js";
import { useNavigate } from "react-router-dom";

export default function NewPostForm() {
  const { userDatas, token } = useContext(UserContext);
  const { error, setError } = useContext(InvalidJWTContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({ resolver: yupResolver(newPostSchema), mode: "all" });

  function sendNewPost(data) {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("text", data.text);

    axios
      .post("/newsposts", formData, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => navigate(`/post/${res.data.postId}`))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }

  useEffect(() => {
    userDatas && userDatas.role !== "admin" && setError("Non autorisé");
  }, [userDatas]);

  return (
    <div className="flex justify-center mb-[20vh]">
      <div className="bg-[#780000] pt-[2rem] pb-[2rem] w-[90%] lg:w-[60%] p-[0.5rem] rounded-[1rem] flex justify-center items-center mt-[7rem] lg:mt-[10rem] lg:mb-[3rem] flex-col text-white">
        <h1 className="font-robotoCond font-[700] text-3xl md:text-4xl lg:text-5xl">
          Rédiger un nouvel article
        </h1>
        <form
          onSubmit={handleSubmit(sendNewPost)}
          className="flex flex-col items-center mt-[0.5rem] lg:mt-[2rem] w-[80%] md:w-[80%]"
          encType="multipart/form-data"
        >
          <InputField
            name="image"
            label="Image"
            type="file"
            register={register}
            errors={errors}
            touchedFields={touchedFields}
          />
          <InputField
            name="title"
            label="Titre"
            type="text"
            register={register}
            errors={errors}
            touchedFields={touchedFields}
          />
          <label className="text-base mt-[1rem] lg:self-start" htmlFor="text">
            Texte
          </label>
          <textarea
            className="bg-white text-black rounded-[0.5rem] p-[0.2rem] w-[100%] h-[18rem]"
            {...register("text")}
            name="text"
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
            Publier
          </button>
        </form>
      </div>
    </div>
  );
}
