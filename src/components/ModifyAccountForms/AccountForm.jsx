import { useContext, useEffect, useState } from "react";
import modifyAccountSchema from "../../validators/modifyAccount.validator.js";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../InputField/InputField";
import { InvalidJWTContext } from "../../contexts/InvalidJWTContext.jsx";
import axios from "../../../axios.config.js";

export default function AccountForm() {
  const { userDatas, token, setToken } = useContext(UserContext);
  const { error, setError } = useContext(InvalidJWTContext);
  const [modified, setModified] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({ resolver: yupResolver(modifyAccountSchema), mode: "all" });

  function updateAccount(datas) {
    axios
      .put("/accountmodification/modifyaccount", datas, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setModified(res.data))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Un erreur est survenue");
      });
  }

  useEffect(() => {
    if (modified) {
      localStorage.setItem("user", modified.newToken);
      setToken(modified.newToken);
    }
  }, [modified]);

  return (
    <div className="flex justify-center h-[85vh]">
      <form
        onSubmit={handleSubmit(updateAccount)}
        className="w-[80%] mt-[2rem]  flex flex-col"
      >
        <InputField
          name="lastname"
          label="Nom"
          type="text"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          defaultValue={userDatas.lastname}
        />
        <InputField
          name="firstname"
          label="Prénom"
          type="text"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          defaultValue={userDatas.firstname}
        />
        <InputField
          name="username"
          label="Nom d'utilisateur"
          type="text"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          defaultValue={userDatas.username}
        />
        <InputField
          name="mail"
          label="Mail"
          type="text"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
          defaultValue={userDatas.mail}
        />
        <button
          disabled={!isValid}
          className={`self-center w-[max-content] text-white bg-[#003049] mt-[1.5rem] p-[1rem] rounded-[0.5rem] text-base font-[700] ${
            !isValid
              ? "opacity-50"
              : "opacity-100 hover:bg-[#669BBC] cursor-pointer"
          }`}
        >
          Modifier
        </button>
        {modified && (
          <p className="self-center mt-[1rem]">{modified.message}</p>
        )}
      </form>
    </div>
  );
}
