import { useContext, useEffect, useState } from "react";
import mojo from "../assets/img/arbreMojo.webp";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../validators/login.validator";
import InputField from "../components/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios.config.js";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { UserContext } from "../contexts/UserContext.jsx";

export default function Login() {
  const [error, setError] = useState();
  const [user, setUser] = useState(null);
  const { setIsAuth, setIsAdmin } = useContext(AuthContext);
  const { setToken, setUserDatas } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "all" });

  function login(loginIds) {
    console.log(loginIds);

    axios
      .post("/login", loginIds)
      .then((res) => setUser(res.data))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Un erreur est survenue");
      });
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user.userToken);
      setToken(user.userToken);
      setIsAuth(true);
      navigate("/");
    }
  }, [user]);

  return (
    <div className="lg:w-[100%] lg:h-[min-content] lg:rounded-[10rem] lg:rounded-[1rem] lg:flex lg:justify-center lg:mt-[8rem]">
      <div
        className="bg-cover bg-center h-[100vh] lg:h-[100%] relative lg:static lg:rounded-[1rem] lg:w-[40rem]"
        style={{ backgroundImage: `url(${mojo})` }}
      >
        <div className="absolute lg:static inset-0 bg-gradient-to-b from-transparent via-[#C1121F]/95 to-[#780000] lg:rounded-[1rem] lg:h-[100%] lg:pb-[1rem]">
          <div className="flex justify-center items-center mt-[7rem] md:mt-[10rem] lg:mt-[3rem] lg:mb-[3rem] flex-col">
            <h1 className="font-robotoCond font-[700] text-white text-3xl md:text-4xl lg:text-5xl">
              Connexion
            </h1>
            <form
              onSubmit={handleSubmit(login)}
              className="flex flex-col items-center text-white mt-[0.5rem] lg:mt-[2rem] w-[50%] md:w-[20rem]"
            >
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
              <div className="h-[1rem] mt-[0.5rem]">
                <span>{error}</span>
              </div>
              <button
                disabled={!isValid}
                className={` bg-[#003049] mt-[1.5rem] p-[1rem] rounded-[0.5rem] text-base font-[700] ${
                  !isValid
                    ? "opacity-50"
                    : "opacity-100 hover:bg-[#669BBC] cursor-pointer"
                }`}
              >
                Se connecter
              </button>
            </form>
            <span className="mt-[0.5rem] text-base text-white ">
              Vous n'avez pas de compte ?{" "}
              <Link to="/register" className="underline">
                Enregistrez-vous
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
