import { Link } from "react-router-dom";
import avengersTower from "../assets/img/avengersTower.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import registerSchema from "../validators/register.validator.js";
import axios from "../../axios.config.js";
import { useState } from "react";
import InputField from "../components/InputField/InputField.jsx";

export default function Register() {
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({ resolver: yupResolver(registerSchema), mode: "all" });

  function registerAccount(newAccount) {
    console.log(newAccount);

    axios
      .post("/register", newAccount)
      .then((res) => console.log(res.data))
      .catch(() => setError("Inscription refusée"));
  }

  return (
    <div className="lg:w-[100%] lg:h-[min-content] lg:rounded-[10rem] lg:rounded-[1rem] lg:flex lg:justify-center lg:mt-[8rem]">
      <div
        className="bg-cover bg-center h-[100vh] lg:h-[100%] relative lg:static lg:rounded-[1rem] lg:w-[40rem]"
        style={{ backgroundImage: `url(${avengersTower})` }}
      >
        <div className="absolute lg:static inset-0 bg-gradient-to-b from-transparent via-[#C1121F]/95 to-[#780000] lg:rounded-[1rem] lg:h-[100%] lg:pb-[1rem]">
          <div className="flex justify-center items-center mt-[7rem] md:mt-[10rem] lg:mt-[3rem] lg:mb-[3rem] flex-col">
            <h1 className="font-robotoCond font-[700] text-white text-3xl md:text-4xl lg:text-5xl">
              Inscription
            </h1>
            <form
              onSubmit={handleSubmit(registerAccount)}
              className="flex flex-col items-center text-white mt-[0.5rem] lg:mt-[2rem] w-[50%] md:w-[20rem]"
            >
              <div className="lg:flex lg:gap-[1rem] w-[100%]">
                <div className="flex flex-col items-center lg:items-start lg:w-[50%]">
                  <InputField
                    name="lastname"
                    label="Nom"
                    type="text"
                    register={register}
                    errors={errors}
                    touchedFields={touchedFields}
                  />
                </div>
                <div className="flex flex-col items-center lg:items-start lg:w-[50%]">
                  <InputField
                    name="firstname"
                    label="Prénom"
                    type="text"
                    register={register}
                    errors={errors}
                    touchedFields={touchedFields}
                  />
                </div>
              </div>

              <InputField
                name="username"
                label="Nom d'utilisateur"
                type="text"
                register={register}
                errors={errors}
                touchedFields={touchedFields}
              />

              <InputField
                name="mail"
                label="Mail"
                type="mail"
                register={register}
                errors={errors}
                touchedFields={touchedFields}
              />

              <InputField
                name="password"
                label="Mot de passe"
                type="password"
                register={register}
                errors={errors}
                touchedFields={touchedFields}
              />

              <button
                disabled={!isValid}
                className={` bg-[#003049] mt-[1.5rem] p-[1rem] rounded-[0.5rem] text-base font-[700] ${
                  !isValid
                    ? "opacity-50"
                    : "opacity-100 hover:bg-[#669BBC] cursor-pointer"
                }`}
              >
                S'inscrire
              </button>
            </form>
            <span className="mt-[0.5rem] text-base text-white ">
              Vous avez déjà un compte ?{" "}
              <Link className="underline">Connectez-vous</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
