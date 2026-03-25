import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Footer() {
  const { userDatas } = useContext(UserContext);
  return (
    <div className="w-[100%] bg-[#FDF0D5] pt-[2rem]  pb-[8rem] lg:pb-[1rem] flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-[2rem] md:justify-between w-[80%]">
        <div className="flex flex-col items-center md:justify-center">
          <Link to="/">
            <img className="w-[5rem]" src={logo} />
            <span className="font-robotoCond font-[700] text-xl">
              BrickNest
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold">Liens utiles</span>
          <ul className="flex flex-col items-center md:items-start">
            <li>
              <Link className="hover:underline" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/catalog">
                Catalogue
              </Link>
            </li>
            {userDatas && (
              <li>
                <Link className="hover:underline" to="/modifyaccount">
                  Mon compte
                </Link>
              </li>
            )}
            {userDatas && (
              <li>
                <Link className="hover:underline" to="/collection">
                  Ma collection
                </Link>
              </li>
            )}
            {userDatas && (
              <li>
                <Link className="hover:underline" to="/wishlist">
                  Ma wishlist
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold">Légal</span>
          <ul className="flex flex-col items-center md:items-start">
            <li>
              <Link className="hover:underline" to="/legal">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/privacy">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[2rem]">
        <span>
          &copy; {new Date().getFullYear()} BrickNest - Tous droits réservés
        </span>
      </div>
    </div>
  );
}
