import { Link } from "react-router-dom";
import expiredSad from "../../assets/img/expired.png";

export default function ExpiredSession() {
  return (
    <div className="mt-[10rem] flex flex-col items-center gap-[2rem]">
      <div className="flex flex-col items-center gap-[0.6rem]">
        <img src={expiredSad} className="block w-[10rem]" />
        <span className="block">Oh non, la session a expiré...</span>
      </div>
      <Link
        to="/login"
        className="bg-[#780000] text-white p-[1rem] rounded-lg cursor-pointer "
      >
        Se reconnecter
      </Link>
    </div>
  );
}
