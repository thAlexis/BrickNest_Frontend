import { NavLink } from "react-router-dom";
import plus from "../../assets/icons/plus.png";

export default function MenuUserBottom() {
  return (
    <div className="lg:hidden flex justify-center text-white text-base font-robotoCond font-[500]">
      <div className="h-[3.6rem] bg-[#780000] fixed bottom-[1rem] w-[80%] md:w-[30rem] md:h-[4rem] z-50 rounded-[1.5rem] flex justify-center items-center shadow-md">
        <ul className="flex items-center justify-evenly w-[100%]">
          <NavLink to="/collection">Collection</NavLink>
          <li className="w-[max-content] bg-[#FFFF] rounded-[50%] p-[0.8rem] border-[0.4rem] border-[#780000]">
            <NavLink to="/catalog">
              <img className="w-[2rem] md:w-[2.4rem]" src={plus} />
            </NavLink>
          </li>
          <li>Wishlist</li>
        </ul>
      </div>
    </div>
  );
}
