import { Link } from "react-router-dom";
import avengersTower from "../assets/img/avengersTower.png";

export default function Register() {
  return (
    <div
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url(${avengersTower})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C1121F]/95 to-[#780000]">
        <div className="flex justify-center items-center mt-[10rem] flex-col">
          <h1 className="font-robotoCond font-[700] text-white text-[2.8rem]">
            Inscription
          </h1>
          <form className="flex flex-col items-center text-white mt-[2rem] w-[50%]">
            <label className="text-[1rem]" for="lastname">
              Nom
            </label>
            <input
              className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
              type="text"
              name="lastname"
            />
            <label className="text-[1rem]" for="firstname">
              Prénom
            </label>
            <input
              className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
              type="text"
              name="firstname"
            />
            <label className="text-[1rem]" for="username">
              Nom d'utilisateur
            </label>
            <input
              className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
              type="text"
              name="username"
            />
            <label className="text-[1rem]" for="mail">
              Mail
            </label>
            <input
              className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
              type="mail"
              name="mail"
            />
            <label className="text-[1rem]" for="password">
              Mot de passe
            </label>
            <input
              className="bg-white text-black rounded-[0.5rem] p-[0.2rem] mb-[1rem] w-[100%]"
              type="password"
              name="password"
            />
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
  );
}
