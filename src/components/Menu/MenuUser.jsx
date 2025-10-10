import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import burgerMenu from "../../assets/icons/burgerMenu.svg";
import userIcon from "../../assets/icons/legoHeadYellow.png";
import crossIcon from "../../assets/icons/cross.png";
import whiteCross from "../../assets/icons/whiteCross.png";
import wishlist from "../../assets/icons/wishlist.png";
import parametres from "../../assets/icons/parametres.png";
import collection from "../../assets/icons/collection.png";
import plus from "../../assets/icons/plus.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

export default function MenuUser() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const { setIsAuth, setIsAdmin } = useContext(AuthContext);
  const { userDatas, setUserDatas, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  function disconnect() {
    localStorage.removeItem("user");
    setIsAuth(false);
    setIsAdmin(false);
    setUserDatas(null);
    setToken(null);
    navigate("/login");
  }

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
            to="#"
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
            <NavLink to="#">Collection</NavLink>
          </li>
          <li className="bg-black h-[0.01rem] lg:hidden "></li>
          <li className="w-[max-content] bg-white rounded-[50%] p-[1rem] border-[0.4rem] border-[#F1DCB1] hover:scale-[110%] transition-all duration-300">
            <NavLink to="#">
              <img className="w-[2rem]" src={plus} />
            </NavLink>
          </li>
          <li className="bg-black h-[0.01rem] lg:hidden "></li>
          <li className="w-[max-content]">
            <NavLink to="#">Wishlist</NavLink>
          </li>
        </ul>

        <div className="flex-1 flex justify-end items-center">
          <button
            onClick={() => setIsOpenUser(!isOpenUser)}
            className="cursor-pointer"
          >
            <img
              src={userIcon}
              className="w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] border-black border-[0.15rem] rounded-[50%] p-[0.2rem]"
            />
          </button>
        </div>
      </div>
      {(isOpenBurger && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60 lg:hidden"
          onClick={() => {
            setIsOpenBurger(false);
            setIsOpenUser(false);
          }}
        ></div>
      )) ||
        (isOpenUser && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60"
            onClick={() => {
              setIsOpenBurger(false);
              setIsOpenUser(false);
            }}
          ></div>
        ))}
      <ul
        className={`fixed lg:static lg:hidden transition-all duration-300 ease-in-out ${
          isOpenBurger
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        } top-[0rem] bg-[#FDF0D5] left-[0] p-[1rem] flex flex-col lg:flex-row gap-[1rem] transition-all pt-[1rem] lg:pt-[1rem] duration-300 text-base h-[100vh] lg:h-[min-content] z-70`}
      >
        <button
          className="lg:hidden"
          onClick={() => setIsOpenBurger(!isOpenBurger)}
        >
          <img className="w-[1.6rem] sm:w-[2rem]" src={crossIcon} />
        </button>
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
        <li className="hidden lg:block font-nunito text-white"></li>
      </ul>

      {/* ////////// MENU USER SLIDE FROM RIGHT //////////// */}
      <div
        className={`fixed transition-all duration-300 ease-in-out ${
          isOpenUser
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        } top-[0rem] bg-[#003049] right-[0] p-[1rem] flex flex-col gap-[1rem] transition-all pt-[1rem] duration-300 text-base h-[100vh] z-70 lg:w-[20%] text-white`}
      >
        <button
          className="absolute right-[1rem] cursor-pointer hover:bg-[#084667] transition-all rounded-[50%] p-[0.2rem]"
          onClick={() => setIsOpenUser(!isOpenUser)}
        >
          <img className="w-[1.6rem]" src={whiteCross} />
        </button>
        <span className="font-robotoCond font-bold text-2xl md:text-3xl lg:text-4xl mt-[3rem] border-[0.2rem] border-[#669BBC] bg-[#084667] p-[1rem] rounded-br-2xl rounded-tl-2xl">
          {userDatas.username}
        </span>
        <ul className="flex flex-col gap-[0.4rem] mt-[1rem]">
          <li className="flex gap-[0.5rem] items-center hover:bg-[#084667] transition-all duration-300 p-[0.6rem] rounded-md">
            <img src={collection} className="w-[1rem] h-[1rem]" />
            <NavLink className="text-base" to="#">
              Ma collection
            </NavLink>
          </li>
          <li className="bg-gradient-to-r from-transparent via-[#669BBC]/90 to-transparent h-[0.15rem]"></li>
          <li className="flex gap-[0.5rem] items-center hover:bg-[#084667] transition-all duration-300 p-[0.6rem] rounded-md">
            <img src={wishlist} className="w-[1rem] h-[1rem]" />
            <NavLink className="text-base" to="#">
              Ma wishlist
            </NavLink>
          </li>
          <li className="bg-gradient-to-r from-transparent via-[#669BBC]/90 to-transparent h-[0.15rem]"></li>
          <li className="flex gap-[0.5rem] items-center hover:bg-[#084667] transition-all duration-300 p-[0.6rem] rounded-md">
            <img src={parametres} className="w-[1rem] h-[1rem]" />
            <NavLink className="text-base" to="#">
              Gérer mon compte
            </NavLink>
          </li>
        </ul>
        <button
          onClick={() => disconnect()}
          className="bg-[#780000] hover:bg-[#C1121F] transition-all duration-300 cursor-pointer p-[1rem] rounded-[0.5rem] mt-auto text-base"
        >
          Se déconnecter
        </button>
      </div>
    </nav>
  );
}
