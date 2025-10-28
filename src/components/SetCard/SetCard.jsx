import AddToCollection from "../Buttons/AddToCollection";
import AddToWishlist from "../Buttons/AddToWishlist";

export default function SetCard({ set_num, set_name, img_link, parts_num }) {
  return (
    <div className="bg-[#FDF0D5] flex w-[100%] h-[8rem] rounded-xl shadow-md overflow-hidden">
      <div className="h-[8rem] w-[40%] flex justify-center items-center bg-white">
        <img className="max-h-full" src={img_link} />
      </div>
      <div className="w-[60%] p-[0.2rem] flex flex-col justify-between">
        <div>
          <div className="flex justify-between text-sm">
            <p>{set_num}</p>
            <p>{parts_num > 1 && `${parts_num} pièces`}</p>
          </div>
          <h2 className="text-base font-semibold">{set_name}</h2>
        </div>
        <div className="flex justify-end gap-[0.6rem] mb-[0.4rem] mr-[0.4rem]">
          <AddToCollection />
          <AddToWishlist />
        </div>
      </div>
    </div>
  );
}
