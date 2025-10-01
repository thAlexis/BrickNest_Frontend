import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import burgerMenu from "../../assets/icons/burgerMenu.svg";
import userIcon from "../../assets/icons/userIcon.png";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-[min-content] p-[1rem] bg-[#FDF0D5] flex justify-between fixed z-99 w-[100%]">
      <button
        className="flex-1 lg:hidden cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src={burgerMenu} className="w-[1.6rem] sm:w-[2rem]" />
      </button>
      <NavLink
        className="flex-1 flex flex-col lg:flex-row lg:gap-[0.6rem] items-center"
        to="#"
      >
        <img className="w-[2rem] sm:w-[2.4rem] lg:w-[3rem]" src={logo} />
        <span className="font-robotoCond font-[700] text-[0.8rem] sm:text-[1.2rem]">
          BrickNest
        </span>
      </NavLink>
      <ul
        className={`absolute lg:static transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto z-9999"
            : "opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        }  top-[4.8rem] sm:top-[5.2rem] bg-[#FDF0D5] left-0 p-[1rem] flex flex-col lg:flex-row gap-[1rem] transition-all duration-300 text-[0.8rem] sm:text-[1rem] rounded-br-[0.5rem]`}
      >
        <li>
          <NavLink to="#">Actualités</NavLink>
        </li>
        <li className="bg-black h-[0.01rem] lg:hidden "></li>
        <li>
          <NavLink to="#">Catalogue</NavLink>
        </li>
        <li className="bg-black h-[0.01rem] lg:hidden "></li>
        <li>
          <NavLink to="#">Chercher un utilisateur</NavLink>
        </li>
        <li className="hidden lg:block font-nunito text-white">
          <NavLink
            className="bg-[#C1121F] hover:bg-[#780000] p-[0.5rem] rounded-[0.5rem]"
            to="/register"
          >
            S'inscrire/Se connecter
          </NavLink>
        </li>
      </ul>
      <NavLink
        to="/register"
        className="flex-1 flex justify-end items-center lg:hidden"
      >
        <img
          src={userIcon}
          className="w-[2rem] h-[2rem] sm:w-[2.4rem] sm:h-[2.4rem]"
        />
      </NavLink>
    </nav>
  );
}
