import { NavLink, useLocation } from "react-router-dom";
import plus from "../../assets/icons/plus.png";

export default function MenuUserBottom() {
  const location = useLocation();
  const isCatalog = location.pathname === "/catalog";

  return (
    <div className="lg:hidden flex justify-center text-white text-base font-robotoCond font-[500]">
      <div className="h-[3.6rem] bg-[#780000] fixed bottom-[1rem] w-[80%] md:w-[30rem] md:h-[4rem] z-50 rounded-[1.5rem] flex justify-center items-center shadow-md">
        <ul className="flex items-center justify-evenly w-[100%] ">
          <li className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "after:content-[''] after:absolute after:bottom-[-1.05rem] after:md:bottom-[-1.28rem] after:left-0 after:w-full after:h-[0.4rem] after:bg-[#FDF0D5] after:rounded text-[#FDF0D5]"
                  : undefined
              }
              to="/collection"
            >
              Collection
            </NavLink>
          </li>
          <li
            className={`relative w-[max-content] bg-[#FFFF] rounded-[50%] p-[0.8rem] border-[0.4rem] border-[#780000] ${
              isCatalog ? "border-[#FDF0D5]" : undefined
            }`}
          >
            <NavLink to="/catalog">
              <img className="w-[2rem] md:w-[2.4rem]" src={plus} />
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive
                  ? "after:content-[''] after:absolute after:bottom-[-1.05rem] after:md:bottom-[-1.28rem] after:left-0 after:w-full after:h-[0.4rem] after:bg-[#FDF0D5] after:rounded text-[#FDF0D5]"
                  : undefined
              }
            >
              Wishlist
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
