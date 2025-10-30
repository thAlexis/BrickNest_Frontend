import AddToCollection from "../Buttons/AddToCollection";

export default function SetInCollecCard({
  set_num,
  set_name,
  img_link,
  parts_num,
}) {
  return (
    <div className="bg-[#780000] text-white w-[100%] rounded-xl overflow-hidden shadow-md">
      <div className="h-[12rem] bg-white flex justify-center">
        <img className="max-h-full" src={img_link} />
      </div>
      <div className="p-[0.4rem]">
        <p className="text-sm">{set_num}</p>
        <h2 className="text-base lg:text-lg font-semibold">{set_name}</h2>
        <p>{parts_num > 1 && `Nombre de pièces : ${parts_num}`}</p>
        <div className="mt-[1rem] flex justify-end">
          <AddToCollection set_num={set_num} />
        </div>
      </div>
    </div>
  );
}
