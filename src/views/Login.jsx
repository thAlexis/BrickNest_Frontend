import { useState } from "react";
import mojo from "../assets/img/arbreMojo.webp";

export default function Login() {
  const [error, setError] = useState();

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
            <form className="flex flex-col items-center text-white mt-[0.5rem] lg:mt-[2rem] w-[50%] md:w-[20rem]"></form>
          </div>
        </div>
      </div>
    </div>
  );
}
