export default function SetCard({ set_num, set_name, img_link }) {
  return (
    <div className="bg-[#FDF0D5] flex w-[100%] h-[8rem]">
      <div>
        <img className="h-[5rem]" src={img_link} />
      </div>
      <div>
        <h2>{set_name}</h2>
        <span>{set_num}</span>
      </div>
    </div>
  );
}
