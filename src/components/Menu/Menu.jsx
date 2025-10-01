import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export default function Menu() {
  return (
    <div className="h-[min-content] p-[1rem] pl-[2rem] pr-[2rem] bg-[#FDF0D5]">
      <nav className="flex justify-between items-center">
        <NavLink className="flex gap-[0.5rem] items-center">
          <img src={logo} className="w-[3rem]" />
          <span className="font-robotoCond font-[700] text-[1.4rem]">
            BrickNest
          </span>
        </NavLink>
        <ul className="flex gap-[1.2rem]">
          <li>
            <NavLink className="hover:text-[#669BBC]" to="#">
              Actualités
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-[#669BBC]" to="#">
              Parcourir les sets
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-[#669BBC]" to="#">
              Rechercher un utilisateur
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white bg-[#C1121F] hover:bg-[#780000] p-[0.8rem] rounded-[0.5rem]"
              to="#"
            >
              S'inscrire/Se connecter
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
