import { useContext, useState } from "react";
import addCollec from "../../assets/icons/collecEmpty.png";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import axios from "../../../axios.config.js";

export default function AddToCollection({ set_num }) {
  const { userDatas } = useContext(UserContext);
  const [error, setError] = useState();
  const [isAdded, setIsAdded] = useState();
  const { token } = useContext(UserContext);

  function addSetToCollection() {
    axios
      .post(`/collection/addset/${set_num}`, null, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => setIsAdded(res.data))
      .catch((err) => {
        err.response
          ? setError(err.response.data.message)
          : setError("Une erreur est survenue");
      });
  }

  return userDatas ? (
    <button
      onClick={() => addSetToCollection()}
      className="cursor-pointer bg-white p-[0.4rem] rounded-[50%] shadow-md hover:scale-[110%] transition-all duration-100"
    >
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
