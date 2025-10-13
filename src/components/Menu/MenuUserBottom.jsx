import { NavLink } from "react-router-dom";
import plus from "../../assets/icons/plus.png";

export default function MenuUserBottom() {
  return (
    <div className="lg:hidden flex justify-center text-white text-base font-robotoCond font-[500]">
      <div className="h-[3.6rem] bg-[#780000] fixed bottom-[1rem] w-[80%] md:w-[30rem] md:h-[4rem] z-50 rounded-[1.5rem] flex justify-center items-center">
        <ul className="flex items-center justify-evenly w-[100%]">
          <li>Collection</li>
          <li className="w-[max-content] bg-[#FDF0D5] rounded-[50%] p-[0.8rem] border-[0.4rem] border-[#780000]">
            <NavLink>
              <img className="w-[2rem] md:w-[2.4rem]" src={plus} />
            </NavLink>
          </li>
          <li>Wishlist</li>
        </ul>
      </div>
    </div>
  );
}
