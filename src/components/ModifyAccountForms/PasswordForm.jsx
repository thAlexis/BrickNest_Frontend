import { useContext, useState } from "react";
import { InvalidJWTContext } from "../../contexts/InvalidJWTContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import modifyPasswordSchema from "../../validators/modifyPassword.validator.js";
import InputField from "../InputField/InputField";
import axios from "../../../axios.config.js";
import { UserContext } from "../../contexts/UserContext";

export default function PasswordForm() {
  const { token } = useContext(UserContext);
  const { error, setError } = useContext(InvalidJWTContext);
  const [modified, setModified] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({ resolver: yupResolver(modifyPasswordSchema), mode: "all" });

  function updatePassword(datas) {
    setError("");
    setModified("");

    axios
      .put("/accountmodification/updatepassword", datas, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setModified(res.data))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Un erreur est survenue");
      });
  }

  return (
    <div className="flex justify-center h-[85vh]">
      <form
        onSubmit={handleSubmit(updatePassword)}
        className="w-[80%] md:w-[60%] lg:w-[40%] mt-[2rem]  flex flex-col"
      >
        <InputField
          name="password"
          label="Mot de passe"
          type="password"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
        />
        <InputField
          name="newpassword"
          label="Nouveau mot de passe"
          type="password"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
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
