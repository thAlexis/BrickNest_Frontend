import AddToCollection from "../Buttons/AddToCollection";
import AddToWishlist from "../Buttons/AddToWishlist";

export default function SetCard({ set_num, set_name, img_link, parts_num }) {
  return (
    <div className="bg-[#780000] text-white flex w-[100%] h-[8rem] rounded-xl shadow-md overflow-hidden">
      <div className="h-[8rem] w-[40%] lg:w-[30%] flex justify-center items-center bg-white">
        <img className="max-h-full" src={img_link} />
      </div>
      <div className="w-[60%] lg:w-[70%] p-[0.2rem] flex flex-col justify-between mr-[0.4rem]">
        <div>
          <div className="flex justify-between text-sm">
            <p>{set_num}</p>
            <p>{parts_num > 1 && `${parts_num} pièces`}</p>
          </div>
          <h2 className="text-sm md:text-base lg:text-lg font-semibold">
            {set_name}
          </h2>
        </div>
        <div className="flex justify-end gap-[0.6rem] lg:gap-[1rem] mb-[0.4rem]">
          <AddToCollection set_num={set_num} />
          <AddToWishlist set_num={set_num} />
        </div>
      </div>
    </div>
  );
}
