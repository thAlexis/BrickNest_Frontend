import { useContext } from "react";
import addCollec from "../../assets/icons/collecEmpty.png";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export default function AddToCollection({ set_num }) {
  const { userDatas } = useContext(UserContext);

  return userDatas ? (
    <button className="cursor-pointer bg-white p-[0.4rem] rounded-[50%] shadow-md hover:scale-[110%] transition-all duration-100">
      <img className="w-[1rem] lg:w-[1.4rem]" src={addCollec} />
    </button>
  ) : (
    <Link
      to="/login"
      className="cursor-pointer bg-white p-[0.4rem] rounded-[50%] shadow-md hover:scale-[110%] transition-all duration-100"
    >
      <img className="w-[1rem]" src={addCollec} />
    </Link>
  );
}
