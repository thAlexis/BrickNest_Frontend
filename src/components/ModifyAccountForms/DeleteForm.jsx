import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { InvalidJWTContext } from "../../contexts/InvalidJWTContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import deleteAccountSchema from "../../validators/deleteAccount.validator";
import InputField from "../InputField/InputField";
import axios from "../../../axios.config.js";
import { useNavigate } from "react-router-dom";

export default function DeleteForm() {
  const { token, setUserDatas, setToken } = useContext(UserContext);
  const { error, setError } = useContext(InvalidJWTContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({ resolver: yupResolver(deleteAccountSchema), mode: "all" });

  function disconnect() {
    localStorage.removeItem("user");
    setUserDatas(null);
    setToken(null);
    navigate("/login");
  }

  function deleteAccount() {
    axios
      .delete("/deleteaccount", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => disconnect())
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Un erreur est survenue");
      });
  }

  return (
    <div className="flex justify-center h-[85vh]">
      <form
        onSubmit={handleSubmit(deleteAccount)}
        className="w-[80%] md:w-[60%] lg:w-[40%] mt-[2rem]  flex flex-col"
      >
        <InputField
          name="delete"
          label="Tapez 'Supprimer' pour valider"
          type="text"
          register={register}
          errors={errors}
          touchedFields={touchedFields}
        />
        <button
          disabled={!isValid}
          className={`self-center w-[max-content] text-white bg-[#780000] mt-[1.5rem] p-[1rem] rounded-[0.5rem] text-base font-[700] ${
            !isValid
              ? "opacity-50"
              : "opacity-100 hover:bg-[#C1121F] cursor-pointer"
          }`}
        >
          Supprimer
        </button>
      </form>
    </div>
  );
}
