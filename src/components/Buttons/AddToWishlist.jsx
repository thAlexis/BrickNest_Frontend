import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import addWishlist from "../../assets/icons/emptyHeart.png";
import { Link } from "react-router-dom";

export default function AddToWishlist({ set_num }) {
  const { userDatas } = useContext(UserContext);

  return userDatas ? (
    <button className="cursor-pointer bg-white p-[0.4rem] rounded-[50%] shadow-md hover:scale-[110%] transition-all duration-100">
      <img className="w-[1rem] lg:w-[1.4rem]" src={addWishlist} />
    </button>
  ) : (
    <Link
      to="/login"
      className="cursor-pointer bg-white p-[0.4rem] rounded-[50%] shadow-md hover:scale-[110%] transition-all duration-100"
    >
      <img className="w-[1rem]" src={addWishlist} />
    </Link>
  );
}
