import { Link } from "react-router-dom";
import avengersTower from "../assets/img/avengersTower.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import registerSchema from "../validators/register.validator.js";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema), mode: "onBlur" });

  console.log(errors.username);

  return (
    <div className="lg:w-[100%] lg:h-[min-content] lg:rounded-[10rem] lg:rounded-[1rem] lg:flex lg:justify-center lg:mt-[10%]">
      <div
        className="bg-cover bg-center h-[100vh] lg:h-[100%] relative lg:static lg:rounded-[1rem] lg:w-[40rem]"
        style={{ backgroundImage: `url(${avengersTower})` }}
      >
        <div className="absolute lg:static inset-0 bg-gradient-to-b from-transparent via-[#C1121F]/95 to-[#780000] lg:rounded-[1rem] lg:h-[100%] lg:pb-[1rem]">
          <div className="flex justify-center items-center mt-[30%] lg:mt-[3rem] lg:mb-[3rem] flex-col">
            <h1 className="font-robotoCond font-[700] text-white text-[2rem] lg:text-[2.8rem]">
              Inscription
            </h1>
            <form className="flex flex-col items-center text-white mt-[0.5rem] lg:mt-[2rem] w-[50%] md:w-[20rem]">
              <div className="lg:flex lg:gap-[1rem] w-[100%]">
                <div className="flex flex-col items-center lg:items-start">
                  <label className="text-[1rem]" for="lastname">
                    Nom
                  </label>
                  <input
                    {...register("lastname")}
                    className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
                    type="text"
                    name="lastname"
                  />
                  {errors.lastname && <p>{errors.lastname.message}</p>}
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <label className="text-[1rem]" for="firstname">
                    Prénom
                  </label>
                  <input
                    className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
                    type="text"
                    {...register("firstname")}
                    name="firstname"
                  />
                  {errors.firstname && <p>{errors.firstname.message}</p>}
                </div>
              </div>
              <label className="text-[1rem] lg:self-start" for="username">
                Nom d'utilisateur
              </label>
              <input
                className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
                type="text"
                {...register("username")}
                name="username"
              />
              {errors.username && <p>{errors.username.message}</p>}
              <label className="text-[1rem] lg:self-start" for="mail">
                Mail
              </label>
              <input
                className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
                type="mail"
                {...register("mail")}
                name="mail"
              />
              {errors.mail && <p>{errors.mail.message}</p>}
              <label className="text-[1rem] lg:self-start" for="password">
                Mot de passe
              </label>
              <input
                className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
                type="password"
                {...register("password")}
                name="password"
              />
              {errors.password && <p>{errors.password.message}</p>}
              <button className="bg-[#003049] mt-[0.5rem] p-[1rem] rounded-[0.5rem] text-[1rem] hover:bg-[#669BBC] font-[700]">
                S'inscrire
              </button>
            </form>
            <span className="mt-[0.5rem] text-white">
              Vous avez déjà un compte ?{" "}
              <Link className="underline">Connectez-vous</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
