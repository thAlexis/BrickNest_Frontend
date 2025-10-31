import AddToCollection from "../Buttons/AddToCollection";

export default function SetInCollecCard({
  set_num,
  set_name,
  img_link,
  parts_num,
}) {
  return (
    <div className="bg-[#780000] text-white h-[20rem] md:h-[25rem]  w-[100%] rounded-xl overflow-hidden shadow-md pb-[0.4rem]">
      <div className="bg-white flex justify-center h-[60%]">
        <img className="max-w-full max-h-full object-contain" src={img_link} />
      </div>
      <div className="pt-[0.4rem] pl-[0.4rem] pr-[0.4rem] flex flex-col justify-between h-[40%]">
        <div>
          <p className="text-sm">{set_num}</p>
          <h2 className="text-base lg:text-lg font-semibold">{set_name}</h2>
          <p>{parts_num > 1 && `Nombre de pièces : ${parts_num}`}</p>
        </div>
        <div className="mt-[1rem] flex justify-end">
          <AddToCollection set_num={set_num} />
        </div>
      </div>
    </div>
  );
}
