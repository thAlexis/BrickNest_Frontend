import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import burgerMenu from "../../assets/icons/burgerMenu.svg";
import userIcon from "../../assets/icons/legoHead.png";
import crossIcon from "../../assets/icons/cross.png";
import plus from "../../assets/icons/plus.png";
import news from "../../assets/icons/news.png";
import catalog from "../../assets/icons/legoBrick.png";
import { useState } from "react";

export default function MenuUser() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  return (
    <nav className="flex justify-center">
      <div className="h-[min-content] lg:h-[4rem] pl-[1rem] pr-[1rem] p-[0.2rem] bg-[#FDF0D5] items-center flex justify-between fixed top-[1rem] z-50 w-[95%] lg:w-[80%] rounded-[1.5rem] border-[0.2rem] border-[#F1DCB1]">
        <button
          className="flex-1 lg:hidden cursor-pointer"
          onClick={() => {
            setIsOpenBurger(!isOpenBurger);
          }}
        >
          <img src={burgerMenu} className="w-[1.6rem] sm:w-[2rem]" />
        </button>
        <div className="flex-1 lg:flex">
          <NavLink
            className="flex flex-col lg:flex-row lg:gap-[0.6rem] items-center"
            to="/"
          >
            <img className="w-[2rem] md:w-[2.4rem]" src={logo} />
            <span className="font-robotoCond font-[700] text-[0.8rem] md:text-[1.2rem]">
              BrickNest
            </span>
          </NavLink>
        </div>

        <ul
          className={`hidden p-[1rem] lg:flex flex-row flex-1 justify-center items-center gap-[1rem] text-base font-robotoCond font-[500] h-[min-content]`}
        >
          <button
            className="lg:hidden"
            onClick={() => setIsOpenBurger(!isOpenBurger)}
          >
            <img className="w-[1.6rem] sm:w-[2rem]" src={crossIcon} />
          </button>
          <li className="w-[max-content]">
            <NavLink to="/catalog">Catalogue</NavLink>
          </li>
          <li className="w-[max-content]">
            <NavLink to="#">Actualité</NavLink>
          </li>
          <li className="w-[max-content]">
            <NavLink to="#">Chercher un utilisateur</NavLink>
          </li>
        </ul>

        <div className="flex-1 flex justify-end items-center">
          <NavLink to="/login" className="cursor-pointer">
            <img
              src={userIcon}
              className="w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] border-black border-[0.15rem] rounded-[50%] p-[0.2rem]"
            />
          </NavLink>
        </div>
      </div>
      {isOpenBurger && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60 lg:hidden"
          onClick={() => {
            setIsOpenBurger(false);
          }}
        ></div>
      )}
      <ul
        className={`fixed lg:hidden transition-all duration-300 ease-in-out ${
          isOpenBurger
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        } top-[0rem] bg-[#FDF0D5] left-[0] p-[1rem] flex flex-col gap-[1rem] text-base h-[100vh] z-70 w-[50%] sm:w-[30%]`}
      >
        <button
          className="lg:hidden absolute left-[1rem] p-[0.2rem]"
          onClick={() => setIsOpenBurger(!isOpenBurger)}
        >
          <img className="w-[1.6rem]" src={crossIcon} />
        </button>
        <li className="mt-[5rem] flex items-center gap-[0.5rem]">
          <img src={news} className="w-[1rem] h-[1rem]" />
          <NavLink className="text-base" to="#">
            Actualités
          </NavLink>
        </li>
        <li className="bg-gradient-to-r from-transparent via-[#780000]/90 to-transparent h-[0.15rem]"></li>
        <li className="flex items-center gap-[0.5rem]">
          <img src={catalog} className="w-[1rem] h-[1rem]" />
          <NavLink className="text-base" to="/catalog">
            Catalogue
          </NavLink>
        </li>
        <li className="bg-gradient-to-r from-transparent via-[#780000]/90 to-transparent h-[0.1rem]"></li>
        <li>
          <NavLink className="text-base" to="#">
            Chercher un utilisateur
          </NavLink>
        </li>
        <li className="hidden lg:block font-nunito text-white"></li>
      </ul>
    </nav>
  );
}
